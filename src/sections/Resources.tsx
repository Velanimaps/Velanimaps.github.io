import { FileText, Video, BookOpen, ExternalLink, Download } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { siteConfig } from '@/config';

const iconMap: Record<string, React.ElementType> = {
  PDF: FileText,
  Video: Video,
  Book: BookOpen,
};

export function Resources() {
  return (
    <section id="resources" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <span className="text-sm text-purple-300">Study Materials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Free{' '}
            <span className="text-gradient">Learning Resources</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Access comprehensive study materials to support your learning journey
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
          {siteConfig.resources.map((resource, index) => {
            const IconComponent = iconMap[resource.type] || FileText;
            
            return (
              <Card
                key={index}
                className="group relative overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-blue-400" />
                    </div>
                    <Badge variant="secondary" className="bg-white/10 text-white/70">
                      {resource.type}
                    </Badge>
                  </div>
                  
                  <h4 className="text-lg font-semibold mb-2">{resource.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    {resource.description}
                  </p>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-between text-blue-400 hover:text-blue-300 hover:bg-blue-500/10"
                    asChild
                  >
                    <a href={resource.link} target="_blank" rel="noopener noreferrer">
                      <span>Access Resource</span>
                      {resource.type === 'PDF' ? (
                        <Download className="w-4 h-4" />
                      ) : (
                        <ExternalLink className="w-4 h-4" />
                      )}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20">
            <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
              <BookOpen className="w-5 h-5 text-blue-400" />
            </div>
            <h4 className="text-lg font-semibold mb-2">Regular Updates</h4>
            <p className="text-sm text-muted-foreground">
              New study materials added regularly to keep you prepared
            </p>
          </div>
          
          <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20">
            <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
              <FileText className="w-5 h-5 text-purple-400" />
            </div>
            <h4 className="text-lg font-semibold mb-2">Curated Content</h4>
            <p className="text-sm text-muted-foreground">
              All materials are carefully curated by experienced educators
            </p>
          </div>
          
          <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20">
            <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center mb-4">
              <Video className="w-5 h-5 text-green-400" />
            </div>
            <h4 className="text-lg font-semibold mb-2">Video Explanations</h4>
            <p className="text-sm text-muted-foreground">
              Complex topics explained with detailed video tutorials
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
