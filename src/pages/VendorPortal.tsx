import { TopNavigation } from "@/components/layout/TopNavigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { StatusBadge } from "@/components/ui/status-badge";
import { MetricCard } from "@/components/ui/metric-card";
import { Button } from "@/components/ui/button";
import { 
  Clock, 
  MapPin, 
  Users, 
  Calendar,
  FileText,
  Upload,
  ChevronDown,
  ChevronUp,
  Inbox,
  Award,
  BarChart3,
  DollarSign,
  Check
} from "lucide-react";
import { useState } from "react";

const activeRFQs = [
  {
    id: "RFQ-2024-001",
    destination: "Dubai Marina, UAE",
    dates: "Jan 15-22, 2024",
    guests: 25,
    requirements: "5-star hotel, conference room for 20, airport transfer",
    deadline: "18:45:22",
    isNew: true,
  },
  {
    id: "RFQ-2024-002",
    destination: "Singapore Central",
    dates: "Feb 1-5, 2024",
    guests: 8,
    requirements: "Business class hotel, proximity to convention center",
    deadline: "42:12:08",
    isNew: false,
  },
];

const roomTypes = [
  "Standard Room",
  "Deluxe Room",
  "Executive Suite",
  "Presidential Suite",
  "Family Room",
];

const inclusions = [
  "Breakfast",
  "WiFi",
  "Airport Transfer",
  "Gym Access",
  "Spa Credit",
  "Late Checkout",
];

export default function VendorPortal() {
  const [expandedRFQ, setExpandedRFQ] = useState<string | null>("RFQ-2024-001");

  return (
    <div className="min-h-screen bg-background">
      <TopNavigation
        title="Vendor Portal"
        tabs={[
          { label: "Dashboard", active: true },
          { label: "Active RFQs", badge: 2 },
          { label: "Awarded Bookings" },
          { label: "Performance" },
        ]}
        userRole="Vendor Partner"
      />

      <main className="p-6 max-w-7xl mx-auto">
        <PageHeader
          title="Vendor Dashboard"
          subtitle="Manage your active RFQs and submit quotes"
        />

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <MetricCard
            title="Active RFQs"
            value="2"
            icon={<Inbox className="w-5 h-5" />}
            change={{ value: "+1 new", trend: "up" }}
          />
          <MetricCard
            title="Pending Quotes"
            value="5"
            icon={<FileText className="w-5 h-5" />}
          />
          <MetricCard
            title="Awarded This Month"
            value="12"
            icon={<Award className="w-5 h-5" />}
            change={{ value: "+18%", trend: "up" }}
          />
          <MetricCard
            title="Win Rate"
            value="34%"
            icon={<BarChart3 className="w-5 h-5" />}
            change={{ value: "+2.1%", trend: "up" }}
          />
        </div>

        {/* Active RFQs */}
        <div className="bg-card border border-border rounded-lg">
          <div className="p-4 border-b border-border">
            <h2 className="text-lg font-semibold text-foreground">Active RFQs</h2>
            <p className="text-sm text-muted-foreground">Submit your competitive quotes before the deadline</p>
          </div>

          <div className="divide-y divide-border">
            {activeRFQs.map((rfq) => (
              <div key={rfq.id} className="p-4">
                {/* RFQ Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-base font-semibold text-foreground">{rfq.id}</span>
                        {rfq.isNew && (
                          <span className="px-2 py-0.5 bg-primary text-primary-foreground text-xs font-medium rounded-full animate-pulse-soft">
                            NEW
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          {rfq.destination}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          {rfq.dates}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Users className="w-4 h-4" />
                          {rfq.guests} guests
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    {/* Countdown Timer */}
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground mb-1">Deadline</p>
                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-warning/10 text-warning rounded-lg">
                        <Clock className="w-4 h-4" />
                        <span className="font-mono font-semibold">{rfq.deadline}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Requirements */}
                <div className="p-3 bg-muted/50 rounded-lg mb-4">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Requirements:</span> {rfq.requirements}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2 mb-4">
                  <Button variant="outline" size="sm">View Details</Button>
                  <Button
                    size="sm"
                    onClick={() => setExpandedRFQ(expandedRFQ === rfq.id ? null : rfq.id)}
                    className="gap-2"
                  >
                    Submit Quote
                    {expandedRFQ === rfq.id ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </Button>
                </div>

                {/* Quote Submission Form */}
                {expandedRFQ === rfq.id && (
                  <div className="border border-border rounded-lg p-5 bg-background">
                    <h3 className="text-base font-semibold text-foreground mb-4">Quote Submission</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      {/* Room Type */}
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Room/Service Type
                        </label>
                        <select className="w-full px-3 py-2.5 bg-background border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20">
                          {roomTypes.map((type) => (
                            <option key={type}>{type}</option>
                          ))}
                        </select>
                      </div>

                      {/* Rate per Unit */}
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Rate per Unit (USD)
                        </label>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <input
                            type="number"
                            placeholder="0.00"
                            className="w-full pl-10 pr-4 py-2.5 bg-background border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                      </div>

                      {/* Quantity */}
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Quantity
                        </label>
                        <input
                          type="number"
                          placeholder="0"
                          min="1"
                          className="w-full px-3 py-2.5 bg-background border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                        />
                      </div>

                      {/* Quote Validity */}
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Quote Validity
                        </label>
                        <select className="w-full px-3 py-2.5 bg-background border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20">
                          <option>7 days</option>
                          <option>14 days</option>
                          <option>30 days</option>
                        </select>
                      </div>
                    </div>

                    {/* Inclusions */}
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Inclusions
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {inclusions.map((inclusion) => (
                          <label
                            key={inclusion}
                            className="flex items-center gap-2 px-3 py-2 border border-input rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
                          >
                            <input type="checkbox" className="accent-primary w-4 h-4" />
                            <span className="text-sm text-foreground">{inclusion}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Calculated Total */}
                    <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground">Calculated Total</span>
                        <span className="text-xl font-semibold text-primary">$15,750.00</span>
                      </div>
                    </div>

                    {/* Additional Terms */}
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Additional Terms & Conditions
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Enter any additional terms, cancellation policy, or special conditions..."
                        className="w-full px-3 py-2.5 bg-background border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                      />
                    </div>

                    {/* File Upload */}
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Attachments
                      </label>
                      <div className="border-2 border-dashed border-border rounded-lg p-4 text-center hover:border-primary/50 transition-colors cursor-pointer">
                        <Upload className="w-6 h-6 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">
                          Drag & drop files or <span className="text-primary">browse</span>
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">PDF, DOC, XLS up to 10MB</p>
                      </div>
                    </div>

                    {/* Submit Buttons */}
                    <div className="flex items-center gap-3 pt-4 border-t border-border">
                      <Button variant="outline" className="flex-1">
                        Save Draft
                      </Button>
                      <Button className="flex-1 gap-2">
                        <Check className="w-4 h-4" />
                        Submit Quote
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
