import Image from "next/image"
import { Bell } from "lucide-react"
import Logo from '../public/logo_s.png'

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 relative">
          <Image
            src={Logo}
            alt="Logo"
            className="ml-[-250px] w-24 h-14 "
          />
        </div>
        <h1 className="text-2xl font-bold text-[#01135B] ml-[-245px]">Personalized Study Planner</h1>
      </div>
      <div className="flex items-center gap-4">
        <button className="relative">
          <Bell className="w-6 h-6 text-gray-600" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" />
        </button>
        <div className="flex items-center gap-3">
          <Image src="/placeholder.svg" alt="Profile picture" width={40} height={40} className="rounded-full" />
          <span className="font-medium">Sarah Martins</span>
        </div>
      </div>
    </header>
  )
}

