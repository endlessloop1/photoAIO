import React from 'react'
import SystemStatus from './components/SystemStatus'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-4 px-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">
              Photo Management
            </h1>
            <nav className="space-x-4">
              <button className="px-3 py-2 rounded hover:bg-gray-100">
                Library
              </button>
              <button className="px-3 py-2 rounded hover:bg-gray-100">
                Tags
              </button>
              <button className="px-3 py-2 rounded hover:bg-gray-100">
                Settings
              </button>
            </nav>
          </div>
        </header>
        
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 flex items-center justify-center">
              <p className="text-gray-500">Content Area</p>
            </div>
          </div>
        </main>
        
        <SystemStatus />
      </div>
    </QueryClientProvider>
  )
}

export default App 