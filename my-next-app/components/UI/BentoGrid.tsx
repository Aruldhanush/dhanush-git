'use client'
import { useState } from "react";
import { cn } from "../utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
// import { GlobeDemo } from "./GridGlobe";
import {  GlobeDemo  } from "./GridGlobe"
import  animationData from '../../data/confetti.json';
import Lottie from "react-lottie";
import MagicButtons from "./magicButtons";
import { IoCopyOutline } from "react-icons/io5";
interface GridItemProps{
   title:string;
   description:string;
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   header?: React.ReactNode | undefined;
   img?:string;
   id:number;
   imgClassName:string;
   titleClassName:string;
   spareImg:string;


}
interface BentoGridProps{
    className?:string ;
    items?:GridItemProps[];
    children?: React.ReactNode;
}
export const BentoGrid = ({ className,items =[] }:BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1  md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {items.map((item) => (
        <BentoGridItem
          key={item.id}
          title={item.title}
          description={item.description}
          header={item.header}
          img={item.img}
          id={item.id} 
          imgClassName={item.imgClassName} 
          titleClassName={item.titleClassName} 
          spareImg={item.spareImg}                    
           />
      ))}
    </div>
  );
};

export const BentoGridItem = ({
    title,
    description,
    id,
    img,
    imgClassName,
    spareImg,
    titleClassName,
} : GridItemProps) => {

  const [copied,setCopied] = useState(false)
    const handleCopied =() =>{
      navigator.clipboard.writeText("contact@jsmastery.pro");
      setCopied(true);
    }
  return (
    <div
    className={cn(
      // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
      "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1] "
      
    )}
    style={{

      background: "rgb(4,7,29)",
      backgroundColor:
        "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
    }}
  >
    {/* add img divs */}
    <div className={`${id === 1 && "flex justify-center"} h-full`}>
      <div className="w-full h-full absolute">
        {img && (
          <img
            src={img}
            alt={img}
            className={cn(imgClassName, "object-cover object-center ")}
          />
        )}
      </div>
      <div
        className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
          } `}
      >
        {spareImg && (
          <img
            src={spareImg}
            alt={spareImg}
            //   width={220}
            className="object-cover object-center w-full h-full"
          />
        )}
      </div>
       {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

      <div
        className={cn(
          titleClassName,
          "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
        )}
      >
        {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
        <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
          {description}
        </div>
        {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
        {/* remove mb-2 mt-2 */}
        <div
          className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
        >
          {title}
        </div>

        {/* for the github 3d globe */}
        {id === 2 && <GlobeDemo/>}

        {/* Tech stack list div */}
        {id === 3 && (
          <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
            {/* tech stack lists */}
            <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
            <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]" />
              {['React.js', "Node.js","TypeScript.js"].map((item) => (
                <span
                  key={item}
                  className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                  lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                >
                  {item}
                </span>
              ))}
             
            </div>
           
          </div>
        )}

        {id === 6 && (
          <div className="mt-5 relative">
           <div className={`absolute -bottom-5 right-0`} >
            <Lottie options={{
              loop:copied,
              autoplay:copied,
              animationData,
              rendererSettings: {
                preserveAspectRatio:'xMidyMid slice'
              }
            }} />
            </div>
            <MagicButtons title={copied ?'Email Copied' : 'Copt my email' } 
            icon={<IoCopyOutline />} position={"left"} 
            otherClasses="`bg-[#161a31]"
            handleClick={handleCopied}
            />
            </div>
        )}
        
      </div>
    </div>
  </div>
);
};