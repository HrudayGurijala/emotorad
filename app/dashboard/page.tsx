"use client"

import { DollarSign, Users, Activity, CreditCard, Plus, Search, Bell } from "lucide-react"

import { Card } from "@/components/ui/card"
import { Overview } from "@/components/dashboard/overview"
import { RecentSales } from "@/components/dashboard/recent-sales"
import { StatsCard } from "@/components/dashboard/stats-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-[200px] pl-8"
            />
          </div>
          <Button variant="ghost" size="icon" className="hover:bg-gray-100">
            <Bell className="h-5 w-5" />
          </Button>
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard title="Total Revenue" value="$2,129,430" icon={DollarSign} percentageChange={2.5} />
        <StatsCard title="Total Transactions" value="1,520" icon={CreditCard} percentageChange={1.7} />
        <StatsCard title="Active Users" value="9,721" icon={Users} percentageChange={4.2} />
        <StatsCard title="Total Users" value="9,721" icon={Activity} percentageChange={4.2} />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
        <Card className="col-span-2">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Activities</h3>
              <div className="text-sm text-muted-foreground">May - June 2021</div>
            </div>
            <Overview />
          </div>
        </Card>
        <Card>
          <div className="p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Top Products</h3>
              <div className="text-sm text-muted-foreground">May - June 2021</div>
            </div>
            <RecentSales />
          </div>
        </Card>
        <Card>
          <div className="flex items-center justify-center h-full min-h-[300px] p-6">
            <Button variant="ghost" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground">
              <Plus className="h-8 w-8" />
              <span className="text-lg">Add Profile</span>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}