import './Hero.scss';
import { Lora } from 'next/font/google'
import { Button } from '../../common/Button/Button'
import { Container } from '../../layouts/Container/Container'

const fontLora = Lora({ subsets: ['latin'] })

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-container">
        <Container>
          <h2 className={fontLora.className + " hero__title"}>
            Just look around you
          </h2>
          <p className="hero__description">
            Explore and deepen your knowledge about your favorite writers and topics.
          </p>

          <div className="hero-button__container">
            <Button
              style="ghost"
            >
              Become a Member
            </Button>
            <Button
              style="white"
            >
              Start to Read Now
            </Button>
          </div>
        </Container>
      </div>
    </div>
  )
}