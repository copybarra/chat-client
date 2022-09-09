import Button from "./components/Button";
import Headline from "./components/Headline";
import Input from "./components/Input";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-sm flex flex-col items-center justify-center">
        <Headline partial={'register'}></Headline>
        <div className="flex flex-col gap-4">
          <Input type="text" placeholder="username" />
          <Input type="email" placeholder="email" />
          <div className="flex w-full gap-4">
            <Button>continue</Button><Button>already registered?</Button>
          </div>
        </div>
      </div>
    </div>
  );
}