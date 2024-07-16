"use client";
import { Github, LucideEarth } from "lucide-react";
import { FC } from "react";
import Badge from "./Badge";
import Image from "next/image";

type Props = {
  tecnologies: string[];
  projectImg: string;
  name: string;
  description: string;
  projectIndex: string;
  liveUrl: string;
  githubUrl: string;
};

const ProjectFolder: FC<Props> = ({
  githubUrl,
  liveUrl,
  description,
  name,
  projectImg,
  tecnologies,
  projectIndex,
}) => {
  return (
    <div className={`group relative flex flex-col items-center hover:z-50 `}>
      <div className="relative hover:scale-105 cursor-pointer w-[300px] h-[200px] md:w-[500px] md:h-[300px] bg-emerald-500 rounded-b-lg rounded-r-lg z-[10] p-2 flex flex-col items-center dark:shadow-white-md shadow-slate-md transition-all duration-500">
        <div
          className="border-r-[20px]   border-emerald-500 absolute  bg-emerald-500  text-white p-2 rounded-t-md -top-8 left-0 leading-tight"
          style={{
            clipPath: "polygon(0 0, calc(100% - 30px) 0, 100% 100%, 0 100%)",
          }}>
          Project #{projectIndex}
        </div>
        <Image
          src={projectImg}
          width={500}
          height={300}
          alt={projectImg.split("/")[1]}
          className="h-full rounded-lg  object-cover"
        />
      </div>
      <div
        className=" 
      w-[calc(300px-16px)] md:w-[calc(500px-16px)] 
      md:group-hover:animate-appearMD group-hover:animate-appearSM 
      h-full md:min-h-[250px] md:h-full
      flex flex-col justify-between p-2 md:p-4 bg-emerald-500  rounded-b-lg z-[5] absolute gap-2 dark:shadow-white-md shadow-slate-md">
        <span className="leading-3 mt-4">
          <h1 className="font-extrabold text-xs md:text-lg text-white tracking-widest">{name}</h1>
          <p className="text-xs md:text-sm  text-white">{description}</p>
        </span>
        <div className="md:my-2 flex items-center gap-2 leading-3 ">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={liveUrl}
            className="w-max flex items-center gap-2 text-xs bg-white text-slate-950 px-2 py-1 md:px-3 md:py-1.5 font-extrabold shadow-slate-sm  rounded-sm ">
            Live
            <LucideEarth className="md:w-4 md:h-4 w-2 h-2" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={githubUrl}
            className="w-max flex items-center gap-2 text-xs bg-white text-slate-950 px-2 py-1 md:px-3 md:py-1.5 font-extrabold shadow-slate-sm  rounded-sm ">
            Github <Github className="md:w-4 md:h-4 w-2 h-2" />
          </a>
        </div>
        <div className="hidden md:flex flex-wrap gap-2">
          <p className="text-white border-b text-lg font-extrabold tracking-widest w-full">
            Technologies
          </p>
          {tecnologies.map((item, i) => (
            <Badge key={i} text={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProjectFolder;
