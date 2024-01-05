import { v4 as uuid } from "uuid";
import { fetchTasks } from "@/lib/data";

export class Board {
  #id: string | number = uuid();
  #title: string = "";
  #status: string = ""

  constructor(
    title: string,
    status: string
  ) {
    this.#title = title
    this.#status = status
  }

  public get Id(): string | number {
    return this.#id
  }

  public get Title(): string {
    return this.#title
  }

  public set Title(title: string) {
    this.#title = title 
  }

  public async loadTasks(url: string) {
    const tasks = await fetchTasks(url, this.#status)

    return tasks
  }

  /* public addTask(task: Task) {
    this.#tasks.push(task)
  }

  public removeTask(id: string | number) {
    this.#tasks = this.#tasks.filter(task => task.id !== id)
  } */
} 