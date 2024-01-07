import { Task } from "@/types/task"

const url = "http://localhost:3004/tasks"

export async function fetchTasks() {
  try {
    const res = await fetch(url, { next: { tags: ['allTasks'] }})
    const data: Task[] = await res.json()

    return data
  } catch (error) {
    throw new Error("Erro ao buscar as tarefas.")
  }
}

export async function fetchTasksByStatus(status: string) {
  try {
    const res = await fetch(`${url}?status=${status}`, { next: { tags: ['tasksByFilter'] }})
    const data: Task[] = await res.json()

    return data
  } catch (error) {
    throw new Error("Erro ao buscar as tarefas.")
  }
}