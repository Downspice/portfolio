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
                        <label htmlFor="name" className="font-mono-label text-[10px] uppercase tracking-widest text-muted-foreground">Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            required 
                            autoComplete="name"
                            enterKeyHint="next"
                            className="w-full h-12 px-4 text-base md:text-sm border-2 border-border bg-background focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/40 transition-[border-color,box-shadow] duration-150 ease-out"
                            placeholder="John Doe"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="font-mono-label text-[10px] uppercase tracking-widest text-muted-foreground">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            required 
                            autoComplete="email"
                            inputMode="email"
                            autoCapitalize="none"
                            spellCheck={false}
                            enterKeyHint="next"
                            className="w-full h-12 px-4 text-base md:text-sm border-2 border-border bg-background focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/40 transition-[border-color,box-shadow] duration-150 ease-out"
                            placeholder="john@example.com"
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <label htmlFor="message" className="font-mono-label text-[10px] uppercase tracking-widest text-muted-foreground">Message</label>
                    <textarea 
                        id="message" 
                        name="message" 
                        required 
                        rows={6}
                        enterKeyHint="done"
                        className="w-full p-4 text-base md:text-sm border-2 border-border bg-background focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/40 transition-[border-color,box-shadow] duration-150 ease-out resize-none"
                        placeholder="Tell me about your project..."
                    />
                </div>
            </div>

            <Button 
                type="submit" 
                size="lg" 
                disabled={status === "loading" || status === "success"}
                className={`w-full h-14 ${status === "success" ? "bg-accent border-accent text-accent-foreground hover:bg-accent" : ""}`}
            >
                <span className="flex items-center justify-center gap-2">
                    {status === "loading" && <Loader2 className="w-5 h-5 animate-spin" />}
                    {status === "idle" && <Send className="w-5 h-5" />}
                    {status === "success" && "Message Sent!"}
                    {status === "error" && "Failed — Try Again"}
                    {status === "idle" && "Send Message"}
                </span>
            </Button>
            
            {status === "success" && (
                <p className="text-sm text-accent text-center mt-4 font-mono-label">
                    Thanks for reaching out! I'll get back to you soon.
                </p>
            )}
        </form>
    );
}
