import TaskCard from "@/components/task-card/TaskCard";
import Board from "@/components/ui/board";

export default function TodoBoard() {
  return (
    <Board title="FAZER">
      <TaskCard />
    </Board>
  );
}
