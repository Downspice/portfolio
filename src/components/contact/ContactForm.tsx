"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, Loader2 } from "lucide-react";

export function ContactForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus("success");
                (e.target as HTMLFormElement).reset();
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            required 
                            className="w-full h-12 px-4 rounded-xl border border-white/10 bg-background/50 focus:bg-background/80 focus:border-primary/50 focus:outline-hidden focus:ring-1 focus:ring-primary/50 transition-all duration-300 shadow-sm"
                            placeholder="John Doe"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            required 
                            className="w-full h-12 px-4 rounded-xl border border-white/10 bg-background/50 focus:bg-background/80 focus:border-primary/50 focus:outline-hidden focus:ring-1 focus:ring-primary/50 transition-all duration-300 shadow-sm"
                            placeholder="john@example.com"
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                    <textarea 
                        id="message" 
                        name="message" 
                        required 
                        rows={6}
                        className="w-full p-4 rounded-xl border border-white/10 bg-background/50 focus:bg-background/80 focus:border-primary/50 focus:outline-hidden focus:ring-1 focus:ring-primary/50 transition-all duration-300 resize-none shadow-sm"
                        placeholder="Tell me about your project..."
                    />
                </div>
            </div>

            <Button 
                type="submit" 
                size="lg" 
                disabled={status === "loading" || status === "success"}
                className={`w-full relative group h-14 overflow-hidden transition-all duration-300 ${status === "success" ? "bg-green-500 hover:bg-green-600 text-white" : ""}`}
            >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                    {status === "loading" && <Loader2 className="w-5 h-5 animate-spin" />}
                    {status === "idle" && <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                    {status === "success" && "Message Sent!"}
                    {status === "error" && "Failed to Send - Try Again"}
                    {status === "idle" && "Send Message"}
                </span>
            </Button>
            
            {status === "success" && (
                <p className="text-sm text-green-500 text-center animate-in fade-in slide-in-from-bottom-2 mt-4">
                    Thanks for reaching out! I'll get back to you soon.
                </p>
            )}
        </form>
    );
}
