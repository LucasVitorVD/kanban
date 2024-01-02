import TaskCard from "@/components/task-card/TaskCard";
import Board from "@/components/ui/board";

export default function TodoBoard() {
  return (
    <Board>
      <p className="font-medium text-base">FAZER</p>
      <div className="flex flex-col gap-4 mt-4">
        <TaskCard />
      </div>
    </Board>
  );
}
