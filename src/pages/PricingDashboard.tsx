import { TopNavigation } from "@/components/layout/TopNavigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { StatusBadge } from "@/components/ui/status-badge";
import { Button } from "@/components/ui/button";
import { 
  Download, 
  Star, 
  Lightbulb, 
  ChevronDown,
  Clock,
  MapPin,
  MessageSquare,
  Send,
  RotateCcw,
  TrendingDown,
  TrendingUp,
  Minus,
  CheckCircle2
} from "lucide-react";

const quotes = [
  {
    vendor: "Marriott International",
    totalPrice: 12500,
    pricePerGuest: 500,
    rating: 4.8,
    isValid: true,
    isBest: true,
  },
  {
    vendor: "Hilton Hotels",
    totalPrice: 13200,
    pricePerGuest: 528,
    rating: 4.6,
    isValid: true,
    isBest: false,
  },
  {
    vendor: "Hyatt Hotels",
    totalPrice: 14100,
    pricePerGuest: 564,
    rating: 4.5,
    isValid: true,
    isBest: false,
  },
  {
    vendor: "Four Seasons",
    totalPrice: 18500,
    pricePerGuest: 740,
    rating: 4.9,
    isValid: false,
    isBest: false,
  },
];

export default function PricingDashboard() {
  const avgPrice = quotes.reduce((sum, q) => sum + q.totalPrice, 0) / quotes.length;
  const minPrice = Math.min(...quotes.map(q => q.totalPrice));
  const maxPrice = Math.max(...quotes.map(q => q.totalPrice));

  return (
    <div className="min-h-screen bg-background">
      <TopNavigation
        title="Pricing Dashboard"
        tabs={[
          { label: "Pending Review", active: true, badge: 8 },
          { label: "Approved" },
          { label: "Analytics" },
        ]}
        userRole="Pricing Analyst"
      />

      <main className="p-6 max-w-7xl mx-auto">
        <PageHeader
          title="Quote Comparison"
          subtitle="Compare and analyze vendor quotes for RFQ-2024-001"
          actions={
            <Button variant="outline" className="gap-2">
              <Download className="w-4 h-4" />
              Export to Excel
            </Button>
          }
        />

        {/* RFQ Details */}
        <div className="bg-card border border-border rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-6">
              <div>
                <p className="text-xs text-muted-foreground">RFQ Number</p>
                <p className="text-sm font-semibold text-foreground">RFQ-2024-001</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Destination</p>
                <p className="text-sm font-medium text-foreground flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  Dubai Marina, UAE
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Status</p>
                <StatusBadge status="pending" label="Awaiting Approval" />
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              Deadline: Jan 12, 2024 at 5:00 PM
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Quote Comparison Table */}
          <div className="lg:col-span-2 bg-card border border-border rounded-lg overflow-hidden">
            <div className="p-4 border-b border-border">
              <h2 className="text-lg font-semibold text-foreground">Vendor Quotes</h2>
              <p className="text-sm text-muted-foreground">4 quotes received</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Vendor
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Total Price
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Per Guest
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Rating
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {quotes.map((quote, index) => (
                    <tr 
                      key={quote.vendor}
                      className={quote.isBest ? "bg-success/5" : "hover:bg-muted/50"}
                    >
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2">
                          {quote.isBest && (
                            <span className="px-1.5 py-0.5 bg-success text-success-foreground text-xs font-medium rounded">
                              BEST
                            </span>
                          )}
                          <span className="text-sm font-medium text-foreground">{quote.vendor}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <span className={`text-sm font-semibold ${quote.isBest ? "text-success" : "text-foreground"}`}>
                          ${quote.totalPrice.toLocaleString()}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <span className="text-sm text-muted-foreground">
                          ${quote.pricePerGuest}/guest
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-warning fill-warning" />
                          <span className="text-sm text-foreground">{quote.rating}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        {quote.isValid ? (
                          <span className="flex items-center gap-1 text-sm text-success">
                            <CheckCircle2 className="w-4 h-4" />
                            Valid
                          </span>
                        ) : (
                          <span className="text-sm text-destructive">Expired</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 border-t border-border">
              <button className="text-sm text-primary hover:underline flex items-center gap-1">
                View Detailed Comparison
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Analysis & Recommendation */}
          <div className="space-y-6">
            {/* Analysis Summary */}
            <div className="bg-card border border-border rounded-lg p-5">
              <h3 className="text-base font-semibold text-foreground mb-4">Analysis Summary</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Average Price</span>
                  <span className="text-sm font-medium text-foreground">
                    ${avgPrice.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Price Range</span>
                  <span className="text-sm font-medium text-foreground">
                    ${minPrice.toLocaleString()} - ${maxPrice.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Variance</span>
                  <div className="flex items-center gap-1 text-warning">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-medium">48%</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex items-start gap-2 p-3 bg-primary/5 border border-primary/20 rounded-lg">
                  <Lightbulb className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Automated Recommendation</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Marriott offers the best value with competitive pricing and high vendor rating.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recommendation Panel */}
            <div className="bg-card border border-border rounded-lg p-5">
              <h3 className="text-base font-semibold text-foreground mb-4">Recommendation</h3>
              
              <div className="p-4 bg-success/5 border border-success/20 rounded-lg mb-4">
                <p className="text-sm font-medium text-foreground">Recommended Vendor</p>
                <p className="text-lg font-semibold text-success mt-1">Marriott International</p>
                <p className="text-xs text-muted-foreground mt-2">
                  Best price-to-quality ratio with 15% below market average
                </p>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Analyst Notes
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <textarea
                    rows={3}
                    placeholder="Add your analysis notes..."
                    className="w-full pl-10 pr-4 py-2.5 bg-background border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Button variant="outline" className="gap-2 w-full">
                  <RotateCcw className="w-4 h-4" />
                  Request Revision
                </Button>
                <Button className="gap-2 w-full">
                  <Send className="w-4 h-4" />
                  Send for Approval
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
