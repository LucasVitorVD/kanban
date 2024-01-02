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

interface Props {
  title: string;
  children?: React.ReactNode;
}

export default function Board({ title, children }: Props) {
  return (
    <Card className="flex flex-col border rounded border-gray-400 col-auto">
      <CardHeader>
        <CardTitle className="font-medium text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4">
        {children}
      </CardContent>
      <CardFooter>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost">Adicionar</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Adicionar tarefa</SheetTitle>
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
