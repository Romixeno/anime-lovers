import Hero from "@/components/Hero";
import React from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Hero />
      {children}
    </>
  );
};

export default HomeLayout;
