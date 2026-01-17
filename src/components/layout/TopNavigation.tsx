import { Bell, Search, User, ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TopNavigationProps {
  title: string;
  subtitle?: string;
  tabs: { label: string; active?: boolean; badge?: number }[];
  userRole?: string;
}

export function TopNavigation({ title, subtitle, tabs, userRole = "User" }: TopNavigationProps) {
  return (
    <header className="bg-card border-b border-border">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-border">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">RQ</span>
            </div>
            <span className="font-semibold text-foreground">{title}</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative hidden md:flex">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-9 pr-4 py-2 bg-muted border border-border rounded-lg text-sm w-64 focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>

          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-5 h-5 text-muted-foreground" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-destructive text-destructive-foreground text-xs rounded-full flex items-center justify-center">
              3
            </span>
          </Button>

          {/* User menu */}
          <div className="flex items-center gap-2 pl-4 border-l border-border">
            <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium text-foreground">{userRole}</p>
              <p className="text-xs text-muted-foreground">Online</p>
            </div>
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          </div>
        </div>
      </div>

      {/* Navigation tabs */}
      <nav className="flex items-center gap-1 px-6 py-2">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-lg transition-colors relative",
              tab.active
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            )}
          >
            {tab.label}
            {tab.badge && (
              <span className="ml-2 px-1.5 py-0.5 bg-destructive text-destructive-foreground text-xs rounded-full">
                {tab.badge}
              </span>
            )}
          </button>
        ))}
      </nav>
    </header>
  );
}
