"use client"

export function Tab() {
  return (
    <div className="flex border-b-2 my-2">
      <div className="py-2 px-6 hover:bg-card rounded-t-lg">All</div>
      <div className="py-2 px-6 hover:bg-card rounded-t-lg">WhatsApp</div>
      <div className="py-2 px-6 hover:bg-card rounded-t-lg">Slack</div>
      <div className="py-2 px-6 hover:bg-card rounded-t-lg">LinkedIn</div>
    </div>
  )
}
