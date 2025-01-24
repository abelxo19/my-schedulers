import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { UpcomingSchedules } from "@/components/upcoming-schedules"
import { ScheduleCalendar } from "@/components/schedule-calendar"

export default function Page() {
  return (
    <>
      <Sidebar />
      <main className="flex-1">
        <Header />
        <UpcomingSchedules />
        <ScheduleCalendar />
      </main>
    </>
  )
}

