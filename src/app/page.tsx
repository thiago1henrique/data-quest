import bg01 from '../../public/bg01.jpg'
import Image from "next/image";

import Google from '@/images/icons/google.svg'
import EmailIcon from '@/images/icons/email.svg'

export default function Home() {
  return (
      <section className="flex justify-between w-full h-lvh pb-24">

          <div className="hidden lg:block bg-blue-500 flex-1/8 overflow-hidden relative">
              <h1 className="absolute z-10">pegou</h1>
              <Image className="absolute pointer-events-none blur-[4px]" src={bg01} alt="bg01" />
          </div>

          <div className="flex flex-col gap-8 justify-center bg-gray-100 flex-1 pl-4">
              <div className="flex flex-col">
                  <h2 className="text-3xl">Por incrivel que pareça</h2>
                  <h2 className="font-bold text-7xl">Você pode <br/> aprender </h2>
                  <h2 className="text-blue-500 font-bold text-7xl">Jogando!</h2>
              </div>

              <div className="flex flex-col gap-4 max-w-[45rem]">
                  <button className="flex items-center justify-center gap-2 bg-green-300 cursor-pointer py-4 px-8 rounded-full max-w-[260px]">
                      <Image src={Google} alt="Google icon" className="h-4 w-4"/>
                      <span>Continuar com Goole</span>
                  </button>

                  <button className="flex items-center justify-center gap-2 bg-green-300 cursor-pointer py-4 px-8 rounded-full max-w-[260px]">
                      <Image src={EmailIcon} alt="Google icon" className="h-4 w-4"/>
                      <span>Continuar com Email</span>
                  </button>

                  <div className="flex flex-col max-w-[16rem] gap-4">
                      <div className="flex items-center gap-4 max-w-[45rem]">
                          <div className="flex-grow border-t border-gray-400"></div>
                          <span className="text-gray-500">ou</span>
                          <div className="flex-grow border-t border-gray-400"></div>
                      </div>

                      <button className="flex items-center justify-center gap-2 bg-green-300 cursor-pointer py-4 px-8 rounded-full max-w-[260px]">
                          <span>Crie uma conta</span>
                      </button>
                  </div>
              </div>
          </div>
      </section>
  )
}
