import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <main>
        <section className='py-40'>
          <div className='container px-4'>
            <div className='flex flex-col items-center justify-center'>
              <h1 className='font-medium text-5xl lg:text-6xl text-center mb-6 leading-snug'>
                <span className='block'>Music Trends, Artists, and</span>
                <span className='block'> Insights at Your Fingertips.</span>
              </h1>
              <p className='text-base lg:text-lg text-center mb-8 max-w-[724px]'>
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

        <section className='features bg-black text-white py-24'>
          <div className='container px-4'>
            <h2 className='font-medium text-5xl'>
              Statistics. Analytics. Insights.
            </h2>
            <p className='lg:w-6/12 mt-6'>
              Musicfy is your all-in-one platform for real-time music trends,
              artist analytics, and actionable insights to stay ahead in the
              industry.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
