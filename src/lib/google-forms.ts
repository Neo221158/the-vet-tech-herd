// Google Forms Integration
// This file handles secure submission to Google Forms while maintaining our custom UI

interface GoogleFormConfig {
  formId: string;
  fields: Record<string, string>; // Maps our field names to Google Form entry IDs
}

// Form configurations - you'll need to replace these with your actual Google Form IDs
const GOOGLE_FORMS_CONFIG = {
  memberRegistration: {
    formId: 'YOUR_MEMBER_FORM_ID', // Replace with actual Google Form ID
    fields: {
      firstName: 'entry.123456789',
      lastName: 'entry.987654321',
      email: 'entry.456789123',
      currentRole: 'entry.789123456',
      experience: 'entry.321654987',
      interests: 'entry.654987321',
      background: 'entry.147258369',
      linkedin: 'entry.963852741',
    }
  },
  contact: {
    formId: 'YOUR_CONTACT_FORM_ID', // Replace with actual Google Form ID
    fields: {
      name: 'entry.111222333',
      email: 'entry.444555666',
      subject: 'entry.777888999',
      message: 'entry.101112131',
    }
  },
  collaboration: {
    formId: 'YOUR_COLLABORATION_FORM_ID', // Replace with actual Google Form ID
    fields: {
      name: 'entry.141516171',
      email: 'entry.181920212',
      projectType: 'entry.232425262',
      description: 'entry.272829303',
      skills: 'entry.313233343',
      timeline: 'entry.353637383',
    }
  }
};

export class GoogleFormsService {
  private static async submitToGoogleForm(
    config: GoogleFormConfig, 
    data: Record<string, string>
  ): Promise<boolean> {
    try {
      // Create FormData for Google Forms submission
      const formData = new FormData();
      
      // Map our field names to Google Form entry IDs
      Object.entries(data).forEach(([fieldName, value]) => {
        const entryId = config.fields[fieldName];
        if (entryId && value) {
          formData.append(entryId, value);
        }
      });

      // Submit to Google Forms
      const response = await fetch(
        `https://docs.google.com/forms/d/e/${config.formId}/formResponse`,
        {
          method: 'POST',
          body: formData,
          mode: 'no-cors', // Required for Google Forms
        }
      );

      // Note: Due to CORS, we can't read the response, but no error means success
      return true;
    } catch (error) {
      console.error('Error submitting to Google Form:', error);
      return false;
    }
  }

  static async submitMemberRegistration(data: {
    firstName: string;
    lastName: string;
    email: string;
    currentRole: string;
    experience: string;
    interests: string;
    background: string;
    linkedin: string;
  }): Promise<boolean> {
    return this.submitToGoogleForm(GOOGLE_FORMS_CONFIG.memberRegistration, data);
  }

  static async submitContactForm(data: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }): Promise<boolean> {
    return this.submitToGoogleForm(GOOGLE_FORMS_CONFIG.contact, data);
  }

  static async submitCollaborationForm(data: {
    name: string;
    email: string;
    projectType: string;
    description: string;
    skills: string;
    timeline: string;
  }): Promise<boolean> {
    return this.submitToGoogleForm(GOOGLE_FORMS_CONFIG.collaboration, data);
  }
}

// Email validation utility
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Rate limiting for security
export const rateLimitStore = new Map<string, { count: number; lastReset: number }>();

export const checkFormRateLimit = (identifier: string, maxAttempts = 3, windowMs = 300000): boolean => {
  const now = Date.now();
  const key = `form_${identifier}`;
  const record = rateLimitStore.get(key);

  if (!record || now - record.lastReset > windowMs) {
    rateLimitStore.set(key, { count: 1, lastReset: now });
    return true;
  }

  if (record.count >= maxAttempts) {
    return false;
  }

  record.count++;
  return true;
};