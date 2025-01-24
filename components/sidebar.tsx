import Link from "next/link"
import { Home, BookOpen, Calendar, LineChart, HelpCircle, LogOut } from "lucide-react"

const navItems = [
  { name: "Home", icon: Home, href: "/" },
  { name: "Course Management", icon: BookOpen, href: "/courses" },
  { name: "Scheduling", icon: Calendar, href: "/schedule" },
  { name: "Progress", icon: LineChart, href: "/progress" },
  { name: "Get Help", icon: HelpCircle, href: "/help" },
  { name: "Sign Out", icon: LogOut, href: "/signout" },
]

export function Sidebar() {
  return (
    <aside className="w-64 bg-[#A38901] text-white mt-20">
      <nav className="flex flex-col gap-2 p-4">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors
              ${item.name === "Scheduling" ? "bg-white/20" : ""}`}
          >
            <item.icon className="w-5 h-5" />
            <span className="text-sm font-medium">{item.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  )
}

