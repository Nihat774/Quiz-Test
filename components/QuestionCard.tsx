type Props = {
  question: string
}

function QuestionCard({ question }: Props) {
  return (
    <div className="bg-slate-800 p-6 text-white rounded-2xl mb-6">

      <h2 className="text-2xl font-semibold">
        {question}
      </h2>

    </div>
  )
}

export default QuestionCard