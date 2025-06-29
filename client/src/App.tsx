import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Portfolio from "@/pages/portfolio";
import Contact from "@/pages/contact";
import Navigation from "@/components/navigation";

function Router() {
  return (
    <div className="min-h-screen bg-github-dark">
      <Navigation />
      <Switch>
        <Route path="/" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route component={Portfolio} />
      </Switch>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
