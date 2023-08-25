export default function Under() {
  return (
    <div className="w-full h-screen flex justify-center items-center gap-2">
      <h1 className="font-black text-4xl">UNDERCONSTRUCTION!</h1>
      <div className="w-[50px] h-[30px] items-end flex">
        <span className="loading loading-ring loading-xs"></span>
        <span className="loading loading-ring loading-xs"></span>
        <span className="loading loading-ring loading-xs"></span>
      </div>
    </div>
  );
}
