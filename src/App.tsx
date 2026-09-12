import Hero from "./components/Hero"
import NavBar from "./components/NavBar"

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar/>
      <main>
        <Hero/>
      </main>
    </div>
  )
}

export default App
