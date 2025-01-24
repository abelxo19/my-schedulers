import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const timeSlots = ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM"]

const days = [
  { date: "04/01", day: "Mon" },
  { date: "05/01", day: "Tue" },
  { date: "06/01", day: "Wed" },
  { date: "07/01", day: "Thu" },
  { date: "08/01", day: "Fri" },
  { date: "09/01", day: "Sat" },
  { date: "10/01", day: "Sun" },
]

export function ScheduleCalendar() {
  return (
    <section className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Schedule Calendar</h2>
        <div className="flex items-center gap-4">
          <Button variant="outline">+ Add Deadline</Button>
        </div>
      </div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Jan 4 - 10, 2025</h3>
        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="icon">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <div className="border rounded-lg">
        <div className="grid grid-cols-8 border-b">
          <div className="p-4 border-r" />
          {days.map((day) => (
            <div key={day.date} className="p-4 text-center border-r last:border-r-0">
              <div className="text-sm text-gray-500">{day.day}</div>
              <div className="font-medium">{day.date}</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-8">
          <div className="border-r">
            {timeSlots.map((time) => (
              <div key={time} className="h-20 p-4 border-b last:border-b-0">
                <span className="text-sm text-gray-500">{time}</span>
              </div>
            ))}
          </div>
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className="border-r last:border-r-0">
              {timeSlots.map((_, j) => (
                <div key={j} className="h-20 p-2 border-b last:border-b-0 relative">
                  {Math.random() > 0.7 && (
                    <div className="absolute inset-2 bg-blue-100 rounded p-2">
                      <div className="text-sm font-medium">Subject</div>
                      <div className="text-xs text-gray-500">
                        {timeSlots[j]} - {timeSlots[j + 1] || "Next"}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

