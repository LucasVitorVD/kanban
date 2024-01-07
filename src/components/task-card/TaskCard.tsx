"use client"

import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Task } from "@/types/task";
import { priorityMapping, formatDate } from "@/lib/utils";
import TaskForm from "@/components/form/TaskForm";
import { useState } from "react";

interface Props {
  task: Task
}

export default function TaskCard({ task }: Props) {
  const [showSheet, setShowSheet] = useState(false)

  return (
    <Card className="hover:border-blue-400">
      <CardHeader className="flex items-start">
        <Badge variant={task.priority}>{priorityMapping(task.priority)}</Badge>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <Sheet open={showSheet} onOpenChange={setShowSheet}>
            <SheetTrigger asChild>
              <p className="cursor-pointer hover:underline">
                {task.content}
              </p>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Editar tarefa</SheetTitle>
                <SheetDescription>
                  Edite os dados da tarefa aqui. Clique em &ldquo;Salvar&rdquo; quando acabar.
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <TaskForm payload={task} setShowSheet={setShowSheet} />
              </div>
            </SheetContent>
          </Sheet>

          <div className="space-x-4">
            {task.devices && task.devices?.map((device, i) => (
              <Badge key={i} variant={device}>{device}</Badge>  
            ))}
          </div>

          <p className="text-muted-foreground">{formatDate(task.time)}</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </CardFooter>
    </Card>
  );
}
