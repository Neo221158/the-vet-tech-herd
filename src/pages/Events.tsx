import { useState } from 'react';
import { EventCard } from '@/components/cards/EventCard';
import { Button } from '@/components/ui/button';
import { upcomingEvents, pastEvents } from '@/data/events';
import { Calendar, Clock, MapPin } from 'lucide-react';

export default function Events() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background via-surface to-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Community Events</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Join us for workshops, networking sessions, expert talks, and collaborative events 
              designed specifically for veterinarians in the technology industry.
            </p>
            <div className="flex items-center justify-center space-x-8 pt-4">
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-2 text-primary" />
                Regular Workshops
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="h-4 w-4 mr-2 text-tech-accent" />
                Expert Sessions
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2 text-vet-accent" />
                Global Meetups
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Types of Events We Host</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From technical workshops to networking meetups, we offer diverse opportunities to learn and connect
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="text-center space-y-3">
              <div className="p-4 bg-gradient-to-br from-primary to-tech-accent rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg">Technical Workshops</h3>
              <p className="text-sm text-muted-foreground">
                Hands-on learning sessions covering programming, data science, and emerging technologies
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="p-4 bg-gradient-to-br from-vet-accent to-primary rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg">Networking Meetups</h3>
              <p className="text-sm text-muted-foreground">
                In-person and virtual gatherings to connect with fellow veterinarians in tech
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="p-4 bg-gradient-to-br from-tech-accent to-vet-accent rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg">Expert Talks</h3>
              <p className="text-sm text-muted-foreground">
                Presentations from industry leaders sharing insights and career experiences
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="p-4 bg-gradient-to-br from-primary to-vet-accent rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg">Pitch Sessions</h3>
              <p className="text-sm text-muted-foreground">
                Opportunities to present startup ideas and receive feedback from the community
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Tabs */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="flex justify-center mb-8">
            <div className="flex bg-background rounded-lg p-1 shadow-sm">
              <Button
                variant={activeTab === 'upcoming' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('upcoming')}
                className={activeTab === 'upcoming' ? 'btn-primary' : ''}
              >
                Upcoming Events ({upcomingEvents.length})
              </Button>
              <Button
                variant={activeTab === 'past' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('past')}
                className={activeTab === 'past' ? 'btn-primary' : ''}
              >
                Past Events ({pastEvents.length})
              </Button>
            </div>
          </div>

          {/* Upcoming Events */}
          {activeTab === 'upcoming' && (
            <div>
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Upcoming Events</h2>
                <p className="text-muted-foreground">
                  Don't miss these exciting opportunities to connect and learn
                </p>
              </div>
              
              {upcomingEvents.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {upcomingEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No upcoming events</h3>
                  <p className="text-muted-foreground">
                    Stay tuned for exciting events coming soon!
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Past Events */}
          {activeTab === 'past' && (
            <div>
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Past Events</h2>
                <p className="text-muted-foreground">
                  Explore our previous workshops, talks, and networking sessions
                </p>
              </div>
              
              {pastEvents.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {pastEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Clock className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No past events</h3>
                  <p className="text-muted-foreground">
                    Our event history will appear here as we host more gatherings.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center space-y-6 bg-gradient-to-br from-primary/10 via-tech-accent/10 to-vet-accent/10 p-8 rounded-2xl">
            <h2 className="text-2xl md:text-3xl font-bold">Stay Updated on Events</h2>
            <p className="text-muted-foreground">
              Join our community to receive early notifications about upcoming events, 
              exclusive workshops, and networking opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-primary">
                Join the Community
                <Calendar className="ml-2 h-4 w-4" />
              </Button>
              <Button className="btn-secondary">
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}