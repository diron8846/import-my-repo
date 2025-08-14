import { Book, Cross } from "lucide-react"

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
        <Book className="w-6 h-6 text-secondary absolute" />
        <Cross className="w-4 h-4 text-secondary relative z-10" />
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold text-primary">Hope For Life</span>
        <span className="text-sm text-muted-foreground">Ministry</span>
      </div>
    </div>
  )
}