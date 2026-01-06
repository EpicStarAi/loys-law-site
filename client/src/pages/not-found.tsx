import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background">
      <div className="text-center space-y-6 max-w-md px-4">
        <div className="flex justify-center">
          <AlertCircle className="h-16 w-16 text-muted-foreground opacity-20" />
        </div>
        <h1 className="text-4xl font-serif font-bold text-primary">404 Page Not Found</h1>
        <p className="text-muted-foreground text-lg">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="pt-4">
          <Link href="/">
            <Button size="lg" className="w-full">
              Return Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
