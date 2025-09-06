import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["extrabold"],
  weight: ["100", "900"],
});


export default function Home() {
  return (
<main className="bg-purple-100">
 <section className="grid grid-cols-2  h-[50vh]">
 <div className=" flex flex-col gap-4 items-center justify-center">
 <p className={`text-3xl font-bold ${poppins.className}`}>
  The best url shortener in the Market
 </p>
 <p className="px-26 text-center">
  We are the most straightforward and easy to use url shortener in the world. Most of the url shorteners will track you or ask your details for login. We understand your needs and hence we created this url shortener which is free and easy to use.
 </p>
  <div className='flex gap-3 justify-start'>
            <Link href="/shorten"><button className='bg-purple-500 shadoq-lg p-3 rounded-lg py-1 font-bold text-white'>Try Now</button></Link>
            <Link href="/github"><button className='bg-purple-500 shadoq-lg p-3 rounded-lg py-1 font-bold text-white'>GitHub</button></Link>
            </div>

 </div>
<div className=" flex justify-start relative">
<Image src={"/vector.jpg"} fill={true} alt="an image of a vector"/>

</div>
 </section>
</main>
  );
}
