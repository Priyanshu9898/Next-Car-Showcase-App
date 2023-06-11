import { Hero } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='text-black overflow-hidden px-1 xl:px-12'>
      <Hero />
      <div className='mt-12 padding-x padding-y max-width'>
        <div className='card_container'>
          <h1 className='text-4xl font-extrabold'>Car Catelogue</h1>
          <p>Explore the Amazing cars you might like!</p>
        </div>
      </div>
    </main>
  )
}
