import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-bl from-transparent via-[#101C5C]/[.64] to-transparent to-40%">
      <Header />

      <div className="flex items-center justify-center">
        <section className="mx-4 mt-16 flex flex-col items-start justify-center px-5 max-md:mt-16">
          <h3 className="text-3xl font-normal leading-10 text-[#FFFFFF] max-md:text-4xl max-md:leading-10 md:text-6xl">
            Empowering Lives Through <br /> Innovative{" "}
            <span className="font-bold underline decoration-[#7F93FF]">AI</span>{" "}
            Technologies.
          </h3>
          <p className="mt-6 text-xl tracking-tight text-[#C0C2CC] max-md:max-w-full max-md:text-lg">
            Finding new horizons for visionaries to accelerate their innovation
            and progress.
          </p>
          <div className="mt-7 flex flex-row gap-4 text-lg text-white max-md:flex-col">
            <button className="justify-center rounded-xl bg-[#6A35FF] px-8 py-3 font-bold max-md:px-5">
              Explore Our Services
            </button>
            <button className="justify-center rounded-xl border border-solid border-indigo-400 px-8 py-3 font-semibold max-md:px-5">
              Learn more
            </button>
          </div>
          <div className="mt-16 bg-gradient-to-r from-[#1C1C1C] via-[#E3E3E3] to-[#1C1C1C] bg-clip-text text-xl text-transparent max-md:mt-10 max-md:max-w-full">
            <span>From Ideas to Software Solutions</span>
            <span className="text-white"> 💡✨ </span>
            <span> From Ideas to Software Solutions</span>
            <span className="text-white"> 🌟✨ </span>
            <span> From Ideas to</span>
          </div>
        </section>
      </div>
    </main>
  );
}
