import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen">
      <div className="flex w-full h-full">
        <div className="lg:pl-[264px]">
          {/* TODO: Navbar */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
