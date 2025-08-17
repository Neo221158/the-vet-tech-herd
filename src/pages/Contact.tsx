import { ContactForm } from '@/components/forms/ContactForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MessageCircle, Linkedin, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background via-surface to-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Get In Touch</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have questions, suggestions, or want to learn more about The Vet Tech Herd? 
              We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options & Form */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  {[
                    { icon: Mail, title: 'Email', value: 'isrvettech@gmail.com', href: 'mailto:isrvettech@gmail.com' },
                    { icon: Linkedin, title: 'LinkedIn', value: 'The Vet Tech Herd', href: 'https://www.linkedin.com/groups/8502307/' },
                    { icon: MessageCircle, title: 'WhatsApp Community', value: 'Join our chat', href: '#' },
                    { icon: MapPin, title: 'Location', value: 'Global Community', href: null },
                  ].map((contact, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="p-3 bg-gradient-to-br from-primary to-tech-accent rounded-lg">
                        <contact.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium">{contact.title}</div>
                        {contact.href ? (
                          <a href={contact.href} className="text-muted-foreground hover:text-primary transition-colors">
                            {contact.value}
                          </a>
                        ) : (
                          <div className="text-muted-foreground">{contact.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Community Guidelines</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <p>• Be respectful and professional in all interactions</p>
                  <p>• Share knowledge and support fellow community members</p>
                  <p>• Keep discussions relevant to veterinary technology topics</p>
                  <p>• No spam or self-promotion without prior approval</p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}