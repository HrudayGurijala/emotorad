// components/dashboard/sidebar.tsx
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, Clock, HelpCircle, LayoutDashboard, MessageSquare, Settings, Users } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const sidebarLinks = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    title: "Transactions",
    icon: BarChart3,
    href: "/dashboard",
  },
  {
    title: "Schedules",
    icon: Clock,
    href: "/dashboard",
  },
  {
    title: "Users",
    icon: Users,
    href: "/dashboard",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/dashboard",
  },
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar className="p-3">
      <SidebarHeader>
        <h1 className="text-3xl font-bold">Board.</h1>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarMenu>
          {sidebarLinks.map((link) => {
            const Icon = link.icon
            return (
              <SidebarMenuItem key={link.href}>
                <SidebarMenuButton asChild isActive={pathname === link.href}>
                  <Link href={link.href} className="flex items-center gap-3 w-full">
                    <Icon className="h-5 w-5" />
                    <span>{link.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarContent>
      
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <HelpCircle className="h-5 w-5" />
              <span>Help</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <MessageSquare className="h-5 w-5" />
              <span>Contact Us</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}