import { Priority, Devices, Status } from "@/types/task"

export class Task {
  #id: string | number = "";
  #priority: Priority = Priority.LOW;
  #content: string = "";
  #devices: Devices[] = [];
  #status: Status = Status.TODO;  
  static time: Date = new Date();

  constructor(
    id: string | number,
    priority: Priority,
    content: string,
    devices: Devices[],
  ) {
    this.#id = id,
    this.#priority = priority,
    this.#content = content,
    this.#devices = devices
  }

  public get Id() {
    return this.#id
  }

  public get Priority() {
    return this.#priority
  }

  public set Priority(priority: Priority) {
    this.#priority = priority
  }

  public get Content() {
    return this.#content
  }

  public set Content(content: string) {
    this.#content = content
  }

  public get Devices() {
    return this.#devices
  }

  public set Devices(devices: Devices[]) {
    this.#devices = devices
  }
}