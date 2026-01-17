import { cn } from "@/lib/utils";

type Status = "pending" | "active" | "completed" | "rejected" | "draft" | "awarded";

interface StatusBadgeProps {
  status: Status;
  label?: string;
  className?: string;
}

const statusStyles: Record<Status, string> = {
  pending: "bg-warning/10 text-warning border-warning/20",
  active: "bg-primary/10 text-primary border-primary/20",
  completed: "bg-success/10 text-success border-success/20",
  rejected: "bg-destructive/10 text-destructive border-destructive/20",
  draft: "bg-muted text-muted-foreground border-border",
  awarded: "bg-success/10 text-success border-success/20",
};

const statusLabels: Record<Status, string> = {
  pending: "Pending",
  active: "Active",
  completed: "Completed",
  rejected: "Rejected",
  draft: "Draft",
  awarded: "Awarded",
};

export function StatusBadge({ status, label, className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
        statusStyles[status],
        className
      )}
    >
      {label || statusLabels[status]}
    </span>
  );
}
