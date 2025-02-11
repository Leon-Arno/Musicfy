export default function Benefit({ title, body, colorValue }) {
  return (
    <div
      className={`benefit-card ${colorValue} p-10 w-full lg:w-[32%] mb-5 lg:mb-0 rounded-sm`}
    >
      <h3 className='font-medium text-2xl '>{title}</h3>
      <p className='text-sm mt-2'>{body}</p>
    </div>
  );
}
