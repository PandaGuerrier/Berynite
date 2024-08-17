import Http from '../contracts/http.js'
import SpotifyPlaylist from '#services/objects/spotify_playlist'

export default class SpotifyApi extends Http {
  public async getPlaylists(accessToken: string) {
    const response = await this.get(`/me/playlists?limit=50`, {
      Authorization: `Bearer ${accessToken}`
    })

    const payload = await response.json()
    // @ts-ignore
    return SpotifyPlaylist.fromArray(payload.items)
  }
}
