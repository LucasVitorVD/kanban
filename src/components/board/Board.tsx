import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Board } from "@/types/board";
import { Suspense } from "react";
import Content from "./Content";
import Footer from "./Footer";

interface Props {
  board: Board
}

export default function Board({ board }: Props) {
  return (
    <Card className="flex flex-col border rounded border-gray-400 col-auto">
      <CardHeader>
        <CardTitle className="font-medium text-base">{board.title}</CardTitle>
      </CardHeader>
        <Suspense>
          <Content boardStatus={board.status} />
        </Suspense>
      <CardFooter>
        <Footer boardTitle={board.title} boardStatus={board.status} />
      </CardFooter>
    </Card>
  )
}
