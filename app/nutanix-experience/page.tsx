"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function NutanixExperiencePage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to the home page with the hash fragment to open the modal
    router.replace("/#nutanix-detail")
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Redirecting to detailed Nutanix experience...</p>
    </div>
  )
}
