import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Mail, Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/mqapjdbn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-jorange/10 text-jorange px-4 py-2 rounded-full text-sm font-medium mb-4">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Work <span className="text-jgreen">Together</span>
          </h2>
          <p className="text-muted-foreground">
            Ready to automate your business processes? Send me a message and let's discuss how I can help you save time and scale faster.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3 space-y-6">
            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-jgreen/10 p-3 rounded-full">
                  <Mail className="text-jgreen w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Email Me</h3>
                  <a href="mailto:joshbalando@gmail.com" className="text-muted-foreground hover:text-jgreen transition-colors">
                    joshbalando@gmail.com
                  </a>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-jgreen/10 p-3 rounded-full">
                  <MapPin className="text-jgreen w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Location</h3>
                  <p className="text-muted-foreground">
                    Cavite, Philippines
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <div className="p-6 bg-gradient-to-br from-jorange to-jorange-dark text-white rounded-xl">
              <h3 className="font-medium text-xl mb-3">Ready to automate your business?</h3>
              <p className="mb-4 text-white/90">
              I typically respond within 24 hours. Feel free to reach out. I'm here to help make things easier for you.
              </p>
              <Button asChild className="bg-jgreen text-white hover:bg-white/90">
                <a href="mailto:joshbalando@gmail.com" className="flex items-center gap-2">
                  Email Me <Send className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <Card>
              <CardContent className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        placeholder="John Doe" 
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Your Email</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="john@example.com" 
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      name="subject" 
                      placeholder="How can I help you?" 
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="Tell me about your project..." 
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-jgreen hover:bg-jgreen-dark"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
