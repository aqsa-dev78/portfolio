"use client"

import { useState, useEffect } from "react"
import ResumeModal from "./resume-modal"

export default function ResumeView() {
  const [isResumeOpen, setIsResumeOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Add event listeners to resume buttons
    const resumeButton = document.getElementById("resume-button")
    const mobileResumeButton = document.getElementById("mobile-resume-button")

    const handleResumeClick = (e: MouseEvent) => {
      e.preventDefault()
      setIsResumeOpen(true)
    }

    if (resumeButton) {
      resumeButton.addEventListener("click", handleResumeClick)
    }

    if (mobileResumeButton) {
      mobileResumeButton.addEventListener("click", handleResumeClick)
    }

    return () => {
      if (resumeButton) {
        resumeButton.removeEventListener("click", handleResumeClick)
      }

      if (mobileResumeButton) {
        mobileResumeButton.removeEventListener("click", handleResumeClick)
      }
    }
  }, [])

  if (!mounted) return null

  return (
    <>
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  )
}

