import { JoinForm } from '@/components/forms/JoinForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Heart, Rocket, Globe } from 'lucide-react';

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

      {/* Join Form */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <JoinForm />
          </div>
        </div>
      </section>
    </div>
  );
}