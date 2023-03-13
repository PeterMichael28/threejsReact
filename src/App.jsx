import Contact from "./components/Contact";
import { Container } from "./styles/Container";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import Test from "./components/Test";


function App() {

  return (
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contact />
      <Test />
    </Container>
  )
}

export default App
