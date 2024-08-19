import MainLayout from '~/layouts/MainLayout'
import Poll from '#models/poll'
import User from '#models/user'

interface IndexProps {
  polls: Poll[],
  user: User
}

export default function Index({ polls, user }: IndexProps) {
  return (
    <MainLayout>
      <div>

      </div>
    </MainLayout>
  )
}
