import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import SectionTitle from '../components/SectionTitle';
import fdpData from '../lib/fdpData';
import { Button } from '../components/ui/button';

const FDPGallery = () => {
  const { slug } = useParams();
  const item = fdpData.find((i) => i.slug === slug);

  if (!item) {
    return (
      <PageLayout>
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <SectionTitle title="FDP gallery" subtitle="Event not found" />
            <p className="mt-6">Could not find the selected event.</p>
            <div className="mt-6">
              <Link to="/faculty">
                <Button>Back to FDP list</Button>
              </Link>
            </div>
          </div>
        </section>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle title={item.title} subtitle={item.subtitle} />

          <div className="mt-6 mb-6 flex gap-4">
            <Link to="/faculty">
              <Button variant="outline">Back</Button>
            </Link>
            <div className="text-sm text-muted-foreground mt-2">{item.rest.length} photos</div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {item.rest.map((image, idx) => (
              <div key={idx} className="overflow-hidden rounded-2xl flex justify-center p-2">
                <img
                  src={image}
                  alt={`${item.title} photo ${idx + 1}`}
                  className="w-full max-w-[720px] h-auto object-contain rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default FDPGallery;
