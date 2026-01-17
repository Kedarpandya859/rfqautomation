import { TopNavigation } from "@/components/layout/TopNavigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { StatusBadge } from "@/components/ui/status-badge";
import { Button } from "@/components/ui/button";
import { 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  MessageSquare,
  MapPin,
  DollarSign,
  Building,
  Clock,
  Star,
  TrendingDown,
  Percent,
  User
} from "lucide-react";

const approvalHistory = [
  { user: "Sarah Chen", role: "Pricing Analyst", action: "Approved", time: "Jan 10, 2024 at 2:30 PM" },
];

const analysisChecks = [
  { label: "Price vs Market: 15% below average", passed: true },
  { label: "Vendor Performance: 4.8/5 rating", passed: true },
  { label: "Margin: 22% (Target: 20%)", passed: true },
];

export default function ApprovalWorkflow() {
  return (
    <div className="min-h-screen bg-background">
      <TopNavigation
        title="Approval Dashboard"
        subtitle="Sales Manager"
        tabs={[
          { label: "Pending Approval", active: true, badge: 3 },
          { label: "Approved" },
          { label: "Rejected" },
        ]}
        userRole="Sales Manager"
      />

      <main className="p-6 max-w-7xl mx-auto">
        <PageHeader
          title="Pending Your Approval"
          subtitle="3 requests awaiting your review"
        />

        {/* Approval Card */}
        <div className="bg-card border border-border rounded-lg overflow-hidden mb-6">
          {/* Header with urgency */}
          <div className="p-4 border-b border-border flex items-center justify-between bg-muted/30">
            <div className="flex items-center gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg font-semibold text-foreground">RFQ-2024-001</span>
                  <span className="px-2 py-0.5 bg-warning text-warning-foreground text-xs font-medium rounded-full flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3" />
                    Urgent
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    Dubai Marina, UAE
                  </span>
                  <span className="flex items-center gap-1">
                    <DollarSign className="w-4 h-4" />
                    $12,500
                  </span>
                </div>
              </div>
            </div>
            <StatusBadge status="pending" label="Awaiting Approval" />
          </div>

          <div className="p-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column - Details */}
              <div className="space-y-5">
                {/* Customer & Vendor Info */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">Customer</p>
                    <p className="text-sm font-medium text-foreground flex items-center gap-2">
                      <Building className="w-4 h-4" />
                      Acme Corporation
                    </p>
                  </div>
                  <div className="p-4 bg-success/5 border border-success/20 rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">Recommended Vendor</p>
                    <p className="text-sm font-medium text-success flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" />
                      Marriott International
                    </p>
                  </div>
                </div>

                {/* Previous Approval Trail */}
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-3">Approval Trail</h4>
                  <div className="space-y-2">
                    {approvalHistory.map((item, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                        <CheckCircle2 className="w-5 h-5 text-success shrink-0" />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground">{item.user}</p>
                          <p className="text-xs text-muted-foreground">{item.role}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-success font-medium">{item.action}</p>
                          <p className="text-xs text-muted-foreground">{item.time}</p>
                        </div>
                      </div>
                    ))}
                    <div className="flex items-center gap-3 p-3 border border-dashed border-border rounded-lg">
                      <div className="w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center">
                        <User className="w-3 h-3 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">You</p>
                        <p className="text-xs text-muted-foreground">Sales Manager</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-primary font-medium">Pending</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quote Summary */}
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-3">Quote Details</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-foreground rounded-full" />
                      25 Deluxe Rooms × 7 nights
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-foreground rounded-full" />
                      Breakfast & WiFi included
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-foreground rounded-full" />
                      Airport transfer for all guests
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-foreground rounded-full" />
                      Conference room (20 pax) included
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column - Analysis & Actions */}
              <div className="space-y-5">
                {/* Analysis Checks */}
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="text-sm font-medium text-foreground mb-3">Analysis</h4>
                  <div className="space-y-3">
                    {analysisChecks.map((check, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle2 className={`w-5 h-5 ${check.passed ? "text-success" : "text-destructive"}`} />
                        <span className="text-sm text-foreground">{check.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Comments */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Comments / Notes
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <textarea
                      rows={4}
                      placeholder="Add any comments or conditions for this approval..."
                      className="w-full pl-10 pr-4 py-2.5 bg-background border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button variant="destructive" className="flex-1 gap-2">
                    <XCircle className="w-4 h-4" />
                    Reject
                  </Button>
                  <Button className="flex-1 gap-2 bg-success hover:bg-success/90">
                    <CheckCircle2 className="w-4 h-4" />
                    Approve & Award
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Approval History Timeline */}
        <div className="bg-card border border-border rounded-lg p-5">
          <h3 className="text-base font-semibold text-foreground mb-4">Approval History</h3>
          <div className="relative">
            <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-border" />
            <div className="space-y-4">
              {[
                { action: "RFQ Created", user: "John Smith", time: "Jan 8, 2024 at 9:00 AM", type: "created" },
                { action: "Quotes Received (4)", user: "System", time: "Jan 9, 2024 at 3:45 PM", type: "quoted" },
                { action: "Pricing Analysis Complete", user: "Sarah Chen", time: "Jan 10, 2024 at 2:30 PM", type: "analyzed" },
                { action: "Awaiting Manager Approval", user: "Current", time: "Now", type: "pending" },
              ].map((event, index) => (
                <div key={index} className="flex items-start gap-4 relative">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 z-10 ${
                    event.type === "pending" ? "bg-primary" : "bg-success"
                  }`}>
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="flex-1 pb-4">
                    <p className="text-sm font-medium text-foreground">{event.action}</p>
                    <p className="text-xs text-muted-foreground">{event.user} · {event.time}</p>
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
