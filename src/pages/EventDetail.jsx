import React from 'react';
import { Link, useParams } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import SectionTitle from '../components/SectionTitle';
import GlassCard from '../components/GlassCard';
import { ArrowLeft } from 'lucide-react';
import { eventsData } from './Events';

const EventDetail = () => {
  const { year, eventId } = useParams();
  const yearNum = parseInt(year, 10);
  const yearData = eventsData[yearNum];
  const events = [...(yearData?.evenSem ?? []), ...(yearData?.oddSem ?? [])];
  const event = events.find((item) => item.id === eventId);

  if (!yearData || !event) {
    return (
      <PageLayout>
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-3xl font-serif font-bold text-foreground mb-4">
              Event not found
            </h1>
            <p className="text-muted-foreground mb-6">The requested event gallery was not found.</p>
            <Link
              to={`/events/${yearNum}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to events
            </Link>
          </div>
        </section>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-8">
            <SectionTitle
              title="Event images"
              subtitle={event.heading}
            />
            <Link
              to={`/events/${yearNum}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to {yearNum} events
            </Link>
          </div>

          {event.poster && (
            <GlassCard className="mb-8 overflow-hidden">
              <div className="w-full max-w-4xl mx-auto">
                <img
                  src={event.poster}
                  alt={event.heading}
                  className="w-full max-h-[420px] object-contain"
                />
              </div>
            </GlassCard>
          )}

          <div className="grid gap-6 md:grid-cols-2">
            {event.gallery && event.gallery.length > 0 ? (
              event.gallery.map((image, index) => (
                <GlassCard key={index} className="overflow-hidden">
                  <div className="w-full max-w-full mx-auto">
                    <img
                      src={image}
                      alt={`${event.heading} ${index + 1}`}
                      className="w-full max-h-[320px] object-contain"
                    />
                  </div>
                </GlassCard>
              ))
            ) : (
              <GlassCard className="p-6">
                <p className="text-muted-foreground">
                  No additional images are available for this event.
                </p>
              </GlassCard>
            )}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default EventDetail;
