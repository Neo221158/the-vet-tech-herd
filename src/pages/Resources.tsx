import { useState } from 'react';
import { ResourceCard } from '@/components/cards/ResourceCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { resources } from '@/data/resources';
import { Search, BookOpen, Video, FileText, ExternalLink, Filter } from 'lucide-react';

export default function Resources() {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [levelFilter, setLevelFilter] = useState<string>('all');

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesType = typeFilter === 'all' || resource.type === typeFilter;
    const matchesLevel = levelFilter === 'all' || resource.level === levelFilter;
    
    return matchesSearch && matchesType && matchesLevel;
  });

  const resourceCategories = [
    {
      icon: BookOpen,
      title: 'Programming & Development',
      description: 'Learn programming languages, software development, and technical skills essential for tech careers.',
      count: resources.filter(r => r.tags.some(tag => ['python', 'API development', 'software development', 'platform development'].includes(tag))).length,
    },
    {
      icon: Video,
      title: 'Product & Business',
      description: 'Understand product management, business strategy, and entrepreneurship in the tech industry.',
      count: resources.filter(r => r.tags.some(tag => ['product management', 'business strategy', 'startups'].includes(tag))).length,
    },
    {
      icon: FileText,
      title: 'Data Science & AI',
      description: 'Explore data science, machine learning, and artificial intelligence applications in veterinary medicine.',
      count: resources.filter(r => r.tags.some(tag => ['data science', 'machine learning', 'AI', 'statistics'].includes(tag))).length,
    },
    {
      icon: ExternalLink,
      title: 'Healthcare Tech',
      description: 'Specialized resources for healthcare technology, compliance, and regulatory considerations.',
      count: resources.filter(r => r.tags.some(tag => ['healthcare', 'compliance', 'telemedicine', 'regulations'].includes(tag))).length,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background via-surface to-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Courses & Resources</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover curated educational content, training programs, and resources designed to help 
              veterinarians excel in technology careers.
            </p>
            <div className="flex items-center justify-center space-x-8 pt-4">
              <div className="flex items-center text-sm text-muted-foreground">
                <BookOpen className="h-4 w-4 mr-2 text-primary" />
                Expert-Curated Courses
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Video className="h-4 w-4 mr-2 text-tech-accent" />
                Interactive Content
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <FileText className="h-4 w-4 mr-2 text-vet-accent" />
                Industry Insights
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Learning Paths</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore different areas of technology and find the resources that match your interests and career goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {resourceCategories.map((category, index) => (
              <div key={index} className="text-center space-y-4 p-6 bg-gradient-to-br from-background to-surface rounded-xl shadow-lg card-hover">
                <div className="p-4 bg-gradient-to-br from-primary to-tech-accent rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg">{category.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{category.description}</p>
                <div className="text-xs text-primary font-medium">
                  {category.count} resources available
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Browse All Resources</h2>
              <p className="text-muted-foreground">
                Use the search and filters below to find exactly what you're looking for
              </p>
            </div>

            {/* Search and Filter Controls */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search resources, topics, or technologies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex gap-2">
                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="course">Courses</SelectItem>
                    <SelectItem value="video">Videos</SelectItem>
                    <SelectItem value="article">Articles</SelectItem>
                    <SelectItem value="tool">Tools</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={levelFilter} onValueChange={setLevelFilter}>
                  <SelectTrigger className="w-36">
                    <SelectValue placeholder="Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>

                <Button variant="outline" size="sm" onClick={() => {
                  setSearchTerm('');
                  setTypeFilter('all');
                  setLevelFilter('all');
                }}>
                  <Filter className="h-4 w-4 mr-2" />
                  Clear
                </Button>
              </div>
            </div>

            {/* Results Count */}
            <div className="text-sm text-muted-foreground text-center">
              Showing {filteredResources.length} of {resources.length} resources
            </div>
          </div>
        </div>
      </section>

      {/* Resource Grid */}
      <section className="section-padding">
        <div className="container-custom">
          {filteredResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No resources found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setTypeFilter('all');
                  setLevelFilter('all');
                }}
                className="btn-primary"
              >
                Show All Resources
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Suggest a Resource */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center space-y-6 bg-gradient-to-br from-primary/10 via-tech-accent/10 to-vet-accent/10 p-8 rounded-2xl">
            <h2 className="text-2xl md:text-3xl font-bold">Know a Great Resource?</h2>
            <p className="text-muted-foreground">
              Help grow our resource library by suggesting courses, articles, tools, or content 
              that would benefit veterinarians in tech.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-primary">
                Suggest a Resource
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              <Button className="btn-secondary">
                Become a Contributor
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}