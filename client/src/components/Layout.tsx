import { Link, useLocation } from "wouter";
import { Phone, Menu, X, Facebook, Globe, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { ChatWidget } from "./ChatWidget";
import { useI18n } from "@/i18n/I18nProvider";
import logoImage from "@assets/LOGO_LOYS_1767809243154.png";
import { SiTelegram, SiViber, SiWhatsapp } from "react-icons/si";

export function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { locale, setLocale, t } = useI18n();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.services, href: "/services" },
    { label: t.nav.team, href: "/team" },
    { label: t.nav.blog, href: "/blog" },
    { label: t.nav.contact, href: "/contact" },
  ];

  const toggleLocale = () => {
    setLocale(locale === "uk" ? "en" : "uk");
  };

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
            <img 
              src={logoImage} 
              alt="Yaremchuk & Sedun" 
              className="h-12 w-12 object-contain"
            />
            <div className="flex flex-col">
              <span className={cn(
                "text-xl font-serif font-bold leading-none tracking-tight",
                isScrolled || mobileMenuOpen ? "text-primary" : "text-white"
              )}>
                {locale === "uk" ? "ЯРЕМЧУК І СЕДУН" : "YAREMCHUK & SEDUN"}
              </span>
              <span className={cn(
                "text-[10px] uppercase tracking-widest opacity-80",
                isScrolled || mobileMenuOpen ? "text-muted-foreground" : "text-white/80"
              )}>
                {locale === "uk" ? "Адвокатське об'єднання" : "Law Firm"}
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-5">
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
            
            {/* Language Switcher */}
            <button
              onClick={toggleLocale}
              className={cn(
                "flex items-center gap-1.5 text-sm font-medium transition-all px-2 py-1",
                isScrolled ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10"
              )}
              data-testid="button-language-toggle"
            >
              <Globe className="h-4 w-4" />
              <span>{locale === "uk" ? "EN" : "UA"}</span>
            </button>

            <a href="tel:+380977777600">
              <Button 
                variant={isScrolled ? "default" : "secondary"} 
                size="sm"
                className="gap-2"
              >
                <Phone className="h-4 w-4" />
                <span>+380 97 777 76 00</span>
              </Button>
            </a>
          </nav>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleLocale}
              className={cn(
                "flex items-center gap-1 text-sm font-medium p-2",
                isScrolled ? "text-foreground" : "text-white"
              )}
              data-testid="button-language-toggle-mobile"
            >
              <Globe className="h-5 w-5" />
              <span>{locale === "uk" ? "EN" : "UA"}</span>
            </button>
            <button 
              className="p-2"
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
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-6 shadow-xl animate-in slide-in-from-top-5">
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
              <Link 
                href="/career"
                className="text-lg font-serif font-medium text-foreground py-2 border-b border-border/50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.career}
              </Link>
              <Button className="w-full mt-4" onClick={() => window.location.href = "tel:+380977777600"}>
                {t.nav.call}
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
              <img 
                src={logoImage} 
                alt="Yaremchuk & Sedun" 
                className="h-12 w-12 object-contain"
              />
              <span className="text-xl font-serif font-bold">
                {locale === "uk" ? "ЯРЕМЧУК І СЕДУН" : "YAREMCHUK & SEDUN"}
              </span>
            </div>
            <p className="text-white/60 max-w-sm leading-relaxed">
              {t.footer.description}
            </p>
            <div className="flex gap-3 pt-2">
              <a 
                href="https://t.me/Ruslan_Yaremchuk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                data-testid="link-telegram"
              >
                <SiTelegram className="w-5 h-5" />
              </a>
              <a 
                href="viber://chat?number=%2B380977777600" 
                className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                data-testid="link-viber"
              >
                <SiViber className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/380977777600" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                data-testid="link-whatsapp"
              >
                <SiWhatsapp className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/yaremchukandpartners/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                data-testid="link-facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-lg font-serif font-semibold">{t.footer.practiceAreas}</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>{t.services.criminal}</li>
              <li>{t.services.military}</li>
              <li>{t.services.family}</li>
              <li>{t.services.corporate}</li>
              <li>{t.services.echr}</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-serif font-semibold">{t.footer.contacts}</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>{t.contact.kyivAddress}</li>
              <li>+380 97 777 76 00</li>
              <li>attorneysys@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="container-wide mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
          <p>© {new Date().getFullYear()} {locale === "uk" ? "Яремчук і Седун" : "Yaremchuk & Sedun"}. {t.footer.rights}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span>{t.footer.privacy}</span>
            <span>{t.footer.terms}</span>
          </div>
        </div>
      </footer>
      
      {/* Messenger Widgets */}
      <div className="fixed bottom-24 right-6 flex flex-col gap-3 z-40">
        <a 
          href="https://t.me/Ruslan_Yaremchuk" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 bg-[#0088cc] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          data-testid="widget-telegram"
        >
          <SiTelegram className="w-6 h-6" />
        </a>
        <a 
          href="viber://chat?number=%2B380977777600"
          className="w-12 h-12 bg-[#7360f2] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          data-testid="widget-viber"
        >
          <SiViber className="w-6 h-6" />
        </a>
        <a 
          href="https://wa.me/380977777600" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          data-testid="widget-whatsapp"
        >
          <SiWhatsapp className="w-6 h-6" />
        </a>
      </div>
      
      <ChatWidget />
    </div>
  );
}
