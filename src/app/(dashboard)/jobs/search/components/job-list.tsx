import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Job } from "@/app/data/job_data"
import { useJob } from "@/app/(dashboard)/jobs/search/use-job"

interface JobListProps {
  items: Job[]
}

export function JobList({ items }: JobListProps) {
  const [job, setJob] = useJob()

  return (
    <ScrollArea className="h-[400px] ">
      <div className="flex flex-col gap-2 p-4 pt-0">
        {items.map((item) => (
          <button
            key={item.id}
            className={cn(
              "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
              job.selected === item.id && "bg-muted"
            )}
            onClick={() =>
              setJob({
                ...job,
                selected: item.id,
              })
            }
          >
            <div className="flex w-full flex-col gap-1">
              <div className="flex items-center">
                <div className="flex items-center gap-2">
                  <div className="font-semibold">{item.title}</div>
                  {!item.saved && (
                    <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                  )}
                </div>
                <div
                  className={cn(
                    "ml-auto text-xs",
                    job.selected === item.id
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                </div>
              </div>
              <div className="text-xs font-medium">{item.companyName}</div>
            </div>
            <div className="line-clamp-2 text-xs text-muted-foreground">
              {item.description.substring(0, 300)}
            </div>
            {item.labels.length ? (
              <div className="flex items-center gap-2">
                {item.labels.map((label) => (
                  <Badge key={label}>
                    {label}
                  </Badge>
                ))}
              </div>
            ) : null}
          </button>
        ))}
      </div>
    </ScrollArea>
  )
}
