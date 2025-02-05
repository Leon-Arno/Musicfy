import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='container my-40'>
      <h1 className='font-medium text-6xl mb-6 leading-snug'>
        <span className='block'>You might have</span>
        <span className='block'>missed your way!</span>
      </h1>
      <Link
        className='inline-block py-3 px-5 bg-black text-white rounded-sm font-medium'
        href='/'
      >
        Go Home
      </Link>
    </div>
  );
}
