import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className='container lg:max-w-screen-lg px-4'>
        <nav className='flex items-center justify-between py-4 flex-wrap'>
          <div>
            <Link className='font-medium text-xl' href='/'>
              Musicfy
            </Link>
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
  );
}
