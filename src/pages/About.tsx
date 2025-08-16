import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Eye, Heart, Stethoscope, Code, Globe } from 'lucide-react';

const stats = [
  { label: 'Community Members', value: '500+', icon: Users },
  { label: 'Veterinarians in Tech', value: '200+', icon: Stethoscope },
  { label: 'Countries Represented', value: '15+', icon: Globe },
  { label: 'Tech Companies', value: '50+', icon: Code },
];

const team = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Founder & Community Lead',
    bio: 'DVM, MBA. Former practicing veterinarian, now leading product development at a major pet health tech company.',
  },
  {
    name: 'Dr. Michael Rodriguez',
    role: 'Events Coordinator',
    bio: 'DVM, MS. Veterinary epidemiologist turned data scientist, currently working in AI-driven diagnostics.',
  },
  {
    name: 'Dr. Emma Thompson',
    role: 'Collaboration Director',
    bio: 'DVM, PhD. Research veterinarian specializing in digital health solutions for companion animals.',
  },
];

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background via-surface to-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">About The Vet Tech Herd</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're a passionate community of veterinarians who have found their calling in technology, 
              working together to bridge the gap between animal health expertise and innovative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Target className="h-8 w-8 text-primary" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  To create a thriving ecosystem where veterinarians in technology can connect, 
                  collaborate, and collectively advance both veterinary medicine and the tech industry.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We believe that veterinarians bring unique perspectives to technology development, 
                  combining deep understanding of animal health with analytical thinking and problem-solving skills.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Eye className="h-8 w-8 text-vet-accent" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  A future where veterinary expertise is recognized as a valuable asset in technology development, 
                  leading to better solutions for animal health and welfare globally.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We envision a world where the intersection of veterinary medicine and technology 
                  drives innovation that benefits both animals and the people who care for them.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why This Community Exists */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Why This Community Exists</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Heart className="h-6 w-6 text-vet-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Unique Perspective</h3>
                    <p className="text-muted-foreground">
                      Veterinarians bring a unique combination of scientific rigor, empathy, 
                      and problem-solving skills that are incredibly valuable in technology development.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Isolated Professionals</h3>
                    <p className="text-muted-foreground">
                      Many veterinarians in tech work in isolation, lacking a community of 
                      peers who understand both their clinical background and current tech journey.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Code className="h-6 w-6 text-tech-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Growing Opportunities</h3>
                    <p className="text-muted-foreground">
                      The pet tech industry is booming, creating numerous opportunities for 
                      veterinarians to contribute their expertise to innovative solutions.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Globe className="h-6 w-6 text-vet-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Global Impact</h3>
                    <p className="text-muted-foreground">
                      By connecting veterinarians in tech globally, we can accelerate innovation 
                      and create solutions that improve animal health worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Growing Community</h2>
            <p className="text-xl text-muted-foreground">
              Join hundreds of veterinarians who are making their mark in technology
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-none shadow-lg card-hover">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-to-br from-primary to-tech-accent rounded-full">
                      <stat.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Leadership</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our community is led by experienced veterinarians who have successfully 
              transitioned into technology roles
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-none shadow-lg card-hover">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-vet-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <p className="text-primary font-medium">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Who This Community Is For</h2>
              <p className="text-xl text-muted-foreground">
                Whether you're just starting your tech journey or you're a seasoned professional, 
                there's a place for you in our herd
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Practicing Veterinarians</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Currently in practice but interested in exploring technology opportunities
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Career Transitioners</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Veterinarians actively transitioning from clinical practice to technology roles
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Tech Professionals</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Veterinarians already working in technology companies and startups
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Entrepreneurs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Veterinarians building their own tech companies or products
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Students & Residents</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Veterinary students and residents interested in technology career paths
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Researchers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Academic and industry researchers working at the intersection of veterinary science and technology
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}