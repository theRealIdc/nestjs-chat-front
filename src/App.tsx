import "./App.css";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";

function App() {
  return (
    <>
      <h1 className="text-red-500 text-2xl mb-2">Login</h1>
      <form>
        <div className="container mx-auto flex flex-col justify-center items-center gap-2">
          <Input
            placeholder="Enter your email"
            type="email"
            name="email"
            className="w-52"
          />

          <Input
            placeholder="Enter your password"
            type="password"
            name="password"
            className="w-52"
          />
          <Button
            type="submit"
            className="rounded-full shadow-lg hover:scale-105 mb-2"
          >
            Login
          </Button>
        </div>
        <p className="cursor-pointer">Register?</p>
      </form>
    </>
  );
}

export default App;
