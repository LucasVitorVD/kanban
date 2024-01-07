import Board from "@/components/board/Board";
import { Board as IBoard } from "@/types/board";
import { v4 as uuid } from "uuid";

export default async function Home() {
  const boards: IBoard[] = [
    {
      id: uuid(),
      title: "TODO",
      status: "todo"
    },
    {
      id: uuid(),
      title: "EM PROGRESSO",
      status: "in_progress"
    },
    {
      id: uuid(),
      title: "FEITO",
      status: "done"
    } 
  ]

  return (
    <section className="grid grid-cols-3 gap-4 w-full">
      {boards.map((board) => (
        <Board key={board.id} board={board} />
      ))}
    </section>
  );
}
