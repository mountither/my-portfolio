import Header from "./common/components/Header";
import ProjectCard from "./common/components/ProjectCard";
import { projectData } from "./common/fixtures/ProjectData";
import Container from "./common/layout/Container";
import { chance } from "./common/utils/MockData";

function App() {
  return (
    <div className="pb-20">
      <Header />
      <Container containerStyles="text-black">
        <div className="px-2">
          <h1 className="text-4xl mb-1">
            <span className="font-bold">Full Stack Web & Mobile Developer </span>
          </h1>
          <p className="text-base font-medium mt-5">
            Interested in mobile and web development. I have 3 years experience with the react js and react native frameworks. The following are projects I have developed ↓
          </p>
        </div>

        <div className="relative flex gap-5 justify-around flex-col sm:flex-row flex-wrap mt-10">
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
