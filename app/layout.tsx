import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const header = (
  //   <header>
  //     <div className="text-center bg-slate-800 p-8 my-6 rounded-md">
  //       <Image
  //         src="/logo.png"
  //         width={40}
  //         height={40}
  //         className="mx-auto"
  //         alt={"logo"}
  //       />
  //       <Link href="/">
  //         <h1 className="text-2xl text-white font-bold mt-4">Jack's Blog</h1>
  //       </Link>
  //       <p className="text-slate-300">🤟 Welcome to my tech blog. 💻</p>
  //     </div>
  //   </header>
  // );


  return (
    <html>
      <head />
      <body>
        <div className="w-full bg-white">
          {Navbar}
          {children}
          {Footer}
        </div>
      </body>
    </html>
  );
}
