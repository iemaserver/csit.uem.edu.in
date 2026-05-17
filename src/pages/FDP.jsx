import React from 'react';
import PageLayout from '../components/PageLayout';
import GlassCard from '../components/GlassCard';
import SectionTitle from '../components/SectionTitle';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import fdpData from '../lib/fdpData';

const FDP = () => {
  return (
    <PageLayout>
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            title="FDP"
          />
          <div className="space-y-10">

            <div className="grid gap-6 md:grid-cols-2">
              {fdpData
                .slice()
                .sort((a, b) => {
                  const yearA = parseInt(a.title.match(/\d{4}/)?.[0] || '0', 10);
                  const yearB = parseInt(b.title.match(/\d{4}/)?.[0] || '0', 10);
                  if (yearA !== yearB) return yearB - yearA; // descending year
                  // put 'odd' before 'even'
                  const semA = a.title.toLowerCase().includes('odd') ? 0 : 1;
                  const semB = b.title.toLowerCase().includes('odd') ? 0 : 1;
                  return semA - semB;
                })
                .map((item) => (
                <GlassCard key={item.title} padding="p-0" className="overflow-hidden">
                  <div className="p-4 pb-0">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-primary/80">
                          FDP
                        </p>
                        <h3 className="mt-2 text-lg font-semibold text-foreground">
                          {item.title}
                        </h3>
                      </div>
                      <div className="rounded-full bg-primary/10 px-2 py-0.5 text-sm font-medium text-primary">
                        {item.rest.length} photos
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-white/10 bg-slate-950/5 flex justify-center">
                    <div className="w-full px-2 py-4 flex justify-center">
                      <img
                        src={item.cover}
                        alt={`${item.title} cover`}
                        className="w-full max-w-[560px] h-auto object-contain rounded-md shadow-sm transition duration-200 hover:scale-105"
                      />
                    </div>
                  </div>

                  <div className="p-4 pt-3">
                    <Link to={`/faculty/gallery/${item.slug}`}>
                      <Button variant="secondary" className="w-full">
                        View event photos
                      </Button>
                    </Link>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default FDP;
