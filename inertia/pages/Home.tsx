import { motion } from 'framer-motion'
import { Head } from '@inertiajs/react'
import MainLayout from '~/layouts/MainLayout'
import useAuth from '~/hooks/use_auth'

export default function Home() {
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
    </MainLayout>
)
}
