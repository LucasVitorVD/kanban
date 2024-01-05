export enum Priority {
  LOW = "low",
  MEDIUM = "medium",
  HIGH = "high"
}

export enum Status {
  TODO = "todo",
  IN_PROGRESS = "in progress",
  DONE = "done"
}

export enum Devices {
  MOBILE = "mobile",
  WEB = "web"
}

export interface Task {
  id: string | number,
  priority: Priority,
  content: string,
  devices?: Devices[],
  status: Status,
  time: Date,
  boardId: string
}