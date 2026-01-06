import { Link, useLocation } from "wouter";
import { Phone, Menu, X, Scale } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { ChatWidget } from "./ChatWidget";

export function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Головна", href: "/" },
    { label: "Послуги", href: "/services" },
    { label: "Блог", href: "/blog" },
    { label: "Контакти", href: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
          isScrolled || mobileMenuOpen ? "bg-background/95 backdrop-blur-md border-border py-3 shadow-sm" : "bg-transparent py-6 text-white"
        )}
      >
        <div className="container-wide flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className={cn(
              "p-2 rounded-none transition-colors",
              isScrolled || mobileMenuOpen ? "bg-primary text-white" : "bg-white text-primary"
            )}>
              <Scale className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "text-xl font-serif font-bold leading-none tracking-tight",
                isScrolled || mobileMenuOpen ? "text-primary" : "text-white"
              )}>
                ЯРЕМЧУК І СЕДУН
              </span>
              <span className={cn(
                "text-[10px] uppercase tracking-widest opacity-80",
                isScrolled || mobileMenuOpen ? "text-muted-foreground" : "text-white/80"
              )}>
                Адвокатське об'єднання
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className={cn(
                  "text-sm uppercase tracking-wider font-medium hover:text-opacity-70 transition-all",
                  isScrolled ? "text-foreground" : "text-white",
                  location === item.href && "border-b-2 border-current pb-1"
                )}
              >
                {item.label}
              </Link>
            ))}
            <a href="tel:+380441234567">
              <Button 
                variant={isScrolled ? "default" : "secondary"} 
                size="sm"
                className="gap-2"
              >
                <Phone className="h-4 w-4" />
                <span>+380 44 123 45 67</span>
              </Button>
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? (
              <X className={cn("h-6 w-6", isScrolled ? "text-foreground" : "text-white")} />
            ) : (
              <Menu className={cn("h-6 w-6", isScrolled ? "text-foreground" : "text-white")} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-6 shadow-xl animate-in slide-in-from-top-5">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link 
                  key={item.href} 
                  href={item.href}
                  className="text-lg font-serif font-medium text-foreground py-2 border-b border-border/50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button className="w-full mt-4" onClick={() => window.location.href = "tel:+380441234567"}>
                Зателефонувати
              </Button>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1 pt-0">
        {children}
      </main>

      <footer className="bg-primary text-primary-foreground py-16 md:py-24 border-t border-white/10">
        <div className="container-wide grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white text-primary">
                <Scale className="h-6 w-6" />
              </div>
              <span className="text-xl font-serif font-bold">ЯРЕМЧУК І СЕДУН</span>
            </div>
            <p className="text-white/60 max-w-sm leading-relaxed">
              Надаємо виняткове правове представництво з суворим дотриманням етики та професіоналізму. Ваші права — наш пріоритет.
            </p>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-lg font-serif font-semibold">Напрямки практики</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>Кримінальний захист</li>
              <li>Корпоративне право</li>
              <li>Цивільні спори</li>
              <li>Сімейне право</li>
              <li>Військове право</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-serif font-semibold">Контакти</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>Київ, вул. Володимирська, 101</li>
              <li>+380 44 123 45 67</li>
              <li>info@yaremchuk-sedun.ua</li>
              <li>Пн-Пт: 09:00 - 18:00</li>
            </ul>
          </div>
        </div>
        <div className="container-wide mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
          <p>© {new Date().getFullYear()} Яремчук і Седун. Всі права захищені.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span>Політика конфіденційності</span>
            <span>Умови використання</span>
          </div>
        </div>
      </footer>
      
      <ChatWidget />
    </div>
  );
}
