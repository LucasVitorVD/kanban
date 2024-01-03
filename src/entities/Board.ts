import { Task } from "@/types/task";

export class Board {
  #id: string | number = "";
  #name: string = ""
  #tasks: Task[] = []

  constructor(
    id: string | number,
    name: string
  ) {
    this.#id = id,
    this.#name = name
  }

  public get Id(): string | number {
    return this.#id
  }

  public get Name(): string {
    return this.#name
  }

  public set Name(name: string) {
    this.#name = name
  }

  public get Task(): Task[] {
    return this.#tasks
  }

  public addTask(task: Task) {
    this.#tasks.push(task)
  }

  public removeTask(id: string | number) {
    this.#tasks = this.#tasks.filter(task => task.id !== id)
  }
} 