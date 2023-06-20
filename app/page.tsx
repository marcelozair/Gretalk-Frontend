import { Hero } from './components/home/Hero/Hero';
import { LandingNavBar } from './components/layouts/NavBar/LandingNavBar/LandingNavBar';

export default function Home() {
  return (
    <main>
      <LandingNavBar />
      <Hero />
    </main>
  )
}
