import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Base path - Vercel uses "/", GitHub Pages uses "/zuma-night-club"
// Check if we're on Vercel (no base path needed) or GitHub Pages
const getBasename = () => {
  // If VITE_BASE_PATH is set, use it (without trailing slash for React Router)
  if (import.meta.env.VITE_BASE_PATH) {
    const base = import.meta.env.VITE_BASE_PATH;
    return base.endsWith('/') ? base.slice(0, -1) : base;
  }
  // Vercel automatically sets VERCEL=1, but in browser we check window.location
  // For Vercel deployments, base path should be "/"
  // For GitHub Pages, check if URL contains the repo name
  if (typeof window !== 'undefined') {
    const isGitHubPages = window.location.hostname.includes('github.io');
    if (isGitHubPages) {
      // Extract repo name from pathname
      const pathMatch = window.location.pathname.match(/^\/([^\/]+)/);
      if (pathMatch && pathMatch[1] !== '') {
        return `/${pathMatch[1]}`;
      }
    }
  }
  // Default: GitHub Pages in production, root in development
  return import.meta.env.PROD ? "/zuma-night-club" : "/";
};

const basename = getBasename();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={basename}>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
