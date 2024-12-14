import Link from "next/link";
import { Button } from "./ui/moving-border";
import Image from 'next/image';


function HeroSection() {
  return (
    <div
    
  className="h-auto md:h-[60rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 bg-cover bg-center"
  style={{
    backgroundImage: "./courses/image.png'", 
  }}

>
<Image
            src="/courses/image.png" // Replace with the correct logo path
            alt="Startup Logo"
            layout="fill" // Makes the image span the entire container
            objectFit="cover" // Ensures the image covers the container without distortion
  priority // Optimizes the image loading
  className="absolute top-0 left-0 w-screen h-screen"
  style={{ opacity: 0.5 }}
          />
         


      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-grey bg-gradient-to-b from-neutral-50 to-neutral-400">
          Artificial Intelligence in Precision Medicine
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Building Technology to Cure Diseases
          <br />
          
        </p>
        <div className="mt-4 flex gap-4 justify-center">
          {/* Create Account Button */}
          <Link href={"/courses"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Create Account
            </Button>
          </Link>
          {/* Book a Call Button */}
          <Link href={"/contact"}>
            <Button
              borderRadius="1.75rem"
              className="bg-transparent border-white"
            >
              Book a Call
            </Button>
          </Link>
        </div>
      </div>
      {/* Optional: Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
    </div>
  );
}

export default HeroSection;
