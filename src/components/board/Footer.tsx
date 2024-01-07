"use client"

import { useState } from "react";
import { Board } from "@/types/board";
import TaskForm from "@/components/form/TaskForm";
import { Button } from "@/components/ui/button";
import { 
  Sheet, 
  SheetTrigger, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetDescription
} from "@/components/ui/sheet";
import { Status } from "@/types/task";

interface Props {
  boardTitle: string,
  boardStatus: Status
}

export default function Footer({ boardTitle, boardStatus }: Props) {
  const [showSheet, setShowSheet] = useState(false)

  return (
    <>
      <Sheet open={showSheet} onOpenChange={setShowSheet}>
        <SheetTrigger asChild>
          <Button variant="ghost">
            Adicionar
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Adicionar tarefa ({boardTitle})</SheetTitle>
            <SheetDescription>
              Informe os dados da tarefa aqui.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <TaskForm setShowSheet={setShowSheet} boardStatus={boardStatus} />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
