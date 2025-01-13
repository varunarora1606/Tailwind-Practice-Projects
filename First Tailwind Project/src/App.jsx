import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Input } from './components/Input'
import { Button } from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex justify-center bg-[#00274E] text-white min-h-screen text-2xl">
        <div className="flex items-center flex-col">
          <div className="p-20">
            <span className="text-blue-400">
              Webinar
            </span>
            <span>
              .gg
            </span>
          </div>
          <div className="font-bold pb-8">
            Verify Your Age
          </div>
          <div className="text-sm text-white/40 pb-2">
            Please confirm your birth year. This data will be stored.
          </div>
          <Input type="text" placeholder='Your Birth Year' />
          <Button disabled={false}>Continue</Button>
          {/* <button className="pointer m-8 text-base rounded-lg bg-white/40 h-10 w-64">Continue</button> */}
        </div>
      </div>
    </>
  )
}

export default App
