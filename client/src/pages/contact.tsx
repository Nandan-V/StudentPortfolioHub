import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { contactFormSchema, type InsertContactForm } from "@shared/schema";
import { Mail, MapPin, Github, Linkedin, Send } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<InsertContactForm>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const submitContactForm = useMutation({
    mutationFn: async (data: InsertContactForm) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactForm) => {
    submitContactForm.mutate(data);
  };

  return (
    <div className="pt-20 pb-12">
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-github-text mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-github-text-secondary">
            Interested in collaboration or have questions about my projects?
            Let's connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-github-card border-github-border">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold text-github-text mb-6">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="text-github-blue mr-4 w-5 h-5" />
                    <div>
                      <p className="text-github-text font-medium">Email</p>
                      <a
                        href="mailto:student@mtroyal.ca"
                        className="text-github-text-secondary hover:text-github-blue transition-colors"
                      >
                        student@mtroyal.ca
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="text-github-blue mr-4 w-5 h-5" />
                    <div>
                      <p className="text-github-text font-medium">Location</p>
                      <p className="text-github-text-secondary">
                        Calgary, Alberta, Canada
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Linkedin className="text-github-blue mr-4 w-5 h-5" />
                    <div>
                      <p className="text-github-text font-medium">LinkedIn</p>
                      <a
                        href="#"
                        className="text-github-text-secondary hover:text-github-blue transition-colors"
                      >
                        linkedin.com/in/cis-student
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Github className="text-github-blue mr-4 w-5 h-5" />
                    <div>
                      <p className="text-github-text font-medium">GitHub</p>
                      <a
                        href="#"
                        className="text-github-text-secondary hover:text-github-blue transition-colors"
                      >
                        github.com/cis-student
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-github-card border-github-border">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-github-text mb-4">
                  Let's Connect
                </h3>
                <p className="text-github-text-secondary text-sm mb-4">
                  I'm always open to discussing new opportunities, collaborative
                  projects, or just chatting about technology and data science.
                </p>
                <div className="flex space-x-4">
                  <Button className="bg-github-blue hover:bg-blue-600 text-white">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button variant="outline" className="border-github-border text-github-text hover:border-github-blue">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-github-card border-github-border">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-github-text mb-6">
                Send a Message
              </h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-github-text">Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="bg-github-dark border-github-border text-github-text focus:border-github-blue"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-github-text">Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            {...field}
                            className="bg-github-dark border-github-border text-github-text focus:border-github-blue"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-github-text">Subject</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-github-dark border-github-border text-github-text focus:border-github-blue">
                              <SelectValue placeholder="Please select a subject" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-github-card border-github-border">
                            <SelectItem value="collaboration">Collaboration Opportunity</SelectItem>
                            <SelectItem value="project">Project Inquiry</SelectItem>
                            <SelectItem value="general">General Question</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-github-text">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            rows={5}
                            placeholder="Tell me about your project or question..."
                            className="bg-github-dark border-github-border text-github-text focus:border-github-blue resize-vertical"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    disabled={submitContactForm.isPending}
                    className="w-full bg-github-blue hover:bg-blue-600 text-white"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {submitContactForm.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
