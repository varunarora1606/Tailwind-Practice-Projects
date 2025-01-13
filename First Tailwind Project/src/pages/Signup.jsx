import { Input } from '../components/Input'
import { Button } from '../components/Button'

export const SignupPage = () => {
    return <div className="flex justify-center bg-[#00274E] text-white min-h-screen text-2xl">
        <div className="flex items-center flex-col">
          {/* This is in logo component */}
          <div className="p-24">
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
        </div>
      </div>
}