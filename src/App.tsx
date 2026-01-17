import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SalesDashboard from "./pages/SalesDashboard";
import VendorPortal from "./pages/VendorPortal";
import PricingDashboard from "./pages/PricingDashboard";
import ApprovalWorkflow from "./pages/ApprovalWorkflow";
import AuditTrail from "./pages/AuditTrail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sales-dashboard" element={<SalesDashboard />} />
          <Route path="/vendor-portal" element={<VendorPortal />} />
          <Route path="/pricing-dashboard" element={<PricingDashboard />} />
          <Route path="/approval-workflow" element={<ApprovalWorkflow />} />
          <Route path="/audit-trail" element={<AuditTrail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
