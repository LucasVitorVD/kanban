import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "./button";
import { 
  Sheet, 
  SheetTrigger, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetDescription, 
  SheetFooter, 
  SheetClose 
} from "@/components/ui/sheet";
import TaskCard from "../task-card/TaskCard";
import { Board } from "@/types/board";
import { Suspense } from "react";

interface Props {
  board: Board
}

export default async function Board({ board }: Props) {
  const url = "http://localhost:3004/tasks"
  const tasks = await board.loadTasks(url)

  return (
    <Card className="flex flex-col border rounded border-gray-400 col-auto">
      <CardHeader>
        <CardTitle className="font-medium text-base">{board.Title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4">
        {tasks && tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskCard 
              key={task.id}
              task={task}
            />
          ))
        ) : (
          <p>Sem tarefas</p>
        )}
      </CardContent>
      <CardFooter>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost">Adicionar</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Adicionar tarefa ({board.Title})</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when youre done.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4"></div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </CardFooter>
    </Card>
  )
}
