import { TechIcon } from "@/components/TechIcon";
import { ContactForm } from "@/components/contact/ContactForm";
import { Mail, Phone, MessageSquare } from "lucide-react";

export const metadata = {
    title: "Contact - Joseph Awer",
    description: "Get in touch with Joseph Awer for opportunities, collaborations, or questions.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen pt-32 pb-24 px-4 overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] -z-10 pointer-events-none" />

            <div className="container max-w-5xl mx-auto">
                <div className="mb-16 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
                        Let's <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Connect</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Whether you have a project in mind, a question, or just want to say hi, 
                        my inbox is always open.
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-8 lg:gap-8 items-stretch">
                    
                    {/* Contact Info Sidebar */}
                    <div className="lg:col-span-2 space-y-8 glass-panel p-8 rounded-3xl border-none shadow-xl relative overflow-hidden flex flex-col justify-between h-full">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
                        
                        <div className="relative z-10 w-full">
                            <h3 className="text-2xl font-semibold mb-6">Contact Details</h3>
                            <div className="space-y-6">
                                <a href="mailto:joseph.awer@gmail.com" className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center group-hover:bg-primary/20 transition-colors shadow-sm">
                                        <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-muted-foreground">Email</p>
                                        <p className="text-foreground font-medium">joseph.awer@gmail.com</p>
                                    </div>
                                </a>

                                <a href="tel:+2330577210669" className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center group-hover:bg-primary/20 transition-colors shadow-sm">
                                        <Phone className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-muted-foreground">Phone</p>
                                        <p className="text-foreground font-medium">+233 057 721 0669</p>
                                    </div>
                                </a>

                                <a href="https://wa.me/+233577210669" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center group-hover:bg-green-500/20 transition-colors shadow-sm">
                                        <MessageSquare className="w-5 h-5 text-muted-foreground group-hover:text-green-500 transition-colors" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-muted-foreground">WhatsApp</p>
                                        <p className="text-foreground font-medium">+233 057 721 0669</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="w-full">
                            <hr className="border-border/50 my-8" />
                            <div className="relative z-10 w-full">
                                <h3 className="text-xl font-semibold mb-6">Social Profiles</h3>
                                <div className="flex gap-4">
                                    <a href="https://github.com/Downspice" target="_blank" rel="noopener noreferrer" className="group w-12 h-12 rounded-xl bg-background hover:bg-secondary flex items-center justify-center transition-all border border-transparent hover:border-primary/20 shadow-sm">
                                        <TechIcon name="GitHub" className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-3 glass-panel p-8 sm:p-10 rounded-3xl border-none shadow-xl bg-background/40 h-full flex flex-col">
                        <h2 className="text-2xl font-semibold mb-8">Send a Message</h2>
                        <ContactForm />
                    </div>

                </div>
            </div>
        </main>
    );
}
