import banner from "../assets/banner-image.png";

const Banner = () => {
  return (
    <section className="px-5 py-16 md:py-20">
      <div className="mx-auto flex max-w-300 items-center justify-between gap-10">

        <div className="max-w-140">

          <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Build Your Ideal
            <br />
            <span className="bg-linear-to-r from-orange-500 via-pink-600 to-violet-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-5 max-w-130 text-base leading-6 text-gray-600">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits your
            next project.
          </p>

          <div className="mt-9 flex items-center gap-3">
            <button className="rounded-md bg-linear-to-r from-orange-500 via-pink-600 to-violet-600 px-4 py-2.5 text-sm font-medium text-white">
              Explore Technologies
            </button>

            <button className="rounded-md border border-gray-200 px-8 py-2.5 text-sm font-medium text-gray-600">
              Learn More
            </button>
          </div>

        </div>
        
        <div className="hidden md:block">
          <img
            src={banner}
            alt="Development Stack"
            className="w-150 h-150"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;
