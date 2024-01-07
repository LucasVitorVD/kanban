import { Status } from "./task"

export interface Board {
  id: string | number
  title: string
  status: Status
}