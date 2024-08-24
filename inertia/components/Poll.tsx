import Poll from '#models/poll'
import { Image } from '@nextui-org/react'
import VoteButton from '~/components/VoteButton'

interface Props {
  poll: Poll
}

export default function PollComponent({poll}: Props) {
  return (
    <div className="h-min-40 w-full md:w-[50vh] bg-gray-700 px-5 py-3 rounded-md">
      <div className={'flex space-x-3 items-center'}>
        <Image
          src={(poll.user?.asAvatar) ? '/storage/avatars/' + poll.user.id + '.png' : `https://ui-avatars.com/api/?name=${poll.user?.username}&size=128`}
          alt="avatar"
          width={40}
          height={40}
          className="rounded-full cursor-pointer"/>
        <div className="text-white text-md font-bold">{poll.user?.username}</div>
      </div>
      <div className={"items-center"}>
        <div className="text-white text-lg font-bold mt-3">{poll.title}</div>
        <div className="text-white text-md mt-1">{poll.content} {poll.content} {poll.content} </div>
      </div>
      <div className={"flex justify-end items-end mt-5"}>
        <VoteButton poll={poll}/>
      </div>
    </div>
  )
}
