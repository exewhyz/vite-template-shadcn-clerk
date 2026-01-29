import { cn } from "@/lib/utils";

function Spinner({ showIcon = true, showText = false, className }) {
  return (
    <div className="flex items-center justify-center h-full gap-1">
      {showIcon && (
        <div
          className={cn(
            "w-5 h-5 border border-b-2 border-blue-500 rounded-full animate-spin inline-block",
            className,
          )}
        />
      )}
      {showText && (
        <span className="animate-pulse text-sm text-primary">Loading...</span>
      )}
    </div>
  );
}

export default Spinner;
