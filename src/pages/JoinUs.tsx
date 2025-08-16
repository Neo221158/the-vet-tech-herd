import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { Users, Heart, Rocket, Globe, ExternalLink, ArrowRight } from 'lucide-react';

export default function JoinUs() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background via-surface to-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Join The Vet Tech Herd</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Become part of a thriving community of veterinarians making their mark in technology. 
              Connect, learn, and grow with like-minded professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Users, title: 'Community', description: 'Connect with 500+ veterinarians in tech' },
              { icon: Heart, title: 'Support', description: 'Get mentorship and career guidance' },
              { icon: Rocket, title: 'Growth', description: 'Access exclusive opportunities and events' },
              { icon: Globe, title: 'Network', description: 'Global reach with local connections' },
            ].map((benefit, index) => (
              <Card key={index} className="text-center border-none shadow-lg">
                <CardHeader>
                  <div className="p-4 bg-gradient-to-br from-primary to-tech-accent rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA Section */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to Join the Herd?</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Complete our membership form to become part of this growing community of veterinarians in technology. 
                It only takes a few minutes!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center space-y-3">
                <div className="p-3 bg-gradient-to-br from-primary to-tech-accent rounded-full w-12 h-12 mx-auto flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="font-semibold">Fill Out Form</h3>
                <p className="text-sm text-muted-foreground">Complete our simple registration form</p>
              </div>
              <div className="text-center space-y-3">
                <div className="p-3 bg-gradient-to-br from-tech-accent to-vet-accent rounded-full w-12 h-12 mx-auto flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="font-semibold">Get Connected</h3>
                <p className="text-sm text-muted-foreground">Receive welcome email with community links</p>
              </div>
              <div className="text-center space-y-3">
                <div className="p-3 bg-gradient-to-br from-vet-accent to-primary rounded-full w-12 h-12 mx-auto flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="font-semibold">Start Engaging</h3>
                <p className="text-sm text-muted-foreground">Join events, access resources, and network</p>
              </div>
            </div>

            <div className="space-y-6">
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSdXnynofsCPriUL_OnMyYw5WrnGPfoSNJCGBjmV4IDxaQs4zQ/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button className="btn-primary text-lg px-8 py-4">
                  Join The Vet Tech Herd
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </a>
              
              <div className="text-sm text-muted-foreground">
                <p>
                  Already a member? <Link to="/contact" className="text-primary hover:underline">Contact us</Link> for support
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 via-tech-accent/10 to-vet-accent/10 p-6 rounded-xl">
              <h3 className="font-semibold text-lg mb-4">What happens after you join?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="flex items-start gap-3">
                  <ArrowRight className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                  <div className="text-sm">
                    <span className="font-medium">Welcome Package:</span> Access to our Slack community, LinkedIn group, and resource library
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ArrowRight className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                  <div className="text-sm">
                    <span className="font-medium">Event Invitations:</span> Priority access to workshops, meetups, and networking events
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ArrowRight className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                  <div className="text-sm">
                    <span className="font-medium">Job Opportunities:</span> Exclusive access to vetted job postings and career guidance
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ArrowRight className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                  <div className="text-sm">
                    <span className="font-medium">Mentorship:</span> Connect with experienced veterinarians in tech roles
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}