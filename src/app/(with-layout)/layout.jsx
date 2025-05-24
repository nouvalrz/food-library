import Footer from "@/ui/Footer";
import Header from "@/ui/Header";
import React from "react";
import { cookies } from "next/headers";

const layout = async ({ children }) => {
  const cookiesStore = await cookies();
  const token = cookiesStore.get("token")?.value;

  return (
    <div className="min-h-screen flex flex-col">
      <Header loggedIn={token} />
      <div className="flex-1 mt-4 px-2">{children}</div>
      <div className="container mx-auto">
        <Footer />
      </div>
    </div>
  );
};

export default layout;
