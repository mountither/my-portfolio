import autoAnimate from "@formkit/auto-animate";
import { useEffect, useRef, useState } from "react";
import { MdOutlineReadMore, MdClose } from "react-icons/md";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

import { ProjectData, TECH_STACK_BG_COLOURS } from "../fixtures/ProjectData";

type ProjectCardProps = {
  containerStyles?: string;
  textStyles?: string;
  iconStyles?: string;
  data: ProjectData;
};

const ProjectCard = ({
  containerStyles,
  textStyles,
  iconStyles,
  data,
}: ProjectCardProps) => {
  const [enableOverlay, setEnableOverlay] = useState<boolean>(false);
  const iconParent = useRef(null);

  useEffect(() => {
    iconParent.current && autoAnimate(iconParent.current, { duration: 150 });
  }, [iconParent]);

  return (
    <div
      className={`relative h-[500px] rounded-3xl select-none overflow-hidden w-full ${data.bgColour}
      ${data.cardSize === "md" ? `sm:w-[48%]` : ""}
      ${data.cardSize === "sm" ? `sm:w-[37%]` : ""}
      ${containerStyles}`}
    >
      <div
        className={`absolute ${
          enableOverlay ? `opacity-100` : "opacity-0 invisible"
        } w-full transition-all duration-300 ease-in-out z-10 h-full rounded-3xl backdrop-blur-xl bg-black/60 overflow-y-scroll scrollbar-thumb-gray-400 scrollbar-track-transparent scrollbar-thin text-white`}
      >
        <div className="sm:py-12 sm:px-10 px-5 py-12 select-text">
          <h1 className={`text-2xl sm:text-3xl font-bold ${textStyles}`}>
            {data.title}
          </h1>
          <div className="mt-5">
            <div className="flex flex-row flex-wrap items-start gap-4 mt-3">
              {(
                Object.keys(
                  data?.techStack
                ) as (keyof ProjectData["techStack"])[]
              ).map((category, i) => (
                <div
                  key={category}
                  className={`rounded-xl py-5 px-3 border-[1px] border-gray-200 border-opacity-5`}
                >
                  <h1 className="text-sm font-bold">{category}</h1>
                  <div className="mt-2">
                    {data?.techStack[category] &&
                      data.techStack[category]?.map((stack) => (
                        <div className="mb-3" key={stack.title}>
                          <div className="flex flex-row items-center gap-1">
                            <div
                              className={`h-2 w-2 rounded-full ${data.bgColour}`}
                            />{" "}
                            <div className="flex flex-row item-center">
                              <p
                                key={stack.title}
                                className="text-sm font-medium underline"
                              >
                                {stack.title}
                              </p>
                              {/* Stack Links */}
                              {stack?.links && stack?.links.length > 0 ? (
                                <div className="ml-2 flex flex-row items-center gap-2">
                                  {stack.links?.map((link) => {
                                    const renderStackLinkIcon = () => {
                                      if (link.type === "source-code") {
                                        return (
                                          <FaGithub size={15} color="white" />
                                        );
                                      } else {
                                        return (
                                          <HiOutlineExternalLink
                                            size={15}
                                            color="white"
                                          />
                                        );
                                      }
                                    };
                                    return (
                                      <a
                                        key={stack.title}
                                        href={link.url}
                                        target={"_blank"}
                                        className={`p-1 bg-black bg-opacity-40 rounded-full hover:opacity-40 transition-all duration-200 ease-in-out`}
                                      >
                                        {renderStackLinkIcon()}
                                      </a>
                                    );
                                  })}
                                </div>
                              ) : null}
                            </div>
                          </div>
                          <p className="text-sm ml-3 mt-1">{stack.desc}</p>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        ref={iconParent}
        className={`absolute z-20 top-3 sm:right-4 right-3 ${
          !enableOverlay ? "bg-gray-200" : "bg-transparent"
        } bg-opacity-20 rounded-full p-1 hover:bg-opacity-30 transition duration-500 ease-in-out`}
      >
        <div
          className="cursor-pointer"
          key={`${enableOverlay}`}
          onClick={() => {
            if (Boolean(window.navigator.vibrate)) {
              navigator.vibrate(50);
            }
            setEnableOverlay(!enableOverlay);
          }}
        >
          {!enableOverlay ? (
            <MdOutlineReadMore className={`text-white ${iconStyles} w-7 h-7`} />
          ) : (
            <MdClose className={`text-white ${iconStyles} w-7 h-7`} />
          )}
        </div>
      </div>

      <div className="absolute bottom-10 left-5 pr-2">
        <p className="text-gray-100 text-sm">{data.category}</p>
        <h1 className={`text-3xl md:text-4xl font-bold  ${textStyles} `}>
          {data.title}
        </h1>
        <p className={`text-base font-medium mt-2 ${textStyles}`}>
          {data.desc}
        </p>
      </div>
      <a
        href={data.link}
        target={"_blank"}
        className="absolute top-4 left-3 cursor-pointer hover:opacity-50 z-20 transition-opacity duration-200 ease-in-out"
      >
        <HiOutlineExternalLink
          size={22}
          color={`${enableOverlay ? "#e0e0e0" : "#3b3b3b"}`}
          className={"transition-all  duration-200 ease-in-out"}
        />
      </a>
    </div>
  );
};

export default ProjectCard;
