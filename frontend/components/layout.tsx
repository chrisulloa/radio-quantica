import { Footer } from "./footer";
import { NavBar } from "./navbar";
import dynamic from "next/dynamic";

const DynamicPlayer = dynamic(() => import("./player"), {
  loading: () => <div />,
});

export default function Layout({ children }: { children: any }) {
  return (
    <div className="flex flex-col h-full min-h-screen">
      <div className="fixed z-50 w-full">
        <NavBar></NavBar>
      </div>
      <div className="pt-[4.5rem] flex-1 mb-16">{children}</div>
      <div className="fixed z-50 bottom-0">
        <DynamicPlayer></DynamicPlayer>
      </div>
    </div>
  );
}
