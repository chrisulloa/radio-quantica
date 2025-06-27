import { NavBar } from "./navbar";
import PlayerView from "./player";

export default function Layout({ children }: { children: any }) {
  return (
    <div className="flex flex-col h-full min-h-screen">
      <div className="fixed z-50 w-full">
        <NavBar></NavBar>
      </div>
      <div className="pt-18 flex-1 mb-16">{children}</div>
      <div className="fixed z-50 bottom-0">
        <PlayerView></PlayerView>
      </div>
    </div>
  );
}
