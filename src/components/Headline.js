export default function Headline({ partial }) {
  return (
    <header className="flex text-waterloo-100 mb-20">
      <p className="text-black dark:text-white text-3xl">uchat<span className="text-waterloo-100 pl-1">{partial}</span></p>
    </header>
  )
}
