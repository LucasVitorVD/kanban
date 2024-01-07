import TaskCard from "@/components/task-card/TaskCard";
import { CardContent } from "@/components/ui/card";
import { fetchTasksByStatus } from "@/lib/data";
import { Task, Status } from "@/types/task";

interface Props {
  boardStatus: Status
}

export default async function Content({ boardStatus }: Props) {
  const tasks: Task[] = await fetchTasksByStatus(boardStatus)

  return (
    <CardContent className="flex flex-1 flex-col gap-4">
      {tasks && tasks.length > 0 ? (
        tasks.map((task) => <TaskCard key={task.id} task={task} />)
      ) : (
        <p>Sem tarefas</p>
      )}
    </CardContent>
  );
}
