import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { cn } from "../lib/utils";

export const ContactSection = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Using environment variables for EmailJS credentials
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully:', result.text);
      setSubmitStatus('success');
      form.current.reset(); // Clear the form
    } catch (error) {
      console.error('Failed to send email:', error.text);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Clear status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          If you have any questions, want to collaborate, or just want to say
          hello, feel free to reach out! You can contact me via email at{" "}
          <a
            href="mailto:karinakalicka@gmail.com"
            className="text-primary hover:underline"
          >
            karinakalicka@gmail.com
          </a>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-8 text-left">
              More Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-foreground mb-1">Email</h4>
                  <a
                    href="mailto:karinakalicka@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    karinakalicka@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-foreground mb-1">Phone</h4>
                  <a
                    href="tel:+310631329509"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +31 06 31 32 95 09
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-foreground mb-1">Location</h4>
                  <span className="text-muted-foreground">
                    Amsterdam, Netherlands
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-border/50">
              <h4 className="font-medium mb-6 text-left">Connect With Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/karina-kalicka-molin-52193a280/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  <Linkedin className="h-6 w-6 text-primary hover:text-primary/80 transition-colors" />
                </a>
                <a 
                  href="https://github.com/KarinaKKarinaK" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  <Github className="h-6 w-6 text-primary hover:text-primary/80 transition-colors" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-600 dark:text-green-400">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-600 dark:text-red-400">
                Failed to send message. Please try again or contact me directly via email.
              </div>
            )}

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label
                  htmlFor="from_name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="John Wallace"
                />
              </div>

              <div>
                <label
                  htmlFor="from_email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="from_email"
                  name="from_email"
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="john.wallace@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Hello, I would like to discuss..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",
                  isSubmitting && "animate-pulse"
                )}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
