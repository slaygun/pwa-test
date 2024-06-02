import { useState } from "react"

export default function Component() {
  const [fortune, setFortune] = useState("")
  const [isShaking, setIsShaking] = useState(false)
  const fortunes = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes, definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Cannot predict now",
    "Don't count on it",
    "My reply is no",
    "Outlook not so good",
    "Very doubtful",
  ]
  const handleShake = () => {
    setIsShaking(true)
    setTimeout(() => {
      setIsShaking(false)
      setFortune(fortunes[Math.floor(Math.random() * fortunes.length)])
    }, 1000)
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <h1 className="fixed top-4 left-1/2 -translate-x-1/2 text-4xl font-extrabold mb-8 text-gray-50"> Magic 8 Ball</h1>
      <div
        className={`bg-white rounded-full shadow-lg p-8 cursor-pointer transition-transform duration-1000 ease-in-out transform-gpu hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:bg-gray-800 dark:text-gray-50 dark:focus-visible:ring-gray-300 ${
          isShaking ? "animate-shake" : ""
        }`}
        onClick={handleShake}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleShake()
          }
        }}
        role="button"
        tabIndex={0}
      >
        <div className="flex items-center justify-center w-40 h-40 rounded-full bg-gray-900 text-white text-6xl font-bold">
          8
        </div>
      </div>
      {fortune && <div className="absolute bottom-8 text-center text-gray-50 text-lg font-medium">{fortune}</div>}
    </div>
  )
}