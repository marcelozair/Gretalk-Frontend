import { Lora } from 'next/font/google'
import { Button } from '../../common/Button/Button'
import { Container } from '../../layouts/Container/Container'

const fontLora = Lora({ subsets: ['latin'] })


export const Hero = () => {
  return (
    <div className="relative border-b-[1px] border-b-line w-full h-[530px] bg-hero">
      <div className="relative w-full h-full flex flex-col justify-center z-10">
        <Container>
          <h2 className={fontLora.className + " text-white font-bold text-6xl text-left"}>
            Just look around you
          </h2>
          <p className="text-xl mt-4 text-white">
            Explore and deepen your knowledge about your favorite writers and topics.
          </p>

          <div className="flex mt-5 gap-4">
            <Button
              style="ghost"
            >
              Become a Member
            </Button>
            <Button
            >
              Start to Read Now
            </Button>
          </div>
        </Container>
      </div>
    </div>
  )
}