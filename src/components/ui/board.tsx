interface Props {
  children: React.ReactNode
}

export default function Board({ children }: Props) {
  return (
    <div className="border rounded border-gray-400 col-auto p-4">
      {children}
    </div>
  )
}
