import TaskCard from "@/components/task-card/TaskCard";
import Board from "@/components/ui/board";

export default async function TodoBoard() {
  return (
    <Board title="FAZER">
      <TaskCard />
    </Board>
  );
}
