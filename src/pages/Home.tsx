import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Users, 
  BookOpen, 
  Handshake, 
  Stethoscope, 
  Brain, 
  Code, 
  ArrowRight,
  Calendar,
  Briefcase 
} from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const pillars = [
  {
    icon: Users,
    title: 'Promote Vets in Tech',
    description: 'Increase visibility and recognition of veterinarians making their mark in the technology industry.',
  },
  {
    icon: BookOpen,
    title: 'Knowledge Exchange',
    description: 'Share expertise, resources, and insights between veterinary medicine and technology domains.',
  },
  {
    icon: Handshake,
    title: 'Foster Collaboration',
    description: 'Connect veterinarians with tech companies, startups, and fellow professionals for meaningful partnerships.',
  },
];

const features = [
  {
    icon: Calendar,
    title: 'Exclusive Events',
    description: 'Join workshops, networking sessions, and expert talks designed for veterinarians in tech.',
    link: '/events',
  },
  {
    icon: Briefcase,
    title: 'Career Opportunities',
    description: 'Access job postings and career guidance specifically for veterinarians entering tech.',
    link: '/careers',
  },
  {
    icon: Code,
    title: 'Learning Resources',
    description: 'Curated courses, articles, and tools to help you transition or advance in technology.',
    link: '/resources',
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-surface to-background overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-tech-accent/5 to-vet-accent/5"></div>
        <div className="container-custom section-padding relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="hero-text">
                Welcome to The Vet Tech Herd
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                A thriving community connecting veterinarians in the technology industry. 
                Together, we're bridging the gap between animal health expertise and innovative technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/join">
                  <Button className="btn-primary">
                    Join the Herd
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button className="btn-secondary">
                    Learn More
                  </Button>
                </Link>
              </div>
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Stethoscope className="h-4 w-4 mr-2 text-vet-accent" />
                  Veterinary Expertise
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Brain className="h-4 w-4 mr-2 text-tech-accent" />
                  Technology Innovation
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="Veterinary Technology Community"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Three Pillars</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The foundation of our community built on promoting, sharing, and connecting veterinarians in technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <Card key={index} className="card-hover text-center border-none shadow-lg">
                <CardHeader>
                  <div className="mx-auto p-4 bg-gradient-to-br from-primary to-tech-accent rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <pillar.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive resources and opportunities designed specifically for veterinarians in the tech industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link key={index} to={feature.link} className="group">
                <Card className="card-hover h-full border-none shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-gradient-to-br from-vet-accent to-primary rounded-lg">
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary via-tech-accent to-vet-accent">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto space-y-6 text-white">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Join the Revolution?
            </h2>
            <p className="text-xl opacity-90">
              Be part of a community that's transforming both veterinary medicine and technology. 
              Connect with like-minded professionals and shape the future of animal health through innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/join">
                <Button className="bg-white text-primary hover:bg-white/90 px-8 py-3 text-lg font-medium">
                  Join the Community
                  <Users className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/events">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg font-medium">
                  View Upcoming Events
                  <Calendar className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}