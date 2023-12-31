import Menubar from "@/components/menubar";
import Toolbar from "@/components/toolbar";
import Sidebar from "@/components/sidebar";
import Statusbar from "@/components/statusbar";
import Scene from "@/components/scene";

export default function Page() {
  return (
    <>
      <Menubar />
      {/* <div className="bg-slate-500 absolute w-full h-full z-0" /> */}
      <Scene />
      {/* <Toolbar /> */}
      {/* <Sidebar /> */}
      <Statusbar />
    </>
  );
}
