import { Priority } from "@/types/task"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function priorityMapping(priority: Priority) {
  const mapping = {
    low: "Baixa",
    medium: "Média",
    high: "Alta"
  }

  return mapping[priority]
}

export function formatDate(time: Date) {
  const taskTime = new Date(time)

  if (taskTime && taskTime instanceof Date) {
    return taskTime.toLocaleDateString('pt-BR', { month: 'short', day: 'numeric' });
  } else {
    return "Date"
  } 
}