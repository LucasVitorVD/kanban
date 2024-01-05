import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs capitalize transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        low:
          "border-transparent bg-badge-low text-secondary-foreground rounded-full hover:bg-badge-low/80",
        medium:
          "border-transparent bg-badge-medium text-destructive-foreground rounded-full shadow hover:bg-badge-medium/80",
        high:
          "border-transparent bg-badge-high text-destructive-foreground rounded-full shadow hover:bg-badge-high/80",
        mobile:
          "border-transparent bg-badge-mobile text-destructive-foreground shadow hover:bg-badge-mobile/80",
        web:
          "border-transparent bg-badge-web text-destructive-foreground shadow hover:bg-badge-web/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
