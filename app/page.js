import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <header>
        <div className='container'>
          <nav className='flex items-center justify-between py-4 flex-wrap'>
            <div>
              <span className='font-medium text-xl'>Musicfy</span>
            </div>

            <ul className='flex font-regular text-sm space-x-8'>
              <li>
                <Link href='/trending'>Trending</Link>
              </li>
              <li>
                <Link href='/artists'>Artists</Link>
              </li>
              <li>
                <Link href='/pricing'>Pricing</Link>
              </li>
              <li>
                <Link href='/about-us'>About us</Link>
              </li>
            </ul>

            <div className='flex items-center'>
              <Link className='text-sm mr-8' href=''>
                Log in
              </Link>
              <Link
                className='font-medium text-sm bg-black text-white px-5 py-2 rounded-sm'
                href=''
              >
                Get started
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <section>
          <div className='container'>
            <div className='flex flex-col items-center justify-center'>
              <h1 className='font-medium text-6xl text-center mb-6 leading-snug'>
                <span className='block'>Music Trends, Artists, and</span>
                <span className='block'> Insights at Your Fingertips.</span>
              </h1>
              <p className='text-lg text-center mb-8 w-[724px]'>
                Musicfy is your all-in-one platform for real-time music trends,
                artist analytics, and actionable insights to stay ahead in the
                industry.
              </p>
              <Link
                className='inline-block py-3 px-5 bg-black text-white rounded-sm'
                href={''}
              >
                Get Started for Free
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
