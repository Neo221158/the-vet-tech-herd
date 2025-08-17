import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';
import { GoogleFormsService, isValidEmail, checkFormRateLimit } from '@/lib/google-forms';
import { sanitizeString, sanitizeEmail } from '@/lib/security';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Check rate limiting
      if (!checkFormRateLimit('contact-form', 3, 300000)) { // 3 attempts per 5 minutes
        toast({
          title: "Too many attempts",
          description: "Please wait 5 minutes before submitting again.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      // Validate required fields
      if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        toast({
          title: "Missing required fields",
          description: "Please fill in all required fields.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      // Validate email
      if (!isValidEmail(formData.email)) {
        toast({
          title: "Invalid email",
          description: "Please enter a valid email address.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      // Sanitize form data
      const sanitizedData = {
        name: sanitizeString(formData.name),
        email: sanitizeEmail(formData.email),
        subject: sanitizeString(formData.subject),
        message: sanitizeString(formData.message),
      };

      // Submit to Google Forms
      const success = await GoogleFormsService.submitContactForm(sanitizedData);
      
      if (success) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. We'll get back to you soon.",
        });
        
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error: any) {
      console.error('Contact form submission error:', error);
      toast({
        title: "Error sending message",
        description: "Please try again later. If the problem persists, contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Basic sanitization on input change
    const sanitizedValue = name === 'email' ? sanitizeEmail(value) : sanitizeString(value);
    
    setFormData({
      ...formData,
      [name]: sanitizedValue,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Send className="h-5 w-5 text-primary" />
          Send us a message
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">Subject *</Label>
            <Input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="What is this regarding?"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell us more about how we can help..."
              className="min-h-[120px]"
            />
          </div>

          <Button 
            type="submit" 
            className="btn-primary w-full" 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
            {!isSubmitting && <Send className="ml-2 h-4 w-4" />}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}