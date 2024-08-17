import { Head } from '@inertiajs/react'
import MainLayout from '~/layouts/MainLayout'
import User from '#models/user'
import DeezerButton from '~/components/DeezerButton'

export default function SpotifySuccess({ user }:  { user: User }) {
  function onPress() {
    window.location.href = '/auth/deezer/redirect'
  }

  return (
    <MainLayout>
      <Head title="Compte Spotify" />

      <div className="flex justify-center items-center text-center mt-[15%]">
        <div className={"space-y-5"}>
          <div className="text-xl font-bold">Félicitation {user.username}, votre compte Spotify est maintenant établie !</div>
          <div className="text-lg mt-4">Pour pouvoir transférer vos playlist de Deezer à Spotify, vous devez maintenant link votre compte Deezer</div>
          <div>
            <DeezerButton type={'button'} name={'Connectez votre compte Deezer !'} onPress={onPress}/>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
