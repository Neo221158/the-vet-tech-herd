# Google Forms Backend Setup Guide

This guide will help you set up a free, secure backend using Google Forms and Sheets for The Vet Tech Herd website.

## 🎯 What You'll Get

- ✅ **Free forever** (Google's free tier)
- ✅ **Enterprise-grade security** (Google's infrastructure)
- ✅ **Automatic data backup** (Google Drive)
- ✅ **Email notifications** when forms are submitted
- ✅ **Easy data management** with Google Sheets
- ✅ **GDPR compliant** data handling
- ✅ **Professional form validation**

## 📋 Step-by-Step Setup

### Step 1: Create Google Forms

You need to create 3 Google Forms:

#### 1. Member Registration Form
1. Go to [forms.google.com](https://forms.google.com)
2. Click "Create a new form"
3. Title: "Vet Tech Herd - Member Registration"
4. Add these questions **in this exact order**:

   - **First Name** (Short answer, Required)
   - **Last Name** (Short answer, Required)  
   - **Email Address** (Short answer, Required, Email validation)
   - **Current Role** (Multiple choice, Required)
     - Options: Practicing Veterinarian, Currently in Tech Industry, Veterinary Student, Veterinary Resident, Academic/Research, Entrepreneur, Other
   - **Tech Experience Level** (Multiple choice)
     - Options: No tech experience, Beginner (learning basics), Intermediate (some projects/courses), Advanced (professional experience), Expert (senior level)
   - **Areas of Interest** (Short answer)
   - **Tell us about yourself** (Paragraph)
   - **LinkedIn Profile** (Short answer)

#### 2. Contact Form
1. Create new form: "Vet Tech Herd - Contact"
2. Add these questions:
   - **Name** (Short answer, Required)
   - **Email** (Short answer, Required, Email validation)
   - **Subject** (Short answer, Required)
   - **Message** (Paragraph, Required)

#### 3. Collaboration Form
1. Create new form: "Vet Tech Herd - Collaboration"
2. Add these questions:
   - **Name** (Short answer, Required)
   - **Email** (Short answer, Required, Email validation)
   - **Project Type** (Multiple choice, Required)
     - Options: Mobile App, Web Platform, AI/ML Project, Data Analysis, Research Collaboration, Startup Idea, Other
   - **Project Description** (Paragraph, Required)
   - **Skills Needed** (Short answer)
   - **Timeline** (Multiple choice)
     - Options: ASAP, 1-3 months, 3-6 months, 6+ months, Flexible

### Step 2: Configure Email Notifications

For each form:
1. Click the "Responses" tab
2. Click the three dots (⋮) → "Get email notifications for new responses"
3. Enable notifications so you get emails when people submit

### Step 3: Get Form Entry IDs

For each form, you need to get the entry IDs:

1. Open your form
2. Click "Preview" (eye icon)
3. Open browser Developer Tools (F12)
4. Go to Network tab
5. Fill out and submit the form
6. Look for the network request to `formResponse`
7. Copy the entry IDs from the form data

**Example of what you'll see:**
```
entry.123456789: John
entry.987654321: Doe
entry.456789123: john@example.com
```

### Step 4: Update the Code

Open `src/lib/google-forms.ts` and replace the placeholder values:

```typescript
const GOOGLE_FORMS_CONFIG = {
  memberRegistration: {
    formId: 'YOUR_ACTUAL_FORM_ID_HERE', // From the form URL
    fields: {
      firstName: 'entry.YOUR_ENTRY_ID',
      lastName: 'entry.YOUR_ENTRY_ID',
      email: 'entry.YOUR_ENTRY_ID',
      // ... etc
    }
  },
  // ... repeat for other forms
};
```

### Step 5: Set Up Google Sheets (Automatic)

Google automatically creates a spreadsheet for each form:
1. In your form, click "Responses" tab
2. Click the green Sheets icon to create a linked spreadsheet
3. This will contain all form submissions

### Step 6: Optional - Set Up Email Automation

You can create automated welcome emails using Google Apps Script:

1. In your Google Sheet, go to Extensions → Apps Script
2. Add this code for automated emails:

```javascript
function onFormSubmit(e) {
  const responses = e.values;
  const email = responses[2]; // Assuming email is in column C
  const firstName = responses[0]; // Assuming first name is in column A
  
  // Send welcome email
  MailApp.sendEmail({
    to: email,
    subject: "Welcome to The Vet Tech Herd! 🎉",
    htmlBody: `
      <h2>Welcome ${firstName}!</h2>
      <p>Thank you for joining The Vet Tech Herd community.</p>
      <p>We'll be in touch soon with next steps and upcoming events.</p>
      <p>Best regards,<br>The Vet Tech Herd Team</p>
    `
  });
}
```

3. Set up trigger: Edit → Current project's triggers → Add trigger
4. Choose: onFormSubmit, From spreadsheet, On form submit

## 🔒 Security Features

Your setup includes:

- **Rate limiting** (3 attempts per 5 minutes per form)
- **Input sanitization** (prevents XSS attacks)
- **Email validation** (prevents invalid emails)
- **HTTPS encryption** (Google's secure infrastructure)
- **Access controls** (only you can access the data)

## 📊 Managing Your Data

### View Submissions
- Open the linked Google Sheets for each form
- Data appears in real-time as forms are submitted

### Export Data
- File → Download → Excel (.xlsx) or CSV
- Perfect for analysis or moving to other systems later

### Backup
- All data is automatically backed up to Google Drive
- You can also manually download copies

## 🚀 Next Steps

After setting up:

1. **Test all forms** from your website
2. **Verify email notifications** are working
3. **Set up automated responses** (optional)
4. **Monitor submissions** in Google Sheets

## 📈 Scaling Up Later

When you're ready to scale:

- **Database**: Move to PostgreSQL/MySQL
- **Authentication**: Add user accounts
- **API**: Build REST API with Node.js/Python
- **Advanced features**: Member portal, event management
- **Mobile app**: React Native with shared backend

## 💡 Tips

- Keep form URLs private (only embed in your website)
- Regularly download backups of your data
- Monitor for spam submissions and add additional validation if needed
- Consider using Google Workspace for additional features

---

**Need help?** Create an issue in the repository with your questions!