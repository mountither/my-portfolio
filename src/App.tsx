import { CgCornerRightDown } from "react-icons/cg";
import Header from "./common/components/Header";
import ProjectCard from "./common/components/ProjectCard";
import { projectData } from "./common/fixtures/ProjectData";
import Container from "./common/layout/Container";

function App() {
  return (
    <div className="pb-20 pt-16">
      <Header />
      <Container containerStyles="text-black main-content">
        <div className="px-2">
          <h1 className="text-2xl sm:text-3xl">
            <span className="font-bold">
              Full Stack Web & Mobile Developer{" "}
            </span>
          </h1>
          <div className="border-b-0 border-r border-l border-t border-gray-200 p-4 rounded-xl mt-6">
            <p className="text-sm sm:text-base text-gray-700 mb-6 leading-relaxed">
              I'm a passionate Software Engineer with over 4 years of hands-on
              experience in web and mobile development. My expertise centres on
              React ecosystems - React, React Native, and Next.js - with a
              particular fondness for TypeScript. I've refined my skills across
              the full stack, utilising Node.js for robust backend solutions and
              Firebase for building scalable, real-time applications.
            </p>

            <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">
              My Technical Toolkit:
            </h2>

            <ul className="space-y-2 mb-6">
              <li className="flex items-start text-sm sm:text-base">
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
                <span className="text-gray-700">
                  <span className="font-medium">Frontend:</span> React, React
                  Native, Next.js, TypeScript, Vue.js, Svelte
                </span>
              </li>
              <li className="flex items-start text-sm sm:text-base">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-2"></span>
                <span className="text-gray-700">
                  <span className="font-medium">Backend:</span> Node.js,
                  Firebase (Cloud Functions, Firestore, Authentication)
                </span>
              </li>
            </ul>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Throughout my career, I've had the pleasure of bringing numerous
              projects to life, each one enhancing my ability to create
              efficient, user-friendly applications. I'm excited to share a
              selection of my most impactful work with you:
            </p>
          </div>
        </div>

        <div className="relative flex sm:gap-5 gap-10 justify-around flex-col sm:flex-row flex-wrap mt-6">
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
