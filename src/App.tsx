import "./App.css";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
function App() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const jsonData = Object.fromEntries(formData.entries());
    console.log("Form Data:", jsonData);

    try {
      const parseJson = loginSchema.parse(jsonData);
      console.log({ parseJson });

      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        body: JSON.stringify(jsonData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to log in");
      }

      const token = await response.json();
      console.log({ token });
      return token;
    } catch (error) {
      console.error("Error:", error);
      // Handle other errors like validation, network issues, etc.
    }
  };

  return (
    <>
      <h1 className="text-red-500 text-2xl mb-2">Login</h1>
      <form onSubmit={handleSubmit}>
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
