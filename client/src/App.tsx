import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/Layout";
import { I18nProvider } from "@/i18n/I18nProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Team from "@/pages/Team";
import TeamMember from "@/pages/TeamMember";
import Career from "@/pages/Career";
import Internship from "@/pages/Internship";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Contact from "@/pages/Contact";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/services" component={Services}/>
        <Route path="/team" component={Team}/>
        <Route path="/team/:slug" component={TeamMember}/>
        <Route path="/career" component={Career}/>
        <Route path="/internship" component={Internship}/>
        <Route path="/blog" component={Blog}/>
        <Route path="/blog/:slug" component={BlogPost}/>
        <Route path="/contact" component={Contact}/>
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider>
          <I18nProvider>
            <Router />
            <Toaster />
          </I18nProvider>
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
