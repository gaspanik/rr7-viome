import type { Route } from './+types/home'
import { SquareDashed } from 'lucide-react'

export function meta(_: Route.MetaArgs) {
  return [{ title: 'New React Router App' }, { name: 'description', content: 'Welcome to React Router!' }]
}

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-50 min-h-screen">
      <div className="flex items-center gap-2 mb-2">
        <SquareDashed className="w-6 h-6" />
        <h1 className="font-bold text-2xl">Hello world!</h1>
      </div>
      <div className="items-center">
        <p className="text-xs">React Router Ver.7 w/ Biome</p>
      </div>
    </div>
  )
}
