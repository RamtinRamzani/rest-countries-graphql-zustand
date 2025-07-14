import React from "react";

interface MainContainerProps {
  children: React.ReactNode;
  className?: string;
}

const MainContainer = ({ children, className }: MainContainerProps) => {
  return (
    <section
      className={`mx-[clamp(1rem,4vw,6rem)] md:mx-[clamp(4rem,8vw,8rem)] max-w-[1900px] ${className}`}
    >
      {children}
    </section>
  );
};

export default MainContainer;
