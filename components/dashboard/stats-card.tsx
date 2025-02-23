import type { LucideIcon } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface StatsCardProps {
  title: string
  value: string
  icon: LucideIcon
  percentageChange: number
  className?: string
}

export function StatsCard({ title, value, icon: Icon, percentageChange, className }: StatsCardProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardContent className="p-6">
        <div className="flex justify-between">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold">{value}</p>
          </div>
          <div className="h-10 w-10 rounded-full bg-primary/10 p-2 text-primary">
            <Icon className="h-6 w-6" />
          </div>
        </div>
        <div className="mt-4 flex items-center gap-1 text-sm">
          <span className={cn("font-medium", percentageChange > 0 ? "text-green-500" : "text-red-500")}>
            {percentageChange > 0 ? "+" : ""}
            {percentageChange}%
          </span>
          <span className="text-muted-foreground">vs last month</span>
        </div>
      </CardContent>
    </Card>
  )
}

