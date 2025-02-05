import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
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
                className='inline-block py-3 px-5 bg-black text-white rounded-sm font-medium'
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
