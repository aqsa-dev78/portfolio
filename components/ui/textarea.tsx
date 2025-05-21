import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
     className={cn(
  "flex min-h-[80px] w-full rounded-md border border-[#001C17] bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#001C17] focus-visible:ring-offset-2 hover:border-[#001C17] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-colors duration-200",
  className
)}

      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
