import { Atom, Calculator, BookOpen, ChevronRight, MapPin, Monitor } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { siteConfig } from '@/config';

const iconMap: Record<string, React.ElementType> = {
  Atom,
  Calculator,
  BookOpen,
};

export function Subjects() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="subjects" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-500/10 via-transparent to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <span className="text-sm text-blue-300">South African CAPS Syllabus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Comprehensive Coverage for{' '}
            <span className="text-gradient">Grades 10-12</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Expert tutoring aligned with the South African Department of Basic Education curriculum
          </p>
        </div>

        {/* Lesson Mode Banner */}
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <Monitor className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h4 className="font-semibold">Online Lessons</h4>
                <p className="text-sm text-muted-foreground">Zoom/Microsoft Teams with digital whiteboard</p>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h4 className="font-semibold">Face-to-Face</h4>
                <p className="text-sm text-muted-foreground">At designated locations near you</p>
              </div>
            </div>
          </div>
        </div>

        {/* Subjects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {siteConfig.subjects.map((subject, index) => {
            const IconComponent = iconMap[subject.icon] || Atom;
            
            return (
              <Card
                key={index}
                className="group relative overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10 hover:border-white/20 transition-all duration-300 h-full"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${subject.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${subject.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{subject.name}</h3>
                      <Badge variant="secondary" className="mt-1 bg-white/10 text-white/70 text-xs">
                        CAPS Aligned
                      </Badge>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 flex-grow">
                    {subject.description}
                  </p>
                  
                  {/* Grades */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {subject.grades.map((grade, gIndex) => (
                      <span
                        key={gIndex}
                        className="px-3 py-1 text-xs rounded-full bg-white/10 text-white/80"
                      >
                        {grade}
                      </span>
                    ))}
                  </div>
                  
                  {/* Topics */}
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-white/60">Key Topics:</p>
                    <div className="flex flex-wrap gap-2">
                      {subject.topics.slice(0, 4).map((topic, tIndex) => (
                        <span
                          key={tIndex}
                          className="px-3 py-1 text-xs rounded-lg bg-white/5 border border-white/10 text-white/70"
                        >
                          {topic}
                        </span>
                      ))}
                      {subject.topics.length > 4 && (
                        <span className="px-3 py-1 text-xs rounded-lg bg-white/5 border border-white/10 text-white/70">
                          +{subject.topics.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/5 hover:border-white/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-xl font-bold text-blue-400">{index + 1}</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 group"
          >
            Book Your First Lesson
            <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
