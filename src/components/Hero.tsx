import bannerStack from '../assets/banner-stack.png'
import { FOCUS_RING, GRADIENT_BG, GRADIENT_TEXT } from '../Theme/Theme'

const Hero = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8 lg:py-28">
      <div>
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          Build Your Ideal
          <br />
          <span className={GRADIENT_TEXT}>Development Stack</span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-500 sm:text-lg">
          Explore frontend, backend, database, and tooling options, compare them side by side, and
          put together the stack that fits your next project.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#technologies"
            className={`${FOCUS_RING} rounded-lg ${GRADIENT_BG} px-6 py-3 text-center text-sm font-semibold text-white shadow-md shadow-pink-200 transition-transform hover:scale-[1.02]`}
          >
            Explore Technologies
          </a>
          <a
            href="#about"
            className={`${FOCUS_RING} rounded-lg border border-gray-300 px-6 py-3 text-center text-sm font-semibold text-gray-800 transition-colors hover:bg-gray-50`}
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="mt-12 flex justify-center lg:mt-0">
        <img
          src={bannerStack}
          alt="Isometric illustration of a layered development stack with UI, logic, and hardware components"
          className="w-full max-w-sm drop-shadow-xl sm:max-w-md"
        />
      </div>
    </section>
  )
}

export default Hero
