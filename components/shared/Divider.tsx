import { cn } from "@/lib/utils";

interface DividerProps {
  className?: string;
}

export default function Divider({ className }: Readonly<DividerProps>) {
  return (
    <div
      className={cn(
        "w-full h-0.5 bg-linear-to-r from-transparent via-indigo-500 to-transparent my-2",
        className,
      )}
    />
  );
}
