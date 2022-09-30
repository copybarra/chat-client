import ProfileBar from "../components/ProfileBar";
import BottomMenu from "../components/BottomMenu";

export default function Chat() {
  return (
    <div className="grid grid-cols-[.4fr_1fr] max-w-screen max-h-screen justify-items-start content-center">
      <div className="grid grid-rows-[.13fr_1fr_.115fr] min-w-[300px] w-full h-screen items-start text-white border-r-2 border-r-white">
        <ProfileBar />
        <div className="flex h-full items-center justify-center text-white border-2 border-white">
          Side Chat Container
        </div>
        <div className="flex h-full items-center justify-center text-white">
          <BottomMenu />
        </div>
      </div>
      <div className="grid w-full h-screen items-center justify-center text-white">
        Chat Body Container
      </div>
    </div>
  );
}