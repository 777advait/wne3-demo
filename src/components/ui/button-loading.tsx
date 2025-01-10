import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ButtonLoading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Button className={className} disabled>
      <Loader2 className="animate-spin" />
      {children}
    </Button>
  );
}
