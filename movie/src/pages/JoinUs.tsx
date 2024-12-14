'use client'

import { useState } from 'react'
import { GridBackgroundDemo } from '../components/GridBackgroundDemo'
import { BackgroundLinesDemo } from '../components/BackgroundLinesDemo'

export default function JoinUs() {
  const [activeTab, setActiveTab] = useState('login')

  return (
    <div className="bg-black">
      <div className="relative h-screen w-full">
        <div className="fixed top-0 left-0 right-0 bottom-0 z-0">
          <GridBackgroundDemo />
        </div>
        <div className="fixed top-0 left-0 right-0 bottom-0 z-0">
          <BackgroundLinesDemo />
        </div>
        
        {/* Auth form */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="w-[400px] bg-black/90 text-gray-100 shadow-lg rounded-lg border border-[#ffd700] backdrop-blur-sm">
            <div className="flex bg-black/95">
              <button
                className={`w-1/2 px-3 py-2 text-center text-sm font-medium transition-all ${
                  activeTab === 'login'
                    ? 'border-b-2 border-[#ffd700] text-[#ffd700]'
                    : 'text-gray-400 hover:text-[#ffd700]'
                }`}
                onClick={() => setActiveTab('login')}
              >
                Login
              </button>
              <button
                className={`w-1/2 px-3 py-2 text-center text-sm font-medium transition-all ${
                  activeTab === 'signup'
                    ? 'border-b-2 border-[#ffd700] text-[#ffd700]'
                    : 'text-gray-400 hover:text-[#ffd700]'
                }`}
                onClick={() => setActiveTab('signup')}
              >
                Sign Up
              </button>
            </div>
            <div className="p-6 bg-black/95">
              {activeTab === 'login' ? (
                <form className="space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-lg font-semibold text-white">Login</h2>
                    <p className="text-sm text-gray-400">
                      Enter your credentials to access your account.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium leading-none text-gray-200">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-800/90 px-3 py-2 text-sm text-gray-100 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd700] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="password" className="text-sm font-medium leading-none text-gray-200">
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-800/90 px-3 py-2 text-sm text-gray-100 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd700] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd700] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#ffd700] text-black hover:bg-[#ffd700]/90 h-10 px-4 py-2 w-full"
                  >
                    Login
                  </button>
                </form>
              ) : (
                <form className="space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-lg font-semibold text-white">Sign Up</h2>
                    <p className="text-sm text-gray-400">
                      Create a new account to get started.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium leading-none text-gray-200">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-800/90 px-3 py-2 text-sm text-gray-100 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd700] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium leading-none text-gray-200">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-800/90 px-3 py-2 text-sm text-gray-100 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd700] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="new-password" className="text-sm font-medium leading-none text-gray-200">
                      Password
                    </label>
                    <input
                      id="new-password"
                      type="password"
                      className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-800/90 px-3 py-2 text-sm text-gray-100 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd700] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="confirm-password" className="text-sm font-medium leading-none text-gray-200">
                      Confirm Password
                    </label>
                    <input
                      id="confirm-password"
                      type="password"
                      className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-800/90 px-3 py-2 text-sm text-gray-100 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd700] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd700] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#ffd700] text-black hover:bg-[#ffd700]/90 h-10 px-4 py-2 w-full"
                  >
                    Sign Up
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}