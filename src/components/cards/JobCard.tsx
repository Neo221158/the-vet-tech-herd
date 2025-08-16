import { MapPin, Building2, Clock, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'remote';
  salary?: string;
  description: string;
  requirements: string[];
  postedDate: string;
  applicationLink: string;
  isRemote: boolean;
}

interface JobCardProps {
  job: Job;
}

const typeColors = {
  'full-time': 'bg-green-100 text-green-800',
  'part-time': 'bg-blue-100 text-blue-800',
  'contract': 'bg-purple-100 text-purple-800',
  'remote': 'bg-orange-100 text-orange-800',
};

export function JobCard({ job }: JobCardProps) {
  const getTimeAgo = (dateString: string) => {
    const now = new Date();
    const posted = new Date(dateString);
    const diffTime = Math.abs(now.getTime() - posted.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
    return `${Math.ceil(diffDays / 30)} months ago`;
  };

  return (
    <Card className="card-hover h-full flex flex-col">
      <CardHeader className="space-y-3">
        <div className="flex items-center justify-between">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${typeColors[job.type]}`}>
            {job.type.replace('-', ' ')}
          </span>
          <div className="flex items-center text-xs text-muted-foreground">
            <Clock className="h-3 w-3 mr-1" />
            {getTimeAgo(job.postedDate)}
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold text-lg leading-tight mb-1">{job.title}</h3>
          <div className="flex items-center text-muted-foreground text-sm">
            <Building2 className="h-4 w-4 mr-2" />
            {job.company}
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1 space-y-4">
        <div className="space-y-2">
          <div className="flex items-center text-sm">
            <MapPin className="h-4 w-4 mr-2 text-vet-accent" />
            {job.isRemote ? `${job.location} (Remote)` : job.location}
          </div>
          {job.salary && (
            <div className="text-sm font-medium text-primary">
              {job.salary}
            </div>
          )}
        </div>

        <p className="text-muted-foreground text-sm line-clamp-3">{job.description}</p>

        <div>
          <h4 className="font-medium text-sm mb-2">Key Requirements:</h4>
          <ul className="space-y-1">
            {job.requirements.slice(0, 3).map((req, index) => (
              <li key={index} className="text-xs text-muted-foreground flex items-start">
                <span className="inline-block w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                {req}
              </li>
            ))}
            {job.requirements.length > 3 && (
              <li className="text-xs text-muted-foreground">
                +{job.requirements.length - 3} more requirements
              </li>
            )}
          </ul>
        </div>
      </CardContent>

      <CardFooter>
        <a href={job.applicationLink} target="_blank" rel="noopener noreferrer" className="w-full">
          <Button className="btn-primary w-full">
            Apply Now
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}