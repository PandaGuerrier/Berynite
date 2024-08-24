import Poll from '#models/poll'
import { useState } from 'react'
import useAuth from '~/hooks/use_auth'
import { ArrowDown, ArrowUp } from 'lucide-react'

interface Props {
  poll: Poll
}

export default function VoteButton({ poll }: Props) {
  const auth = useAuth()
  const [yes, setYes] = useState(poll.yesVote)
  const [no, setNo] = useState(poll.noVote)

  return (
    <div className={"flex space-x-3"}>
      <button className="flex bg-green-500 px-2 py-0.5 border border-green-600 rounded-md bg-opacity-20">
        <ArrowUp/> {yes.size ?? 0}
      </button>
      <button className="flex bg-red-500 px-2 py-0.5 border border-red-600 rounded-md bg-opacity-20">
        <ArrowDown/> {no.size ?? 0}
      </button>

    </div>
  )
}
