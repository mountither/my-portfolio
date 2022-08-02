import { ReactElement, ReactNode } from "react";

type Props = {
  children: ReactNode;
  containerStyles?: string;
};

const Container = ({
  children,
  containerStyles = "",
}: Props): ReactElement => {
  return (
    <div
      className={`relative flex-col pt-5 flex max-w-screen-lg mx-auto px-2 ${containerStyles}`}
    >
      {children}
    </div>
  );
};

export default Container;
