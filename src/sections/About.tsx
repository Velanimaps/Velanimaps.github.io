import { Award, BookOpen, Zap, MapPin, Monitor } from 'lucide-react';
import { siteConfig } from '@/config';

export function About() {
  const highlights = [
    { icon: Zap, text: 'BEng Electrical Engineering' },
    { icon: Award, text: '5 Years Tutoring Experience' },
    { icon: BookOpen, text: 'South African CAPS Syllabus Expert' },
    { icon: MapPin, text: 'Online & Face-to-Face Options' },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 rounded-3xl overflow-hidden">
              {/* Placeholder for tutor image */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <Zap className="w-16 h-16 text-white" />
                  </div>
                  <p className="text-lg font-semibold">{siteConfig.tutor.name}</p>
                  <p className="text-sm text-muted-foreground">{siteConfig.tutor.title}</p>
                  <p className="text-xs text-muted-foreground mt-2">South Africa</p>
                </div>
              </div>
              
              {/* Decorative Frame */}
              <div className="absolute inset-0 border-2 border-white/10 rounded-3xl" />
              <div className="absolute -inset-4 border border-white/5 rounded-[2rem] -z-10" />
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 lg:right-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl p-6 shadow-xl shadow-blue-500/20">
              <div className="text-3xl font-bold text-white">{siteConfig.tutor.experience}</div>
              <div className="text-sm text-white/80">of Tutoring</div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <span className="text-sm text-purple-300">About Me</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Engineering Background,{' '}
              <span className="text-gradient">Teaching Passion</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {siteConfig.tutor.bio}
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center">
                  <span className="text-xl font-bold text-green-400">{siteConfig.tutor.successRate}</span>
                </div>
                <div>
                  <div className="text-sm font-medium">Success Rate</div>
                  <div className="text-xs text-muted-foreground">Students excel</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center">
                  <span className="text-xl font-bold text-amber-400">{siteConfig.tutor.students}</span>
                </div>
                <div>
                  <div className="text-sm font-medium">Students</div>
                  <div className="text-xs text-muted-foreground">Taught so far</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                  <Monitor className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <div className="text-sm font-medium">Online</div>
                  <div className="text-xs text-muted-foreground">& In-person</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
