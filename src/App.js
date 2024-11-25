import './App.css'
import Container from './Container.js'

const App = () => {
  const songs = [
    "사랑에 연습이 있었다면",
    "사건의 지평선",
    "사랑은 늘 도망가",
  ]

  return (
    <div>
      <Header/>
      <Playlist 
        title="프로그래밍하면서 듣고 싶은 노래"
        listSong={songs}/>
    </div>
  )
}

const Header = () => {
  return (
      <h1>React 프로그래밍</h1>
  )
}

const Playlist = props => {
  return (
    <div className='playlist'>
      <div className="playlist">{props.title}</div>
      {
        props.listSong.map((song, index) => (
          <Container
           key ={index}
           title={song}
           index={index}/>    
        ))
      }
    </div>
  )
}

export default App
