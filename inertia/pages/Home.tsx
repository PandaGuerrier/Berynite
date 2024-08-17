import SpotifyButton from '~/components/SpotifyButton'
import { AuroraBackground } from '~/components/ui/aurora-background'
import { motion } from 'framer-motion'
import { Head } from '@inertiajs/react'

export default function Home() {
    function onPress() {
      window.location.href = '/auth/spotify/redirect'
    }

  return (
    <AuroraBackground>
      <Head title={"Deezer 2 Spotify"} />
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 text-white"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Bienvenue sur <span className={"text-[#9648FC]"}>Deezer</span> to <span className={"text-[#1ed760]"}>Spotify</span>
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          L'outil <span className={"bg-gradient-to-r from-[#9648FC] to-[#1ed760] bg-clip-text text-transparent font-bold"}>gratuit</span> pour transférer vos playlists Deezer vers Spotify.
        </div>
        <SpotifyButton type={'button'} name={'Commencer maintenant !'} onPress={onPress} />
      </motion.div>
    </AuroraBackground>
  )
}
