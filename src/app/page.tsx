import Board from "@/components/ui/board";
import { Board as BoardTask } from "@/entities/Board";

export default async function Home() {
  const todoBoard = new BoardTask("TODO", "todo");
  const inProgressBoard = new BoardTask("EM PROGRESSO", "in_progress");
  const doneBoard = new BoardTask("FEITO", "done");

  const boards = [todoBoard, inProgressBoard, doneBoard];

  return (
    <section className="grid grid-cols-3 gap-4 w-full">
      {boards.map((board) => (
        <Board key={board.Id} board={board} />
      ))}
    </section>
  );
}
