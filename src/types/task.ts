import type { taskFormSchema } from "@/schemas/taskFormSchema"

export type Priority = "low" | "medium" | "high"

export type Device = "web" | "mobile"

export type Status = "todo" | "in_progress" | "done"

export interface Task extends taskFormSchema {
  id: string | number,
  status: Status,
  time: Date
}