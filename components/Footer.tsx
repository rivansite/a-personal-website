import Link from "next/link";

export default function Footer() {
  const url = [
    {
      name: "ABOUT",
      link: "/",
    },
    {
      name: "PROJECTS",
      link: "/projects",
    },
    {
      name: "CONTACTS",
      link: "/contacts",
    },
  ];
  return (
    <footer className="w-full h-[300px] flex px-[15%] justify-between pt-20 bg-zinc-200">
      <div className="flex flex-col gap-5 md:gap-10">
        <div className="text-[0.6rem] md:text-xs flex gap-2 md:gap-10">
          {url.map(({ link, name }) => (
            <Link key={name} href={link}>
              {name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-1 md:gap-2 text-[0.6rem] md:text-xs">
          <Link href="#" className="link">
            contacts@rdpratama.com
          </Link>
          <p>134 N4th, Brooklyn, NY 11249</p>
          <p>WeWork Williamsburg</p>
        </div>
      </div>
      <div className="text-[0.6rem] md:text-xs">
        <p className="hidden md:block">Copyright © 2023 - All right reserved by rdpratama.com</p>
        <div className="block md:hidden">
          <p>Copyright © 2023</p>
          <p>All right reserved by</p>
          <p>rdpratama.com</p>
        </div>
      </div>
    </footer>
  );
}
