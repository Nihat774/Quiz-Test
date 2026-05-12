type Props = {
  text: string
  onClick: () => void
  className?: string
}

function AnswerButton({ text, onClick, className }: Props) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full
        p-4
        rounded-xl
        text-left
        duration-300
        text-white
        cursor-pointer
        ${className || "bg-gray-300  hover:bg-gray-400"}
      `}
    >
      {text}
    </button>
  )
}

export default AnswerButton