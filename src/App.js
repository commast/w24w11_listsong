import './App.css'
import Container from './Container.js'

const App = () => {
  return (
    <div>
      <Header/>
      <Playlist 
        title="프로그래밍하면서 듣고 싶은 노래"/>
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
      <Container title="사랑에 연습이 있었다면" index="1"/>
      <Container title="사건의 지평선" index="2"/>
      <Container title="사랑은 늘 도망가" index="3"/>
    </div>
  )
}

export default App
