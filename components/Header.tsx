"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import React from "react";

export default function Header() {
  const router = useRouter();
  const currentRouter = usePathname();
  const url = [
    {
      name: "PROJECTS",
      link: "/projects",
    },
    {
      name: "CERTIFICATE",
      link: "/certificate",
    },
    {
      name: "CONTACTS",
      link: "/contacts",
    },
  ];
  return (
    <header className="w-full h-36 flex flex-col justify-center items-center bg-stone-100 gap-5 fixed">
      <div>
        <Link href="/" className="libre italic font-semibold text-xl">
          R.D. Prtm
        </Link>
      </div>
      <div className="text-xs">
        <ul className="flex gap-10">
          {url.map(({ link, name }) => (
            <Link key={name} href={link} className={`${currentRouter === link ? "font-semibold" : "hover:text-stone-400 "}`}>
              {name}
            </Link>
          ))}
        </ul>
      </div>
    </header>
  );
}
