import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ThemeTestPage() {
    return (
        <div className="min-h-screen p-10 space-y-12 bg-background text-foreground transition-colors duration-300">
            <section className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-primary">Typography & Colors</h1>
                <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                    This is a test page to verify the Nunito font, soft blue color palette, and glassmorphism effects.
                    Calculated, calm, and professional.
                </p>
            </section>

            <section className="space-y-8 glass-panel p-8 rounded-xl">
                <div className="space-y-2">
                    <h1>Heading 1 (Nunito Semibold)</h1>
                    <p className="text-muted-foreground">The quick brown fox jumps over the lazy dog.</p>
                </div>
                <div className="space-y-2">
                    <h2>Heading 2 (Nunito Semibold)</h2>
                    <p className="text-muted-foreground">The quick brown fox jumps over the lazy dog.</p>
                </div>
                <div className="space-y-2">
                    <h3>Heading 3 (Nunito Semibold)</h3>
                    <p className="text-muted-foreground">The quick brown fox jumps over the lazy dog.</p>
                </div>
                <div className="space-y-2">
                    <h4>Heading 4 (Nunito Semibold)</h4>
                    <p className="text-muted-foreground">The quick brown fox jumps over the lazy dog.</p>
                </div>
                <div className="space-y-2">
                    <p>Body Text (Nunito Regular/Medium)</p>
                    <p className="text-muted-foreground max-w-prose">
                        Typography should feel soft, modern, and welcoming. We use Nunito as the primary sans-serif font across the system.
                        It should be highly readable at all screen sizes, confident without being aggressive, and human and friendly, not corporate or robotic.
                    </p>
                    <small className="text-muted-foreground">Small text / Caption / Label</small>
                </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="glass-panel border-none shadow-md">
                    <CardHeader>
                        <CardTitle>Glassmorphism Card</CardTitle>
                        <CardDescription>A subtle glass effect using backdrop-blur.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm">
                            The background should be semi-transparent with a soft blur, sitting comfortably on the page.
                        </p>
                    </CardContent>
                    <CardFooter>
                        <Button>Primary Action</Button>
                    </CardFooter>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Standard Card</CardTitle>
                        <CardDescription>Default surface color.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" placeholder="hello@example.com" />
                        </div>
                    </CardContent>
                    <CardFooter className="gap-2">
                        <Button variant="outline">Secondary</Button>
                        <Button variant="ghost">Ghost</Button>
                    </CardFooter>
                </Card>

                <div className="space-y-4 p-6 rounded-xl bg-sidebar border border-sidebar-border">
                    <h3 className="font-semibold text-sidebar-foreground">Sidebar / Clean Panel</h3>
                    <p className="text-sm text-muted-foreground">
                        Testing secondary layout surfaces and muted text contrast.
                    </p>
                    <div className="flex gap-2">
                        <div className="w-8 h-8 rounded-full bg-chart-1"></div>
                        <div className="w-8 h-8 rounded-full bg-chart-2"></div>
                        <div className="w-8 h-8 rounded-full bg-chart-3"></div>
                        <div className="w-8 h-8 rounded-full bg-chart-4"></div>
                        <div className="w-8 h-8 rounded-full bg-chart-5"></div>
                    </div>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Interactive Elements</h2>
                <div className="flex flex-wrap gap-4 items-center">
                    <Button size="lg">Large Button</Button>
                    <Button>Default Button</Button>
                    <Button size="sm">Small</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="link">Link Style</Button>
                </div>
            </section>
        </div>
    );
}
