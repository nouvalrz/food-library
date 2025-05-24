import Footer from "@/ui/foods/Footer";
import Header from "@/ui/foods/Header";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 mt-4 px-2">{children}</div>
      <div className="container mx-auto">
        <Footer />
      </div>
    </div>
  );
};

export default layout;
