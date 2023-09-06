import Image from 'next/image'
import Hamburger from '@/components/hamburger'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Hamburger />
      {/* First section */}
      <section className="flex flex-col items-center justify-center w-full h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Big Header Text</h1>
        <p className="text-lg mb-4">Smaller Text</p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Button</button>
      </section>

      {/* Second section */}
      <section className="flex flex-col items-center justify-center w-full h-screen bg-gray-200">
        <div className="flex flex-row items-center justify-center w-full">
          <div className="w-1/2">
            <Image src="/image1.jpg" width={500} height={500} alt=''/>
          </div>
          <div className="w-1/2 bg-white p-4">
            <h2 className="text-lg font-bold mb-2">Box Title</h2>
            <p className="text-sm">Box Text</p>
          </div>
        </div>
      </section>

      {/* Third section */}
      <section className="flex flex-col items-center justify-center w-full h-screen bg-gray-100">
        <div className="flex flex-row items-center justify-center w-full">
          <div className="w-1/2 bg-white p-4">
            <h2 className="text-lg font-bold mb-2">Box Title</h2>
            <p className="text-sm">Box Text</p>
          </div>
          <div className="w-1/2">
            <Image src="/image2.jpg" width={500} height={500} alt=''/>
          </div>
        </div>
      </section>

      {/* Fourth section */}
      <section className="flex flex-col items-center justify-center w-full h-screen bg-gray-200">
        <div className="flex flex-row items-center justify-center w-full">
          <div className="w-1/2">
            <Image src="/image3.jpg" width={500} height={500} alt=''/>
          </div>
          <div className="w-1/2 bg-white p-4">
            <h2 className="text-lg font-bold mb-2">Box Title</h2>
            <p className="text-sm">Box Text</p>
          </div>
        </div>
      </section>
    </main>
  )
}
