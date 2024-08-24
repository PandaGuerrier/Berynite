import { motion } from 'framer-motion'
import { Head } from '@inertiajs/react'
import MainLayout from '~/layouts/MainLayout'
import useAuth from '~/hooks/use_auth'
import Poll from '#models/poll'
import PollComponent from '~/components/Poll'

interface Props {
  polls: Poll[]
}

export default function Home({ polls }: Props) {
  const auth = useAuth()
  return (
    <MainLayout>
      <div className={"flex w-full h-[100vh] justify-center"}>
        <Head title={'Accueil'}/>
        <motion.div
          initial={{opacity: 0.0, y: 40}}
          whileInView={{opacity: 1, y: 0}}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut'
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4 text-white"
        >
          <div className="text-3xl md:text-5xl font-bold dark:text-white text-center">
            Votez pour tout, même pour l'impossible.
          </div>
          <div className="text-lg md:text-2xl dark:text-white text-center font-thin italic">
            Exprime toi avec Berynite {auth.isAuthenticated ? ', ' + auth.user!.username : ''} !
          </div>
        </motion.div>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {polls.map((poll, index) => (
           <PollComponent poll={poll} key={index} />
          ))}
        </div>
      </div>
    </MainLayout>
  )
}
