import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto py-4 px-6 flex justify-between items-center">
          <div className="font-semibold text-xl">Brand</div>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="hover:text-primary/80 transition-colors">
              Home
            </Link>
            <Link href="#" className="hover:text-primary/80 transition-colors">
              Features
            </Link>
            <Link href="#" className="hover:text-primary/80 transition-colors">
              Pricing
            </Link>
            <Link href="#" className="hover:text-primary/80 transition-colors">
              About
            </Link>
          </nav>
          <Button>Get Started</Button>
        </div>
      </header>

      <section className="flex-1 flex flex-col items-center justify-center py-12 px-6">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Build Something <span className="text-primary">Amazing</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            A modern, clean interface for your next project. No loading animations,
            no empty spaces - just pure, functional design.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg">Get Started</Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Simple & Clean",
                description:
                  "Clean design without unnecessary elements for better user focus.",
              },
              {
                title: "Performance First",
                description:
                  "Optimized for the best performance and user experience.",
              },
              {
                title: "Easy to Customize",
                description:
                  "Fully customizable components to match your brand identity.",
              },
            ].map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t py-8">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>© 2025 Brand. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
