import React from "react";

type PageLayoutProps = {
  children: React.ReactNode;
};

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="pt-20 min-h-screen bg-black text-white">
      {children}
    </div>
  );
};

export default PageLayout;
