import { useQuery } from '@tanstack/react-query'

export default function SystemStatus() {
  const { data, isLoading, error } = useQuery('systemStatus', () =>
    fetch('/api/system/status').then(res => res.json())
  )

  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg">
      <h3 className="font-semibold mb-2">System Status</h3>
      <div className="space-y-1">
        <div className="flex items-center">
          <span className="w-24">Backend:</span>
          <span className={`h-2 w-2 rounded-full ${data?.database === 'ok' ? 'bg-green-500' : 'bg-red-500'}`} />
        </div>
        <div className="flex items-center">
          <span className="w-24">Database:</span>
          <span className={`h-2 w-2 rounded-full ${data?.database === 'ok' ? 'bg-green-500' : 'bg-red-500'}`} />
        </div>
        <div className="flex items-center">
          <span className="w-24">Redis:</span>
          <span className={`h-2 w-2 rounded-full ${data?.redis === 'ok' ? 'bg-green-500' : 'bg-red-500'}`} />
        </div>
      </div>
    </div>
  )
} 