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
      <div className="flex flex-col gap-10">
        <div className="text-xs flex gap-10">
          {url.map(({ link, name }) => (
            <Link key={name} href={link}>
              {name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-2 text-xs">
          <Link href="#" className="link">
            contacts@rdpratama.com
          </Link>
          <p>134 N4th, Brooklyn, NY 11249</p>
          <p>WeWork Williamsburg</p>
        </div>
      </div>
      <div className="text-xs">
        <p>Copyright © 2023 - All right reserved by rdpratama.com</p>
      </div>
    </footer>
  );
}
