import DoneBoard from "@/components/boards/done/Done";
import InProgressBoard from "@/components/boards/in-progress/InProgress";
import TodoBoard from "@/components/boards/todo/Todo";

export default function Home() {
  return (
    <section className="grid grid-cols-3 gap-4 w-full">
      <TodoBoard />
      <InProgressBoard />
      <DoneBoard />
    </section>
  );
}