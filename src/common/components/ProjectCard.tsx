import { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { MdClose, MdOutlineReadMore } from "react-icons/md";

import { ProjectData } from "../fixtures/ProjectData";
import { useAnalytics } from "use-analytics";

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
  const { track } = useAnalytics();

  const handleCardClick = () => {
    if (!enableOverlay) {
      track("CardClicked", { title: data.title });
    }
    setEnableOverlay(!enableOverlay);
  };

  const handleLinkClick = (url: string) => {
    track("External Link Clicked", { url });
  };
  return (
    <div
      className={`relative sm:h-[500px] h-[450px] rounded-3xl select-none overflow-hidden w-full ${
        data.bgColour
      }
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
              {(Object.keys(data?.stack) as (keyof ProjectData["stack"])[]).map(
                (category, i) => (
                  <div
                    key={category}
                    className={`rounded-xl py-2 px-3 border-[1px] border-gray-200 border-opacity-5`}
                  >
                    <h1 className="text-base">{category}</h1>
                    <div className="mt-3">
                      {data?.stack[category] &&
                        data.stack[category]?.map((stack) => (
                          <div className="mb-3" key={stack.title}>
                            <div className="flex flex-row items-center gap-1">
                              <div
                                className={`h-2 w-2 rounded-full ${data.bgColour}`}
                              />{" "}
                              <div className="flex flex-row item-center">
                                <p
                                  key={stack.title}
                                  className="text-sm font-[700]"
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
                                            <FaCode size={15} color="white" />
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
                                          onClick={() =>
                                            handleLinkClick(link.url)
                                          }
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
                )
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`absolute z-20 top-3 sm:right-4 right-3 ${
          !enableOverlay ? "bg-gray-200" : "bg-transparent"
        } bg-opacity-20 rounded-full p-1 hover:bg-opacity-30 transition duration-500 ease-in-out`}
      >
        <div
          className={`cursor-pointer`}
          key={`${enableOverlay}`}
          onClick={handleCardClick}
        >
          {!enableOverlay ? (
            <MdOutlineReadMore className={`text-white ${iconStyles} w-7 h-7`} />
          ) : (
            <MdClose className={`text-white ${iconStyles} w-7 h-7`} />
          )}
        </div>
      </div>
      {data.links && data.links?.length > 0 ? (
        <div className="absolute top-4 left-3 flex flex-row items-center gap-3">
          {data.links.map((link) => (
            <a
              href={link}
              onClick={() => handleLinkClick(link)}
              target={"_blank"}
              className="cursor-pointer hover:opacity-50 z-20 transition-opacity duration-200 ease-in-out"
            >
              <HiOutlineExternalLink
                size={30}
                color={`${enableOverlay ? "#e0e0e0" : "#3b3b3b"}`}
                className={"transition-all  duration-200 ease-in-out"}
              />
            </a>
          ))}
        </div>
      ) : null}

      <div className="absolute bottom-10 left-5 pr-2">
        <p className="text-gray-100 text-sm">{data.category}</p>
        <h1 className={`text-3xl md:text-4xl font-bold  ${textStyles} `}>
          {data.title}
        </h1>
        <p className={`text-base font-medium mt-2 ${textStyles}`}>
          {data.desc}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
