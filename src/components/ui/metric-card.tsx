import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { ReactNode } from "react";

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: {
    value: string;
    trend: "up" | "down" | "neutral";
  };
  icon?: ReactNode;
  className?: string;
}

export function MetricCard({ title, value, change, icon, className }: MetricCardProps) {
  return (
    <div className={cn("bg-card border border-border rounded-lg p-5", className)}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-2xl font-semibold text-foreground mt-1">{value}</p>
          {change && (
            <div className="flex items-center gap-1 mt-2">
              {change.trend === "up" && <TrendingUp className="w-4 h-4 text-success" />}
              {change.trend === "down" && <TrendingDown className="w-4 h-4 text-destructive" />}
              {change.trend === "neutral" && <Minus className="w-4 h-4 text-muted-foreground" />}
              <span
                className={cn(
                  "text-sm font-medium",
                  change.trend === "up" && "text-success",
                  change.trend === "down" && "text-destructive",
                  change.trend === "neutral" && "text-muted-foreground"
                )}
              >
                {change.value}
              </span>
            </div>
          )}
        </div>
        {icon && (
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}
