import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Users } from 'lucide-react';
import { GoogleFormsService, isValidEmail, checkFormRateLimit } from '@/lib/google-forms';
import { sanitizeString, sanitizeEmail } from '@/lib/security';

export function JoinForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    currentRole: '',
    experience: '',
    interests: '',
    background: '',
    linkedin: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Rate limiting check
      if (!checkFormRateLimit('member-registration', 3, 300000)) {
        toast({
          title: "Too many attempts",
          description: "Please wait 5 minutes before submitting again.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      // Validate required fields
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.currentRole) {
        toast({
          title: "Missing required fields",
          description: "Please fill in all required fields marked with *",
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
        firstName: sanitizeString(formData.firstName),
        lastName: sanitizeString(formData.lastName),
        email: sanitizeEmail(formData.email),
        currentRole: sanitizeString(formData.currentRole),
        experience: sanitizeString(formData.experience),
        interests: sanitizeString(formData.interests),
        background: sanitizeString(formData.background),
        linkedin: sanitizeString(formData.linkedin),
      };

      // Submit to Google Forms
      const success = await GoogleFormsService.submitMemberRegistration(sanitizedData);
      
      if (success) {
        toast({
          title: "Welcome to the Herd! 🎉",
          description: "Thank you for joining. You'll receive a welcome email with next steps.",
        });
        
        // Clear form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          currentRole: '',
          experience: '',
          interests: '',
          background: '',
          linkedin: '',
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error submitting application",
        description: "Please try again later. If the problem persists, contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-5 w-5 text-primary" />
          Join The Vet Tech Herd
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                placeholder="Your first name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                placeholder="Your last name"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
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

          <div className="space-y-2">
            <Label htmlFor="currentRole">Current Role *</Label>
            <Select onValueChange={handleSelectChange('currentRole')} value={formData.currentRole}>
              <SelectTrigger>
                <SelectValue placeholder="Select your current role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="practicing-vet">Practicing Veterinarian</SelectItem>
                <SelectItem value="tech-industry">Currently in Tech Industry</SelectItem>
                <SelectItem value="vet-student">Veterinary Student</SelectItem>
                <SelectItem value="resident">Veterinary Resident</SelectItem>
                <SelectItem value="academia">Academic/Research</SelectItem>
                <SelectItem value="entrepreneur">Entrepreneur</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="experience">Tech Experience Level</Label>
            <Select onValueChange={handleSelectChange('experience')} value={formData.experience}>
              <SelectTrigger>
                <SelectValue placeholder="Select your tech experience" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">No tech experience</SelectItem>
                <SelectItem value="beginner">Beginner (learning basics)</SelectItem>
                <SelectItem value="intermediate">Intermediate (some projects/courses)</SelectItem>
                <SelectItem value="advanced">Advanced (professional experience)</SelectItem>
                <SelectItem value="expert">Expert (senior level)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="interests">Areas of Interest</Label>
            <Input
              id="interests"
              name="interests"
              value={formData.interests}
              onChange={handleChange}
              placeholder="e.g., AI/ML, mobile apps, data science, telemedicine"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="background">Tell us about yourself</Label>
            <Textarea
              id="background"
              name="background"
              value={formData.background}
              onChange={handleChange}
              placeholder="Share your background, current goals, and what you hope to gain from the community..."
              className="min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="linkedin">LinkedIn Profile (Optional)</Label>
            <Input
              id="linkedin"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              placeholder="https://linkedin.com/in/yourprofile"
            />
          </div>

          <Button 
            type="submit" 
            className="btn-primary w-full" 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Joining the Herd...' : 'Join the Community'}
            {!isSubmitting && <Users className="ml-2 h-4 w-4" />}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            By joining, you agree to our community guidelines and will receive occasional updates about events and opportunities.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}