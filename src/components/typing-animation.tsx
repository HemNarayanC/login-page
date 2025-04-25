import { useState, useEffect } from "react"

interface TypingAnimationProps {
  text: string
  speed?: number
}

export function TypingAnimation({ text, speed = 100 }: TypingAnimationProps) {
  const [typedText, setTypedText] = useState("")

  useEffect(() => {
    if (typedText.length < text.length) {
      const timeout = setTimeout(() => {
        setTypedText(text.substring(0, typedText.length + 1))
      }, speed)
      return () => clearTimeout(timeout)
    }
  }, [typedText, text, speed])

  return (
    <h2 className="text-2xl font-light mb-2">
      {typedText}
      <span className="animate-pulse">|</span>
    </h2>
  )
}
