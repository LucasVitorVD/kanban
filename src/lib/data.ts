import { Task } from "@/types/task"

export async function fetchTasks(url: string, status: string) {
  try {
    const res = await fetch(`${url}?status=${status}`, { cache: 'no-store' })
    const data: Task[] = await res.json()

    return data
  } catch (error) {
    console.log(error)
  }
}