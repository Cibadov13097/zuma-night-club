import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Base path - Vercel/Netlify uses "/", GitHub Pages uses "/zuma-night-club"
// Check deployment platform and set appropriate base path
const getBasename = () => {
  // If VITE_BASE_PATH is set, use it (without trailing slash for React Router)
  if (import.meta.env.VITE_BASE_PATH) {
    const base = import.meta.env.VITE_BASE_PATH;
    return base.endsWith('/') ? base.slice(0, -1) : base;
  }
  
  // Check deployment platform in browser
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    
    // Netlify detection
    if (hostname.includes('netlify.app') || hostname.includes('netlify.com')) {
      return "/";
    }
    
    // Vercel detection
    if (hostname.includes('vercel.app')) {
      return "/";
    }
    
    // GitHub Pages detection
    if (hostname.includes('github.io')) {
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
        <div className="min-h-screen bg-background" style={{ backgroundColor: 'hsl(260 20% 5%)' }}>
          <Toaster />
          <Sonner />
          <BrowserRouter basename={basename}>
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
