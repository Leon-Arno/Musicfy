import Image from 'next/image';
import Link from 'next/link';
import trendingStatistic from '../public/trending-statistic.svg';
import artistAnalytics from '../public/artist-analytics.svg';
import paasInsights from '../public/paas-insights.svg';

export default function Home() {
  return (
    <>
      <main>
        <section className='py-40'>
          <div className='container lg:max-w-screen-lg px-4'>
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
          <div className='container lg:max-w-screen-lg px-4'>
            <h2 className='font-medium text-4xl lg:text-5xl'>
              Statistics. Analytics. Insights.
            </h2>
            <p className='lg:w-6/12 mt-6'>
              Musicfy is your all-in-one platform for real-time music trends,
              artist analytics, and actionable insights to stay ahead in the
              industry.
            </p>

            <div className='mt-20 flex flex-col items-center md:flex-row flex-wrap'>
              <div className='card-container md:w-6/12'>
                <div className='card bg-[#111111] rounded-sm p-10 w-[380px] sm:w-[450px] md:w-[97%]'>
                  <h3 className='font-medium text-2xl lg:text-[32px]'>
                    Trending Statistics
                  </h3>
                  <p className='text-sm mt-2 mb-10'>
                    Track real-time music trends and discover
                    <span className='block'>whats hot in the industry.</span>
                  </p>
                  <Image
                    src={trendingStatistic}
                    alt=''
                    className='w-[280px] md:w-auto md:h-[179px] lg:h-[227px]'
                  />
                </div>
              </div>
              <div className='card-container md:w-6/12 md:flex md:justify-end mt-7 md:mt-0'>
                <div className='card bg-[#111111] rounded-sm p-10 w-[380px] sm:w-[450px] md:w-[97%]'>
                  <h3 className='font-medium text-2xl lg:text-[32px]'>
                    Artist Analytics
                  </h3>
                  <p className='text-sm mt-2 mb-10'>
                    Dive deep into artist performance, top sellers,
                    <span className='block'>and fan engagement metrics.</span>
                  </p>
                  <Image
                    src={artistAnalytics}
                    alt=''
                    className='w-[240px] md:w-auto'
                  />
                </div>
              </div>

              <div className='card-container mt-7 md:mt-5 lg:mt-7'>
                <div className='card bg-[#111111] rounded-sm p-10 w-[380px] sm:w-[450px] md:w-full md:flex md:justify-between md:items-center'>
                  <div>
                    <h3 className='font-medium text-2xl lg:text-[32px]'>
                      Artist Analytics
                    </h3>
                    <p className='text-sm mt-2 mb-10 md:w-10/12'>
                      Gain exclusive insights into songs and artists with our
                      powerful Platform-as-a-Service tools. Gain exclusive
                      insights into songs and artists with our powerful
                      Platform-as-a-Service tools.
                    </p>
                  </div>
                  <Image
                    src={paasInsights}
                    alt=''
                    className='lg:mr-24 w-[240px] md:w-auto'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
