import './App.css'
import Container from './Container.js'

const App = () => {
  const songs = [
    {
      id: 1,
      title: "사랑에 연습이 있었다면",
      singer: "임재현",
      rating: 5,
      lyrics: `사랑에 연습이 있었다면
우리는 달라졌을까
내가 널 만난 시간 혹은 그 장소
상황이 달랐었다면 우린 맺어졌을까
하필 넌 왜 내가 그렇게 철없던 시절에
나타나서 그렇게 예뻤니
너처럼 좋은여자가 왜 날 만나서 그런
과분한 사랑 내게 줬는지`,
    },
    {
      id: 2,
      title: "사건의 지평선",
      singer: "윤하",
      rating: 3,
      lyrics: null,
    },
    {
      id: 3,
      title: "사랑은 늘 도망가",
      singer: "임영웅",
      rating: 3,
      lyrics: null,
    },
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
        props.listSong.map(song => 
          <Container 
          key={song.id} 
          song = {song}
          />
        )
      }
    </div>
  )
}

export default App
