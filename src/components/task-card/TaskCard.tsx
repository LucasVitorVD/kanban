import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Task } from "@/types/task";
import { priorityMapping, formatDate } from "@/lib/utils";

interface Props {
  task: Task
}

export default async function TaskCard({ task }: Props) {
  return (
    <Card className="hover:border-blue-400">
      <CardHeader className="flex items-start">
        <Badge variant={task.priority}>{priorityMapping(task.priority)}</Badge>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <Sheet>
            <SheetTrigger asChild>
              <p className="cursor-pointer hover:underline">
                {task.content}
              </p>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
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
