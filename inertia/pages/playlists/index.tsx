import { Head } from '@inertiajs/react'
import MainLayout from '~/layouts/MainLayout'
import User from '#models/user'
import DeezerPlaylist from '#services/objects/deezer_playlist'
import SpotifyPlaylist from '#services/objects/spotify_playlist'
import { Button } from '@nextui-org/react'

export default function Playlists({user, deezerPlaylist, spotifyPlaylist}: {
  user: User,
  deezerPlaylist: DeezerPlaylist[],
  spotifyPlaylist: SpotifyPlaylist[]
}) {

  function deleteAllPlaylists(platform: string) {
    window.confirm(`Êtes vous sûr de vouloir supprimer toutes les playlists de ${platform} ?`)
    console.log('Deleting all playlists...')
    window.location.href = `/playlists/${platform}/delete`
  }

  return (
    <MainLayout>
      <Head title="S2D"/>
      <div className="justify-center items-center text-center mt-[15%]">


        <h1 className={"text-3xl font-black"}>Vos playlist, {user.username} vous pouvez les gérer !</h1>
        <div className="flex justify-center items-center text-center mt-5">
          <div className={'flex space-x-5'}>
            <div className={'space-y-5 w-1/2'}>
              <h1 className={'text-2xl'}>Deezer</h1>
              <Button onClick={() => deleteAllPlaylists('deezer')} color={'danger'}>Supprimer toutes les playlists DEEZER</Button>
              {
                deezerPlaylist.map((playlist) => (
                  <div key={playlist.id} className="bg-white p-5 rounded-md shadow-md">
                    <h1 className="text-2xl font-bold text-black">{playlist.title}</h1>
                  </div>
                ))
              }
            </div>

            <div className={'space-y-5 w-1/2'}>
              <h1 className={'text-2xl'}>Spotify</h1>
              <Button onClick={() => deleteAllPlaylists('spotify')} color={'danger'}>Supprimer toutes les playlists SPOTIFY</Button>
              {
                spotifyPlaylist.map((playlist) => (
                  <div key={playlist.id} className="bg-white p-5 rounded-md shadow-md">
                    <h1 className="text-2xl font-bold text-black">{playlist.name}</h1>
                    <p className="text-gray-500">{playlist.description}</p>
                  </div>
                ))
              }
            </div>

          </div>
        </div>
      </div>

    </MainLayout>
  )
}
