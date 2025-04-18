import bg01 from '../../public/bg01.jpg'
import Image from "next/image";

export default function Home() {
  return (
      <section className="flex justify-between w-full h-lvh">
          <div className="flex flex-col bg-red-500 flex-1/5 pl-40">
              <h2 className="text-3xl">Por incrivel que pareça</h2>
              <h1 className="font-bold text-8xl">Você pode aprender <br/> <span className="text-blue-500">Jogando!</span></h1>

          </div>
          <div className="hidden sm:block bg-blue-500 flex-1 overflow-hidden">
              <Image className="pointer-events-none blur-[4px]" src={bg01} alt="bg01" />
          </div>
      </section>
  )
}
