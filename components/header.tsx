import Image from "next/image"
import { Bell } from "lucide-react"

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 relative">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZpgmjUrRt8vPnauKlg60reKmDDmmIh.png"
            alt="Logo"
            width={48}
            height={48}
            className="object-contain"
          />
        </div>
        <h1 className="text-2xl font-bold text-[#00008B]">Personalized Study Planner</h1>
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

