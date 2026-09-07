import './App.css'

const ALT =
  "Fetch Kids — We'll Be Back Soon! Fetch Kids is getting a little makeover. " +
  'Something exciting is coming your way!'

export default function App() {
  return (
    <main className="room">
      {/* the browser downloads only the matching source, never both */}
      <picture>
        <source media="(max-aspect-ratio: 1 / 1)" srcSet="/room-mobile.jpg" />
        <img className="screen" src="/room.jpg" alt={ALT} />
      </picture>
    </main>
  )
}
