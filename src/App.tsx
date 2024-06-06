import Header from "./common/components/Header";
import ProjectCard from "./common/components/ProjectCard";
import { projectData } from "./common/fixtures/ProjectData";
import Container from "./common/layout/Container";
import { chance } from "./common/utils/MockData";
import { CgCornerRightDown } from "react-icons/cg";

function App() {
  return (
    <div className="pb-20 pt-16">
      <Header />
      <Container containerStyles="text-black main-content">
        <div className="px-2">
          <h1 className="text-2xl sm:text-4xl mb-1">
            <span className="font-bold">
              Full Stack Web & Mobile Developer{" "}
            </span>
          </h1>
          <p className="text-sm sm:text-base font-medium mt-5">
            Passionate about mobile and web development. 
            <p className="my-1">I enjoy learning new ways of developing software.</p>
            I have 5+ years experience with react frameworks (React, React Native & Next JS) with
            Typescript, in addition to backend frameworks/services such as; Node JS and
            Firebase.
            <div className="flex flex-row items-end flex-wrap mt-1">
              <p className="pb-2">
                The following are projects I have developed
              </p>
              <CgCornerRightDown size={25} className="text-blue-400 ml-2" />
            </div>
          </p>
        </div>

        <div className="relative flex sm:gap-5 gap-10 justify-around flex-col sm:flex-row flex-wrap mt-12">
          {projectData.map((data) => (
            <ProjectCard
              key={data.title}
              textStyles={`text-white`}
              data={data}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default App;
