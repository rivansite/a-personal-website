export default function Projects() {
  return (
    <section className="w-full pt-[12%] px-[15%] flex flex-col gap-5">
      <div className="hidden md:block">
        <h1 className="libre italic font-semibold text-2xl">Projects.</h1>
      </div>
      <div className="flex-row gap-5 w-full hidden md:flex">
        <div className="flex flex-col gap-5">
          <div className="w-[300px] h-[400px] bg-zinc-800">h1</div>
          <div className="w-[300px] h-[400px] bg-zinc-800">h1</div>
        </div>
        <div className="w-full h-[820px] bg-zinc-800">h1</div>
      </div>

      <div className="flex-row-reverse gap-5 w-full pb-20 hidden md:flex">
        <div className="flex flex-col gap-5">
          <div className="w-[300px] h-[400px] bg-zinc-800">h1</div>
          <div className="w-[300px] h-[400px] bg-zinc-800">h1</div>
        </div>
        <div className="w-full h-[820px] bg-zinc-800">h1</div>
      </div>

      {/* Mobile Device */}
      <div className="w-full flex flex-col py-[40%] gap-3">
        <div className="w-full h-[300px] bg-black"></div>
        <div className="w-full h-[300px] bg-black"></div>
        <div className="w-full h-[300px] bg-black"></div>
        <div className="w-full h-[300px] bg-black"></div>
        <div className="w-full h-[300px] bg-black"></div>
        <div className="w-full h-[300px] bg-black"></div>
      </div>
    </section>
  );
}
