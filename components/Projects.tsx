export default function Projects() {
  return (
    <section className="w-full pt-[12%] px-[15%] flex flex-col gap-5">
      <div>
        <h1 className="libre italic font-semibold text-2xl">Projects.</h1>
      </div>
      <div className="flex flex-row gap-5 w-full">
        <div className="flex flex-col gap-5">
          <div className="w-[300px] h-[400px] bg-zinc-800">h1</div>
          <div className="w-[300px] h-[400px] bg-zinc-800">h1</div>
        </div>
        <div className="w-full h-[820px] bg-zinc-800">h1</div>
      </div>

      <div className="flex flex-row-reverse gap-5 w-full pb-20">
        <div className="flex flex-col gap-5">
          <div className="w-[300px] h-[400px] bg-zinc-800">h1</div>
          <div className="w-[300px] h-[400px] bg-zinc-800">h1</div>
        </div>
        <div className="w-full h-[820px] bg-zinc-800">h1</div>
      </div>
    </section>
  );
}
