import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: 'virtual' | 'in-person' | 'hybrid';
  rsvpLink?: string;
  image?: string;
  isPast?: boolean;
}

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <Card className={`card-hover ${event.isPast ? 'opacity-75' : ''}`}>
      {event.image && (
        <div className="aspect-video overflow-hidden rounded-t-lg">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <CardHeader className="space-y-2">
        <div className="flex items-center justify-between">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
            event.type === 'virtual' 
              ? 'bg-tech-accent/10 text-tech-accent' 
              : event.type === 'in-person'
              ? 'bg-vet-accent/10 text-vet-accent'
              : 'bg-primary/10 text-primary'
          }`}>
            {event.type}
          </span>
          {event.isPast && (
            <span className="text-xs text-muted-foreground font-medium">Past Event</span>
          )}
        </div>
        <h3 className="font-semibold text-lg leading-tight">{event.title}</h3>
      </CardHeader>

      <CardContent className="space-y-3">
        <p className="text-muted-foreground text-sm">{event.description}</p>
        
        <div className="space-y-2">
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 mr-2 text-primary" />
            {formatDate(event.date)} at {event.time}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mr-2 text-vet-accent" />
            {event.location}
          </div>
        </div>
      </CardContent>

      {event.rsvpLink && !event.isPast && (
        <CardFooter>
          <a href={event.rsvpLink} target="_blank" rel="noopener noreferrer" className="w-full">
            <Button className="btn-primary w-full">
              RSVP Now
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </CardFooter>
      )}
    </Card>
  );
}