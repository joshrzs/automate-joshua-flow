import React, { useRef, forwardRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Mail, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Forward ref to ContactSection component
const ContactSection = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  const handleToast = (event: React.FormEvent) => {
    event.preventDefault();
    if (formRef.current) {
      toast({
        title: 'Message sent!',
        description: 'Thanks for reaching out. I’ll get back to you soon.',
      });
    }
  };

  // Get current date details for calendar
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.toLocaleString("default", { month: "long" });
  const currentYear = today.getFullYear();

  return (
    <section id="contact" ref={ref} className="border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-jorange/10 text-jorange px-4 py-2 rounded-full text-sm font-medium mb-4">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Work <span className="text-jorange">Together</span>
          </h2>
          <p className="text-muted-foreground">
            Ready to automate your business processes? Send me a message and let's discuss how I can help you save time and scale faster.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side: Form + Contact Details */}
          <div className="lg:w-1/2 flex flex-col gap-8">
            <Card className="flex-grow">
              <CardContent className="p-6 md:p-8 h-full">
                <form
                  ref={formRef}
                  action="https://getform.io/f/broyzyra"
                  method="POST"
                  className="space-y-6 h-full flex flex-col"
                  onSubmit={handleToast}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input id="name" name="name" placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Your Email</Label>
                      <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" placeholder="How can I help you?" required />
                  </div>
                  <div className="space-y-2 flex-grow">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-jgreen text-white hover:bg-jgreen-dark">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <Card className="flex-1">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-jgreen/10 p-3 rounded-full">
                      <Mail className="text-jorange w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">Email Me</h3>
                      <a
                        href="mailto:joshbalando@gmail.com"
                        className="text-muted-foreground hover:text-jgreen transition-colors"
                      >
                        joshbalando@gmail.com
                      </a>
                    </div>
                  </CardContent>
                </Card>
                <Card className="flex-1">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-jgreen/10 p-3 rounded-full">
                      <MapPin className="text-jorange w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">Location</h3>
                      <p className="text-muted-foreground">Cavite, Philippines</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Right Side: Booking Calendar */}
          <div className="lg:w-1/2 flex flex-col min-h-[500px]">
            <Card className="flex flex-col flex-grow">
              <CardContent className="p-6 flex flex-col gap-4 h-full">
                <div className="flex items-center gap-3">
                  <div className="bg-jgreen/10 p-3 rounded-full">
                    <Calendar className="text-jorange w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Book a Free Call</h3>
                    <p className="text-muted-foreground">Choose a time that works best for you.</p>
                  </div>
                </div>

                {/* Month and Year Display */}
                <div className="text-white text-lg font-medium">
                  {currentMonth} {currentYear}
                </div>

                <div className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-md p-4 grid grid-cols-7 gap-2 text-white text-sm shadow-inner">
                  {/* Weekday headers */}
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                    <div key={i} className="text-center font-medium text-white/70">
                      {day}
                    </div>
                  ))}

                  {/* Placeholder to shift start to Tuesday */}
                <div></div>
                 <div></div>
                 <div></div>
                 <div></div>

                  {/* Days 1–30 with highlight for today */}
                  {Array.from({ length: 31 }).map((_, i) => {
                    const day = i + 1;
                    const isToday = day === currentDay;
                    return (
                      <a
                        key={i}
                        href="https://calendly.com/joshbalando"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`aspect-square flex items-center justify-center rounded-lg transition
                          ${
                            isToday
                              ? "bg-jorange text-white font-bold"
                              : "bg-white/10 hover:bg-jorange/80 hover:text-white"
                          }`}
                      >
                        {day}
                      </a>
                    );
                  })}
                </div>

                <div className="mt-auto">
                  <Button asChild className="bg-jorange text-white hover:bg-jorange-dark">
                    <a href="https://calendly.com/joshbalando" target="_blank" rel="noopener noreferrer">
                      Book Now
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
});

ContactSection.displayName = 'ContactSection';
export default ContactSection;
