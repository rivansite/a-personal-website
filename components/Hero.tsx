import Image from "next/image";
import Lyn from "@/components/assets/BG-ELLY.jpg";

export default function Header() {
  return (
    <section className="w-full h-screen pt-[12%] px-[15%] flex gap-5 2xl:justify-center">
      <div className="w-[600px]">
        <Image src={Lyn} />
      </div>
      <div className="w-[300px] flex flex-col gap-3 2xl:w-[400px]">
        <h1 className="libre italic font-semibold text-2xl">Bio.</h1>
        <span className="font-light text-[0.85rem]">
          My name is Rivanza Duta Pratama, amet consectetur adipisicing elit. Asperiores, perspiciatis consectetur, harum aut nulla ipsum perferendis laudantium voluptates quo aliquam officiis pariatur maxime cupiditate deleniti libero
          numquam odit ullam quidem? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente at in, cumque ratione atque placeat, fuga fugit laudantium provident sit a aperiam error iusto quo dicta delectus vero laborum rerum!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque sit, sed quam exercitationem
        </span>
      </div>
    </section>
  );
}
