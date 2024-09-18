"use client";
import Image from "next/image";
import TosibbaLogo from "../assets/images/TosibbaLogo.png";

export default function Home() {
  const handleDownload = () => {
    // Creating a temporary link element
    const link = document.createElement("a");
    link.href = "/pdf/Tosibba.pdf"; // Update path
    link.download = "Tosibba.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div>
      <main className="flex flex-col items-center justify-center h-screen gap-10 sm:gap-20 bg-gradient-to-r from-[#070707] to-[#605b4b]">
        <Image
          className="dark:invert"
          src={TosibbaLogo}
          alt="Tosibba logo"
          width={250}
          height={50}
          priority
        />
        <h1 className="text-5xl sm:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#fcf300] to-[#ddbc43]">
          Welcome To Tosibba
        </h1>

        <button
          className="flex gap-4 items-center flex-col sm:flex-row"
          onClick={handleDownload}
        >
          <div className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">
            <Image
              className="dark:invert"
              src={TosibbaLogo}
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Download PDF
          </div>
        </button>
      </main>
    </div>
  );
}
