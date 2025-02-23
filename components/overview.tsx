"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Week 1",
    guest: 400,
    user: 500,
  },
  {
    name: "Week 2",
    guest: 350,
    user: 300,
  },
  {
    name: "Week 3",
    guest: 300,
    user: 200,
  },
  {
    name: "Week 4",
    guest: 320,
    user: 400,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
        <Bar dataKey="user" fill="#4CAF50" radius={[4, 4, 0, 0]} />
        <Bar dataKey="guest" fill="#FF6B6B" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

