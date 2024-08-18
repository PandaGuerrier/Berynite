import { AuroraBackground } from '~/components/ui/aurora-background'
import { motion } from 'framer-motion'
import { Head } from '@inertiajs/react'
import MainLayout from '~/layouts/MainLayout'

export default function Home() {
  return (
    <MainLayout>
      <AuroraBackground>
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
            Exprime toi avec Berynite
          </div>
        </motion.div>
      </AuroraBackground>
    </MainLayout>
  )
}
