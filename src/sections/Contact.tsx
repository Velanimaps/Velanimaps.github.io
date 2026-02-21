import { useState } from 'react';
import { Phone, Mail, MapPin, Send, Clock, MessageCircle, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { siteConfig } from '@/config';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    grade: '',
    lessonType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! I will get back to you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', grade: '', lessonType: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-background" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
            <span className="text-sm text-green-300">Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Start Your{' '}
            <span className="text-gradient">Learning Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose between online or face-to-face lessons. I'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            {/* Lesson Types */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-500/20">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                    <Monitor className="w-6 h-6 text-blue-400" />
                  </div>
                  <h4 className="font-semibold mb-1">Online Lessons</h4>
                  <p className="text-sm text-muted-foreground mb-2">R250/hour</p>
                  <Badge variant="secondary" className="bg-blue-500/10 text-blue-300 text-xs">
                    Most Popular
                  </Badge>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 border-purple-500/20">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-purple-400" />
                  </div>
                  <h4 className="font-semibold mb-1">Face-to-Face</h4>
                  <p className="text-sm text-muted-foreground mb-2">R300/hour</p>
                  <Badge variant="secondary" className="bg-purple-500/10 text-purple-300 text-xs">
                    Designated Location
                  </Badge>
                </CardContent>
              </Card>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <Card className="bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-blue-400" />
                  </div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-600/20 flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-amber-400" />
                  </div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-sm text-muted-foreground">
                    {siteConfig.contact.address}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-600/20 flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-green-400" />
                  </div>
                  <h4 className="font-semibold mb-1">Availability</h4>
                  <p className="text-sm text-muted-foreground">
                    Mon - Sat, Flexible Hours
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* WhatsApp CTA */}
            <Card className="bg-gradient-to-br from-green-500/10 to-emerald-600/10 border-green-500/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">Chat on WhatsApp</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Get instant responses and book your first lesson
                    </p>
                    <Button
                      size="sm"
                      className="bg-green-500 hover:bg-green-600 text-white"
                      asChild
                    >
                      <a
                        href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Start Chat
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6">Book a Lesson</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white/5 border-white/10 focus:border-blue-500/50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white/5 border-white/10 focus:border-blue-500/50"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+27 71 234 5678"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="bg-white/5 border-white/10 focus:border-blue-500/50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="grade">Grade</Label>
                    <select
                      id="grade"
                      name="grade"
                      value={formData.grade}
                      onChange={handleChange}
                      required
                      className="w-full h-10 px-3 rounded-md bg-white/5 border border-white/10 text-foreground focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/50"
                    >
                      <option value="">Select Grade</option>
                      <option value="10">Grade 10</option>
                      <option value="11">Grade 11</option>
                      <option value="12">Grade 12</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lessonType">Preferred Lesson Type</Label>
                  <select
                    id="lessonType"
                    name="lessonType"
                    value={formData.lessonType}
                    onChange={handleChange}
                    required
                    className="w-full h-10 px-3 rounded-md bg-white/5 border border-white/10 text-foreground focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/50"
                  >
                    <option value="">Select Option</option>
                    <option value="online">Online (R250/hour)</option>
                    <option value="face-to-face">Face-to-Face (R300/hour)</option>
                    <option value="group">Group Session (R150/student/hour)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your learning goals, subjects you need help with, and preferred times..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="bg-white/5 border-white/10 focus:border-blue-500/50 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Request Booking
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
