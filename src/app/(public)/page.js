import Image from "next/image";
export default function Home() {
  return (
    <>
      <div className="">
        <h1 className="mt-24 text-6xl font-sans md:Apple Color Emoji">Hi </h1>
        <h1 className=" text-6xl font-sans md:Apple Color Emoji text-red-600/100 " >Saya Fathan Oswaldy</h1>
        <h1 className=" text-6xl font-sans md:Apple Color Emoji" >Junior Programer</h1><br></br>
        <p>Saya adalah Mahasiswa Berusia 20 tahun dan</p>
        <p> Saya Memiliki 3 Adik.</p>
        <div>
        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/poto.jpg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
          <button className=" mt-20 rounded-lg bg-red-500 w-48 min-h-12 text-white" >Get Started</button>
        </div>
      </div>
    </>
  );
}
