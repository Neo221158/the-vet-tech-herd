import { Users, MapPin, Globe, Network, UserCheck, Building2, Zap, Heart, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// Import company logos
import vetologyLogo from '@/assets/logos/vetology-logo.png';
import petmedixLogo from '@/assets/logos/petmedix-logo.png';
import vettechLogo from '@/assets/logos/vettech-logo.png';
import animaldatalabsLogo from '@/assets/logos/animaldatalabs-logo.png';
import vetcloudLogo from '@/assets/logos/vetcloud-logo.png';
import smartvetLogo from '@/assets/logos/smartvet-logo.png';
import mobivetLogo from '@/assets/logos/mobivet-logo.png';
import vetconnectLogo from '@/assets/logos/vetconnect-logo.png';

export default function MappingCommunity() {
  const stats = [
    { icon: Users, label: 'Active Members', value: '150+', description: 'Veterinarians in tech' },
    { icon: Building2, label: 'Companies', value: '80+', description: 'Tech companies represented' },
    { icon: MapPin, label: 'Cities', value: '25+', description: 'Cities across Israel' },
    { icon: Globe, label: 'Global Reach', value: '15', description: 'Countries connected' },
  ];

  const roles = [
    { title: 'Software Engineers', count: 45, color: 'bg-blue-500' },
    { title: 'Data Scientists', count: 28, color: 'bg-green-500' },
    { title: 'Product Managers', count: 22, color: 'bg-purple-500' },
    { title: 'DevOps Engineers', count: 18, color: 'bg-orange-500' },
    { title: 'Tech Leads', count: 15, color: 'bg-red-500' },
    { title: 'Founders/CTOs', count: 12, color: 'bg-indigo-500' },
    { title: 'QA Engineers', count: 10, color: 'bg-pink-500' },
  ];

  const companies = [
    { 
      name: 'Vetology', 
      members: 12, 
      type: 'Veterinary Software',
      logo: vetologyLogo,
      linkedinUrl: 'https://www.linkedin.com/company/vetology-israel'
    },
    { 
      name: 'PetMedix', 
      members: 8, 
      type: 'Digital Health',
      logo: petmedixLogo,
      linkedinUrl: 'https://www.linkedin.com/company/petmedix'
    },
    { 
      name: 'VetTech Solutions', 
      members: 15, 
      type: 'Practice Management',
      logo: vettechLogo,
      linkedinUrl: 'https://www.linkedin.com/company/vettech-solutions'
    },
    { 
      name: 'Animal Data Labs', 
      members: 6, 
      type: 'Data Analytics',
      logo: animaldatalabsLogo,
      linkedinUrl: 'https://www.linkedin.com/company/animal-data-labs'
    },
    { 
      name: 'VetCloud', 
      members: 9, 
      type: 'Cloud Services',
      logo: vetcloudLogo,
      linkedinUrl: 'https://www.linkedin.com/company/vetcloud-israel'
    },
    { 
      name: 'SmartVet AI', 
      members: 7, 
      type: 'AI & Machine Learning',
      logo: smartvetLogo,
      linkedinUrl: 'https://www.linkedin.com/company/smartvet-ai'
    },
    { 
      name: 'MobiVet', 
      members: 5, 
      type: 'Mobile Solutions',
      logo: mobivetLogo,
      linkedinUrl: 'https://www.linkedin.com/company/mobivet'
    },
    { 
      name: 'VetConnect', 
      members: 4, 
      type: 'Telemedicine',
      logo: vetconnectLogo,
      linkedinUrl: 'https://www.linkedin.com/company/vetconnect'
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-vet-accent/10">
        <div className="container-custom text-center">
          <Network className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Mapping Our Community
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover the diverse network of Israeli veterinarians who have made their mark in the technology industry across the globe.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <Heart className="h-4 w-4 mr-2" />
              Growing Network
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <Zap className="h-4 w-4 mr-2" />
              Innovation Focus
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <UserCheck className="h-4 w-4 mr-2" />
              Verified Professionals
            </Badge>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardHeader className="pb-3">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-3xl font-bold text-foreground">
                    {stat.value}
                  </CardTitle>
                  <CardDescription className="font-medium">
                    {stat.label}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Roles Distribution */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">
            Tech Roles Distribution
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              {roles.map((role, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-background rounded-lg shadow-sm">
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded-full ${role.color}`}></div>
                    <span className="font-medium">{role.title}</span>
                  </div>
                  <Badge variant="secondary">{role.count}</Badge>
                </div>
              ))}
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-semibold mb-4">Diverse Tech Expertise</h3>
              <p className="text-muted-foreground mb-6">
                Our community spans across all major technology disciplines, from software engineering 
                to data science, bringing unique veterinary perspectives to the tech industry.
              </p>
              <Button variant="outline">
                View Open Positions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Geographic Distribution */}
      <section className="py-16 px-4">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">
            Veterinary Tech Companies in Israel
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">Leading Companies</h3>
              <div className="space-y-3">
                {companies.map((company, index) => (
                  <a 
                    key={index} 
                    href={company.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center space-x-4">
                      <img 
                        src={company.logo} 
                        alt={`${company.name} logo`} 
                        className="h-10 w-10 rounded-lg object-cover"
                      />
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-medium group-hover:text-primary transition-colors">{company.name}</span>
                          <ExternalLink className="h-3 w-3 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <span className="text-xs text-muted-foreground">{company.type}</span>
                      </div>
                    </div>
                    <Badge variant="secondary">{company.members}</Badge>
                  </a>
                ))}
              </div>
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-semibold mb-4">Innovation in Veterinary Technology</h3>
              <p className="text-muted-foreground mb-6">
                Israeli veterinary tech companies are at the forefront of innovation, developing cutting-edge 
                solutions for animal healthcare, practice management, and digital transformation.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <Card className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary">68</div>
                  <div className="text-sm text-muted-foreground">Vet Members</div>
                </Card>
                <Card className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary">8</div>
                  <div className="text-sm text-muted-foreground">Companies</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/5 to-vet-accent/5">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Growing Community</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Be part of this unique network of veterinarians shaping the future of technology. 
            Add your mark to our community map.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-primary">
              Join the Community
            </Button>
            <Button size="lg" variant="outline">
              Update Your Profile
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}