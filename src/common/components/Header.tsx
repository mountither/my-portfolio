import React from "react";
import Container from "../layout/Container";
import GithubLogo from "../../assets/github-logo.png";
const Header = () => {
  return (
    <>
      <div className="w-full mb-20 top-0 sticky bg-white/50 pb-2 backdrop-blur-3xl z-[1000]">
        <Container>
          <div className="flex flex-row justify-between">
            <p className="text-base font-bold">
              Mountither's Portfolio
              <span className="text-red-300 text-bold text-base">.</span>
            </p>
            <div className="flex flex-row items-center sm:gap-10 gap-5">
            <a href = "mailto: enlill6060@gmail.com"  className="hover:opacity-60 transition-opacity ease-in-out duration-300">
              <p className="text-xs sm:text-sm font-medium">Contact</p>
            </a>
            <a href="https://github.com/mountither" target={"_blank"} className="hover:opacity-60 cursor-pointer transition duration-500 ease-in-out">
              <img src={GithubLogo} width={"23"} height={"23"} />
            </a>
            </div>

          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
