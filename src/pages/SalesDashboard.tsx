import { TopNavigation } from "@/components/layout/TopNavigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { StatusBadge } from "@/components/ui/status-badge";
import { Button } from "@/components/ui/button";
import { 
  Plus, 
  Calendar, 
  MapPin, 
  Users, 
  DollarSign, 
  FileText,
  Clock,
  Search,
  Building,
  Plane,
  Hotel,
  Package
} from "lucide-react";

const recentRFQs = [
  { id: "RFQ-2024-001", destination: "Dubai, UAE", status: "pending" as const, time: "2 hours ago" },
  { id: "RFQ-2024-002", destination: "Singapore", status: "active" as const, time: "5 hours ago" },
  { id: "RFQ-2024-003", destination: "Tokyo, Japan", status: "completed" as const, time: "1 day ago" },
  { id: "RFQ-2024-004", destination: "London, UK", status: "draft" as const, time: "2 days ago" },
];

const vendors = [
  "Marriott International",
  "Hilton Hotels",
  "Hyatt Hotels",
  "Four Seasons",
  "Accor Hotels",
  "IHG Hotels",
  "Radisson Hotels",
  "Wyndham Hotels",
];

export default function SalesDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <TopNavigation
        title="RFQ System"
        tabs={[
          { label: "Dashboard", active: true },
          { label: "RFQs", badge: 5 },
          { label: "Bookings" },
          { label: "Reports" },
        ]}
        userRole="Sales Representative"
      />

      <main className="p-6 max-w-7xl mx-auto">
        <PageHeader
          title="Create New RFQ"
          subtitle="Submit a request for quotation to vendors"
          actions={
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              Create New RFQ
            </Button>
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* RFQ Form */}
          <div className="lg:col-span-2 bg-card border border-border rounded-lg p-6">
            <h2 className="text-lg font-semibold text-foreground mb-6">RFQ Details</h2>
            
            <div className="space-y-5">
              {/* Customer Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Customer Name
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Enter customer name"
                    className="w-full pl-10 pr-4 py-2.5 bg-background border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              {/* Travel Dates */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Start Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="date"
                      className="w-full pl-10 pr-4 py-2.5 bg-background border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    End Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="date"
                      className="w-full pl-10 pr-4 py-2.5 bg-background border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>
              </div>

              {/* Destination */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Destination
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search destination..."
                    className="w-full pl-10 pr-10 py-2.5 bg-background border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                </div>
              </div>

              {/* Service Type */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  Service Type
                </label>
                <div className="flex gap-4">
                  {[
                    { icon: Hotel, label: "Hotel" },
                    { icon: Plane, label: "Flight" },
                    { icon: Package, label: "Package" },
                  ].map((service) => (
                    <label
                      key={service.label}
                      className="flex items-center gap-3 px-4 py-3 border border-input rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
                    >
                      <input type="radio" name="serviceType" className="accent-primary" />
                      <service.icon className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-foreground">{service.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Number of Travelers & Budget */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Number of Travelers
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="number"
                      placeholder="0"
                      min="1"
                      className="w-full pl-10 pr-4 py-2.5 bg-background border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Budget Range (USD)
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="e.g., 5,000 - 10,000"
                      className="w-full pl-10 pr-4 py-2.5 bg-background border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>
              </div>

              {/* Special Requirements */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Special Requirements
                </label>
                <div className="relative">
                  <FileText className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <textarea
                    rows={3}
                    placeholder="Enter any special requirements, preferences, or notes..."
                    className="w-full pl-10 pr-4 py-2.5 bg-background border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                  />
                </div>
              </div>

              {/* Vendor Selection */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  Select Vendors <span className="text-muted-foreground font-normal">(Choose 3-10 vendors)</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {vendors.map((vendor) => (
                    <label
                      key={vendor}
                      className="flex items-center gap-3 px-3 py-2.5 border border-input rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
                    >
                      <input type="checkbox" className="accent-primary w-4 h-4" />
                      <span className="text-sm text-foreground">{vendor}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <Button variant="outline" className="flex-1">
                  Save Draft
                </Button>
                <Button className="flex-1 gap-2">
                  <Plus className="w-4 h-4" />
                  Send RFQ
                </Button>
              </div>
            </div>
          </div>

          {/* Recent RFQs */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-lg font-semibold text-foreground mb-4">Recent RFQs</h2>
            <div className="space-y-3">
              {recentRFQs.map((rfq) => (
                <div
                  key={rfq.id}
                  className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">{rfq.id}</span>
                    <StatusBadge status={rfq.status} />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <MapPin className="w-3.5 h-3.5" />
                    {rfq.destination}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="w-3.5 h-3.5" />
                    {rfq.time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
