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

        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <div className="text-center mb-8">
            <div className="flex justify-center space-x-8 mb-6">
              <div className="flex items-center">
                <Mail className="text-github-blue mr-2 w-5 h-5" />
                <a
                  href="mailto:student@mtroyal.ca"
                  className="text-github-text-secondary hover:text-github-blue transition-colors"
                >
                  student@mtroyal.ca
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="text-github-blue mr-2 w-5 h-5" />
                <span className="text-github-text-secondary">Calgary, AB</span>
              </div>
            </div>
            <div className="flex justify-center space-x-4">
              <Button className="bg-github-blue hover:bg-blue-600 text-white">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
              <Button variant="outline" className="border-github-border text-github-text hover:border-github-blue">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-github-card border-github-border">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-github-text mb-6 text-center">
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
