"use server"

import { Task } from "@/types/task";
import { revalidateTag } from 'next/cache'

export async function fetchAddTask(task: Omit<Task, "id">) {

  try {
    await fetch("http://localhost:3004/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task)
    })

    revalidateTag("tasksByFilter")
  } catch (err) {
    throw new Error("Erro ao adicionar tarefa.")
  }
}