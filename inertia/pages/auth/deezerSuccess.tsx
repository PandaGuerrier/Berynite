import { Head } from '@inertiajs/react'
import MainLayout from '~/layouts/MainLayout'
import User from '#models/user'
import { Button } from '@nextui-org/react'

export default function DeezerSuccess({ user }:  { user: User }) {
  function onPress() {
    window.location.href = '/playlists'
  }

  return (
    <MainLayout>
      <Head title="S2D" />
      <div className="flex justify-center items-center text-center mt-[15%]">
        <div className={"space-y-5"}>
          <div className="text-xl font-bold">Félicitation {user.username}, votre compte Spotify & Deezer est maintenant établie !</div>
          <div className="text-lg mt-4">Vous pouvez désormais transférer vos playlist !</div>
          <div>
            <Button type={'button'} name={'Transférer mes playlists !'} onPress={onPress} size={"lg"} radius={"full"} variant={"faded"} color={"primary"} className={""}>Transférer mes playlists !</Button>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
