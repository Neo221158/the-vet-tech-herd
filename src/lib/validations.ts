import { z } from 'zod';

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name must be less than 100 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(1, 'Subject is required').max(200, 'Subject must be less than 200 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000, 'Message must be less than 1000 characters'),
});

// Collaboration form validation schema
export const collaborationFormSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name must be less than 100 characters'),
  email: z.string().email('Please enter a valid email address'),
  organization: z.string().min(1, 'Organization is required').max(100, 'Organization must be less than 100 characters'),
  collaborationType: z.string().min(1, 'Collaboration type is required'),
  projectTitle: z.string().min(1, 'Project title is required').max(200, 'Project title must be less than 200 characters'),
  description: z.string().min(20, 'Description must be at least 20 characters').max(2000, 'Description must be less than 2000 characters'),
  timeline: z.string().min(1, 'Timeline is required'),
});

// Join form validation schema
export const joinFormSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name must be less than 50 characters'),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name must be less than 50 characters'),
  email: z.string().email('Please enter a valid email address'),
  linkedin: z.string().url('Please enter a valid LinkedIn URL').optional().or(z.literal('')),
  currentRole: z.string().min(1, 'Current role is required'),
  experience: z.string().min(1, 'Experience level is required'),
  interests: z.string().min(1, 'Interests are required').max(500, 'Interests must be less than 500 characters'),
  background: z.string().min(20, 'Background must be at least 20 characters').max(1000, 'Background must be less than 1000 characters'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type CollaborationFormData = z.infer<typeof collaborationFormSchema>;
export type JoinFormData = z.infer<typeof joinFormSchema>;