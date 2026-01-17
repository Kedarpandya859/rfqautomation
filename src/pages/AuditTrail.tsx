import { TopNavigation } from "@/components/layout/TopNavigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { MetricCard } from "@/components/ui/metric-card";
import { Button } from "@/components/ui/button";
import { 
  Calendar,
  Clock,
  CheckCircle2,
  FileText,
  Send,
  Award,
  User,
  TrendingUp,
  Percent,
  Timer,
  ChevronDown
} from "lucide-react";

const timelineEvents = [
  {
    id: 1,
    action: "RFQ Created",
    description: "Request for quotation created and sent to vendors",
    user: "John Smith",
    role: "Sales Representative",
    timestamp: "Jan 8, 2024 at 9:00 AM",
    details: "Sent to: Marriott, Hilton, Hyatt, Four Seasons",
    type: "created" as const,
  },
  {
    id: 2,
    action: "Quote Received",
    description: "Vendor submitted quote",
    user: "Marriott International",
    role: "Vendor",
    timestamp: "Jan 9, 2024 at 10:15 AM",
    details: "Amount: $12,500",
    type: "quoted" as const,
  },
  {
    id: 3,
    action: "Quote Received",
    description: "Vendor submitted quote",
    user: "Hilton Hotels",
    role: "Vendor",
    timestamp: "Jan 9, 2024 at 11:30 AM",
    details: "Amount: $13,200",
    type: "quoted" as const,
  },
  {
    id: 4,
    action: "Quote Received",
    description: "Vendor submitted quote",
    user: "Hyatt Hotels",
    role: "Vendor",
    timestamp: "Jan 9, 2024 at 2:45 PM",
    details: "Amount: $14,100",
    type: "quoted" as const,
  },
  {
    id: 5,
    action: "Analysis Completed",
    description: "Pricing analysis and vendor comparison completed",
    user: "Sarah Chen",
    role: "Pricing Analyst",
    timestamp: "Jan 10, 2024 at 2:30 PM",
    details: "Recommended: Marriott International",
    type: "analyzed" as const,
  },
  {
    id: 6,
    action: "Manager Approved",
    description: "Booking approved and vendor awarded",
    user: "Michael Johnson",
    role: "Sales Manager",
    timestamp: "Jan 10, 2024 at 4:15 PM",
    details: "Approved with conditions",
    type: "approved" as const,
  },
  {
    id: 7,
    action: "Booking Awarded",
    description: "Vendor notified and booking confirmed",
    user: "System",
    role: "Automated",
    timestamp: "Jan 10, 2024 at 4:16 PM",
    details: "Confirmation sent to Marriott International",
    type: "awarded" as const,
  },
];

const typeColors = {
  created: "bg-primary",
  quoted: "bg-muted-foreground",
  analyzed: "bg-warning",
  approved: "bg-success",
  awarded: "bg-success",
};

const typeIcons = {
  created: FileText,
  quoted: Send,
  analyzed: CheckCircle2,
  approved: CheckCircle2,
  awarded: Award,
};

export default function AuditTrail() {
  return (
    <div className="min-h-screen bg-background">
      <TopNavigation
        title="Audit Trail & Analytics"
        tabs={[
          { label: "RFQ Tracking", active: true },
          { label: "Audit Log" },
          { label: "Performance" },
          { label: "Reports" },
        ]}
        userRole="System Admin"
      />

      <main className="p-6 max-w-7xl mx-auto">
        <PageHeader
          title="RFQ-2024-001 Timeline"
          subtitle="Complete audit trail and processing history"
          actions={
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-2 bg-muted rounded-lg text-sm">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span className="text-foreground">Jan 1 - Jan 15, 2024</span>
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              </div>
            </div>
          }
        />

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <MetricCard
            title="Avg. Processing Time"
            value="2.4 days"
            icon={<Timer className="w-5 h-5" />}
            change={{ value: "-12% vs target", trend: "up" }}
          />
          <MetricCard
            title="Conversion Rate"
            value="68%"
            icon={<Percent className="w-5 h-5" />}
            change={{ value: "+5.2%", trend: "up" }}
          />
          <MetricCard
            title="Vendor Response Rate"
            value="92%"
            icon={<TrendingUp className="w-5 h-5" />}
            change={{ value: "+3%", trend: "up" }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Timeline */}
          <div className="lg:col-span-2 bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-foreground">Complete Timeline</h2>
              <span className="text-sm text-muted-foreground">7 events</span>
            </div>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-border" />

              <div className="space-y-6">
                {timelineEvents.map((event, index) => {
                  const IconComponent = typeIcons[event.type];
                  return (
                    <div key={event.id} className="relative flex gap-4">
                      {/* Icon */}
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 z-10 ${typeColors[event.type]}`}>
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 bg-muted/30 rounded-lg p-4 hover:bg-muted/50 transition-colors">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="text-sm font-semibold text-foreground">{event.action}</h4>
                            <p className="text-xs text-muted-foreground">{event.description}</p>
                          </div>
                          <span className="text-xs text-muted-foreground whitespace-nowrap ml-4">
                            {event.timestamp}
                          </span>
                        </div>

                        <div className="flex items-center gap-4 mt-3">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center">
                              <User className="w-3.5 h-3.5 text-muted-foreground" />
                            </div>
                            <div>
                              <p className="text-xs font-medium text-foreground">{event.user}</p>
                              <p className="text-xs text-muted-foreground">{event.role}</p>
                            </div>
                          </div>
                          {event.details && (
                            <div className="px-2 py-1 bg-background border border-border rounded text-xs text-muted-foreground">
                              {event.details}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Processing Summary */}
            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-center justify-between p-4 bg-success/5 border border-success/20 rounded-lg">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-success" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Total Processing Time</p>
                    <p className="text-xs text-muted-foreground">From creation to award</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-semibold text-success">2 days, 7 hours</p>
                  <p className="text-xs text-muted-foreground">Target: 3 days</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Sidebar */}
          <div className="space-y-6">
            {/* Event Type Legend */}
            <div className="bg-card border border-border rounded-lg p-5">
              <h3 className="text-base font-semibold text-foreground mb-4">Event Types</h3>
              <div className="space-y-3">
                {Object.entries(typeColors).map(([type, color]) => {
                  const IconComponent = typeIcons[type as keyof typeof typeIcons];
                  return (
                    <div key={type} className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${color}`}>
                        <IconComponent className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span className="text-sm text-foreground capitalize">{type}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-card border border-border rounded-lg p-5">
              <h3 className="text-base font-semibold text-foreground mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Quotes Received</span>
                  <span className="text-sm font-medium text-foreground">4 of 4</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Time to First Quote</span>
                  <span className="text-sm font-medium text-foreground">1 day, 1 hour</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Analysis Time</span>
                  <span className="text-sm font-medium text-foreground">4 hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Approval Time</span>
                  <span className="text-sm font-medium text-foreground">1.75 hours</span>
                </div>
              </div>
            </div>

            {/* Export Options */}
            <div className="bg-card border border-border rounded-lg p-5">
              <h3 className="text-base font-semibold text-foreground mb-4">Export</h3>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start gap-2">
                  <FileText className="w-4 h-4" />
                  Export as PDF
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2">
                  <FileText className="w-4 h-4" />
                  Export as CSV
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
