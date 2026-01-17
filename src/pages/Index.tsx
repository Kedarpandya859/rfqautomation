import { Link } from "react-router-dom";
import { 
  FileText, 
  Building2, 
  BarChart3, 
  CheckSquare, 
  History,
  ArrowRight,
  Layers
} from "lucide-react";

const wireframes = [
  {
    id: 1,
    title: "Sales Dashboard",
    subtitle: "RFQ Creation Screen",
    description: "Create and manage RFQs with customer details, travel dates, and vendor selection",
    icon: FileText,
    path: "/sales-dashboard",
    color: "bg-primary/10 text-primary",
  },
  {
    id: 2,
    title: "Vendor Portal",
    subtitle: "Quote Submission",
    description: "Active RFQs view with quote submission forms and deadline tracking",
    icon: Building2,
    path: "/vendor-portal",
    color: "bg-success/10 text-success",
  },
  {
    id: 3,
    title: "Pricing Dashboard",
    subtitle: "Quote Comparison",
    description: "Compare vendor quotes with analysis, pricing insights, and recommendations",
    icon: BarChart3,
    path: "/pricing-dashboard",
    color: "bg-warning/10 text-warning",
  },
  {
    id: 4,
    title: "Approval Workflow",
    subtitle: "Manager Review",
    description: "Approval interface with analysis checks, comments, and decision actions",
    icon: CheckSquare,
    path: "/approval-workflow",
    color: "bg-destructive/10 text-destructive",
  },
  {
    id: 5,
    title: "Audit Trail",
    subtitle: "Timeline & Analytics",
    description: "Complete RFQ timeline with events, metrics, and processing insights",
    icon: History,
    path: "/audit-trail",
    color: "bg-muted text-muted-foreground",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Layers className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-foreground">RFQ to Booking System</h1>
              <p className="text-sm text-muted-foreground">B2B SaaS Wireframes</p>
            </div>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            Low-fidelity wireframes for a Request for Quotation to Booking Automation System. 
            Designed for three user types: Sales Representatives, Pricing Analysts, and Vendor Partners.
          </p>
        </div>
      </header>

      {/* Wireframe Grid */}
      <main className="max-w-5xl mx-auto px-6 py-8">
        <h2 className="text-lg font-semibold text-foreground mb-6">Wireframes</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {wireframes.map((wireframe) => (
            <Link
              key={wireframe.id}
              to={wireframe.path}
              className="group bg-card border border-border rounded-lg p-5 hover:border-primary/50 hover:shadow-sm transition-all"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${wireframe.color}`}>
                  <wireframe.icon className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <div>
                      <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                        {wireframe.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">{wireframe.subtitle}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                    {wireframe.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer Info */}
        <div className="mt-10 pt-6 border-t border-border">
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>Sales Representative View</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success" />
              <span>Vendor Partner View</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-warning" />
              <span>Pricing Analyst View</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-destructive" />
              <span>Manager View</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
