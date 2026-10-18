import { TechIcon } from "@/components/TechIcon";
import { ContactForm } from "@/components/contact/ContactForm";
import { SectionHeader } from "@/components/SectionHeader";
import { Mail, Phone, MessageSquare } from "lucide-react";

export const metadata = {
  title: "Contact - Joseph Awer",
  description: "Get in touch with Joseph Awer for opportunities, collaborations, or questions.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24 pb-24 px-4 md:px-8 overflow-hidden relative">
      <div className="container max-w-5xl mx-auto">
        <SectionHeader
          number="06"
          tag="Reach Out"
          title="GET IN TOUCH"
          subtitle="Whether you have a project in mind, a question, or just want to say hi — my inbox is always open."
          align="center"
        />

        <div className="mt-16 grid lg:grid-cols-5 gap-0 border-2 border-border">
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-2 p-8 md:p-10 border-b-2 lg:border-b-0 lg:border-r-2 border-border bg-secondary/10 flex flex-col justify-between">
            <div>
              <h3 className="font-display text-2xl tracking-wider mb-8">DETAILS</h3>
              <div className="space-y-6">
                <a 
                  href="mailto:joseph.awer@gmail.com" 
                  className="flex items-center gap-4 group active:scale-[0.98] transition-transform duration-100 touch-manipulation"
                >
                  <div className="w-12 h-12 border-2 border-border flex items-center justify-center group-hover:border-primary transition-colors duration-150">
                    <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-150" />
                  </div>
                  <div>
                    <p className="font-mono-label text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Email</p>
                    <p className="text-foreground font-medium text-sm mb-0">joseph.awer@gmail.com</p>
                  </div>
                </a>

                <a 
                  href="tel:+2330577210669" 
                  className="flex items-center gap-4 group active:scale-[0.98] transition-transform duration-100 touch-manipulation"
                >
                  <div className="w-12 h-12 border-2 border-border flex items-center justify-center group-hover:border-primary transition-colors duration-150">
                    <Phone className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-150" />
                  </div>
                  <div>
                    <p className="font-mono-label text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Phone</p>
                    <p className="text-foreground font-medium text-sm mb-0">+233 057 721 0669</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/+233577210669"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group active:scale-[0.98] transition-transform duration-100 touch-manipulation"
                >
                  <div className="w-12 h-12 border-2 border-border flex items-center justify-center group-hover:border-accent transition-colors duration-150">
                    <MessageSquare className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors duration-150" />
                  </div>
                  <div>
                    <p className="font-mono-label text-[10px] uppercase tracking-widest text-muted-foreground mb-1">WhatsApp</p>
                    <p className="text-foreground font-medium text-sm mb-0">+233 057 721 0669</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t-2 border-border">
              <h3 className="font-display text-xl tracking-wider mb-6">SOCIAL</h3>
              <div className="flex gap-3">
                <a
                  href="https://github.com/Downspice"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="group p-3 border-2 border-border hover:border-primary hover:shadow-[3px_3px_0_0_var(--primary)] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:scale-[0.95] active:shadow-none transition-[border-color,box-shadow,transform] duration-150 ease-out select-none touch-manipulation"
                >
                  <TechIcon name="GitHub" className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-150" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 p-8 md:p-10">
            <h2 className="font-display text-2xl tracking-wider mb-8">SEND A MESSAGE</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
