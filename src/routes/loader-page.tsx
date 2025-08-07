import { cn } from "@/lib/utils";
import {Loader} from "lucide-react"
export const Loaderpage = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "w-screen h-screen flex items-center justify-center z-50 bg-transparent",
        className
      )}
    >
      <Loader className="w-6 h-6 min-h-6 min-w-6 animate-spin"/>
    </div>
  );
};
