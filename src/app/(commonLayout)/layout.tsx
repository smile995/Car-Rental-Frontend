import type { Metadata } from "next";
import Footer from "./components/page/shared/Footer";
import NavBar from "./components/page/shared/Navbar";

export const metadata: Metadata = {
  title: "RideMate",
  description: "Next Level Riding Sharing Service",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <NavBar></NavBar>
      <div className="lg:mx-5">{children}</div>
      <Footer></Footer>
    </div>
  );
}
