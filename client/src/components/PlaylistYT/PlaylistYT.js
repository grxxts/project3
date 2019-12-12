import YouTubePlaylist from 'react-youtube-playlist';
import 'react-youtube-playlist/dist/styles'
 
const App = () => {
  return (
    <YouTubePlaylist
      width={'85%'}
      height={390}
      api_key=''
      playlist_id=''
      show_thumbnails
    />
  )
}