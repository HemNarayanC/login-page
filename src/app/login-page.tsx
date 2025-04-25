"use client"

import { LoginForm } from "@/components/login-form"
import { ParticleBackground } from "@/components/particle-background"
import { TypingAnimation } from "@/components/typing-animation"
// import { GridOverlay } from "@/components/grid-overlay"

export default function LoginPage() {
  return (
    <div className="min-h-screen w-full bg-[#0A0A0A] font-sans text-white relative overflow-hidden flex items-center justify-center">
      {/* Particle background */}
      <ParticleBackground />

      {/* Grid lines */}
      {/* <GridOverlay /> */}

      {/* Abstract background image */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://readdy.ai/api/search-image?query=abstract%20futuristic%20technology%20background%20with%20blue%20circuit%20patterns%20and%20digital%20nodes%2C%20dark%20theme%20with%20glowing%20blue%20elements%2C%20tech%20grid%20pattern%20with%20data%20visualization%20elements%2C%20high%20quality%20digital%20art&width=1920&height=1080&seq=1&orientation=landscape"
          alt="Tech Background"
          className="w-full h-full object-cover object-top"
        />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center justify-center">
          {/* Logo and Header */}
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center mb-2">
              <div className="text-4xl text-blue-500 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8"
                >
                  <path d="m21 16-4 4-4-4" />
                  <path d="M17 20V4" />
                  <path d="m3 8 4-4 4 4" />
                  <path d="M7 4v16" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                TECH SPHERE
              </h1>
            </div>
            <div className="h-8">
              <TypingAnimation text="Welcome to the future of technology" />
            </div>
            <p className="text-gray-400 max-w-md">Access your dashboard with secure login</p>
          </div>

          {/* Login Form */}
          <LoginForm />

          {/* Security Badge */}
          <div className="mt-8 flex items-center justify-center text-gray-500 text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 mr-2"
            >
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span>Secure login • SSL encrypted • Last updated: April 25, 2025</span>
          </div>
        </div>
      </div>
    </div>
  )
}
