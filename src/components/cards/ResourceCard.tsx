import { ExternalLink, BookOpen, Video, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

export interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'course' | 'video' | 'article' | 'tool';
  provider: string;
  duration?: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  link: string;
  tags: string[];
  image?: string;
}

interface ResourceCardProps {
  resource: Resource;
}

const typeIcons = {
  course: BookOpen,
  video: Video,
  article: FileText,
  tool: ExternalLink,
};

const levelColors = {
  beginner: 'bg-green-100 text-green-800',
  intermediate: 'bg-yellow-100 text-yellow-800',
  advanced: 'bg-red-100 text-red-800',
};

export function ResourceCard({ resource }: ResourceCardProps) {
  const Icon = typeIcons[resource.type];

  return (
    <Card className="card-hover h-full flex flex-col">
      {resource.image && (
        <div className="aspect-video overflow-hidden rounded-t-lg">
          <img
            src={resource.image}
            alt={resource.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <CardHeader className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-muted-foreground capitalize">
              {resource.type}
            </span>
          </div>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${levelColors[resource.level]}`}>
            {resource.level}
          </span>
        </div>
        <h3 className="font-semibold text-lg leading-tight">{resource.title}</h3>
      </CardHeader>

      <CardContent className="flex-1 space-y-3">
        <p className="text-muted-foreground text-sm">{resource.description}</p>
        
        <div className="space-y-2">
          <div className="text-sm">
            <span className="font-medium">Provider:</span>{' '}
            <span className="text-muted-foreground">{resource.provider}</span>
          </div>
          {resource.duration && (
            <div className="text-sm">
              <span className="font-medium">Duration:</span>{' '}
              <span className="text-muted-foreground">{resource.duration}</span>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-1">
          {resource.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter>
        <a href={resource.link} target="_blank" rel="noopener noreferrer" className="w-full">
          <Button className="btn-secondary w-full">
            View Resource
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}