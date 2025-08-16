import { CollaborationForm } from '@/components/forms/CollaborationForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Handshake, 
  Lightbulb, 
  Users, 
  Rocket,
  BookOpen,
  Building2,
  Heart,
  Globe
} from 'lucide-react';

const collaborationTypes = [
  {
    icon: Rocket,
    title: 'Research Projects',
    description: 'Collaborate on cutting-edge research at the intersection of veterinary medicine and technology.',
    examples: ['AI diagnostic tools', 'Telemedicine studies', 'Wearable device research'],
  },
  {
    icon: Building2,
    title: 'Product Development',
    description: 'Partner with tech companies to develop products that serve the veterinary industry.',
    examples: ['Mobile app consultation', 'Platform design feedback', 'Clinical validation'],
  },
  {
    icon: BookOpen,
    title: 'Educational Initiatives',
    description: 'Create educational content and programs for veterinarians entering tech.',
    examples: ['Course development', 'Workshop facilitation', 'Mentorship programs'],
  },
  {
    icon: Globe,
    title: 'Industry Partnerships',
    description: 'Foster partnerships between veterinary organizations and technology companies.',
    examples: ['Conference collaborations', 'Joint initiatives', 'Standards development'],
  },
];

const benefits = [
  {
    icon: Users,
    title: 'Network Expansion',
    description: 'Connect with like-minded professionals and expand your professional network in both veterinary and tech industries.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation Opportunities',
    description: 'Work on innovative projects that can make a real difference in animal health and veterinary practice.',
  },
  {
    icon: Heart,
    title: 'Knowledge Sharing',
    description: 'Share your expertise and learn from others, contributing to the collective knowledge of our community.',
  },
  {
    icon: Rocket,
    title: 'Career Advancement',
    description: 'Gain experience and visibility in the tech industry while maintaining your veterinary expertise.',
  },
];

const successStories = [
  {
    title: 'AI Diagnostic Platform',
    description: 'Three community members collaborated with a startup to develop an AI-powered diagnostic tool for small animal practice.',
    impact: 'Now used in over 100 veterinary clinics',
  },
  {
    title: 'Telemedicine Research',
    description: 'Community-led research project studying the effectiveness of veterinary telemedicine during the pandemic.',
    impact: 'Published in Journal of Veterinary Technology',
  },
  {
    title: 'Educational Workshop Series',
    description: 'Members created a comprehensive workshop series teaching data science skills to practicing veterinarians.',
    impact: '500+ veterinarians trained',
  },
];

export default function Collaboration() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background via-surface to-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Collaborate with Us</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Join forces with fellow veterinarians, tech companies, and organizations to create 
              innovative solutions that advance both veterinary medicine and technology.
            </p>
            <div className="flex items-center justify-center space-x-8 pt-4">
              <div className="flex items-center text-sm text-muted-foreground">
                <Handshake className="h-4 w-4 mr-2 text-primary" />
                Strategic Partnerships
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Lightbulb className="h-4 w-4 mr-2 text-tech-accent" />
                Innovation Projects
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Users className="h-4 w-4 mr-2 text-vet-accent" />
                Community Initiatives
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Contribute */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How You Can Contribute</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              There are many ways to get involved and make a meaningful impact in our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collaborationTypes.map((type, index) => (
              <Card key={index} className="border-none shadow-lg card-hover">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-gradient-to-br from-primary to-tech-accent rounded-lg">
                      <type.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{type.title}</CardTitle>
                  </div>
                  <p className="text-muted-foreground">{type.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Examples:</h4>
                    <ul className="space-y-1">
                      {type.examples.map((example, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <span className="inline-block w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of Collaborating */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits of Collaborating</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover how collaboration can accelerate your career and create meaningful impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border-none shadow-lg card-hover">
                <CardHeader>
                  <div className="p-4 bg-gradient-to-br from-vet-accent to-primary rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
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

      {/* Success Stories */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how our community collaborations have made real-world impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="border-none shadow-lg card-hover">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{story.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {story.description}
                  </p>
                  <div className="p-3 bg-gradient-to-r from-vet-accent/10 to-primary/10 rounded-lg">
                    <p className="text-sm font-medium text-foreground">
                      Impact: {story.impact}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Form */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to Collaborate?</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Have an idea for a collaboration or want to contribute to an ongoing project? 
                We'd love to hear from you and explore how we can work together.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Share Your Ideas</h3>
                    <p className="text-sm text-muted-foreground">
                      Tell us about your project ideas or areas where you'd like to contribute
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-vet-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Find Collaborators</h3>
                    <p className="text-sm text-muted-foreground">
                      Connect with other community members who share your interests
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Rocket className="h-5 w-5 text-tech-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Launch Projects</h3>
                    <p className="text-sm text-muted-foreground">
                      Get support and resources to turn your ideas into reality
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-secondary">
                  Browse Existing Projects
                </Button>
                <Button className="btn-tech">
                  Join Our Slack
                  <Users className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div>
              <CollaborationForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}