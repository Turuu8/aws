import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [login, setLogin] = useState(false);
  const signUp = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const restul = await axios.post("https://mrtqvz6k34.execute-api.us-east-1.amazonaws.com/dev/signUp", { email: email, password: password });
      console.log(restul.data);
    } catch (error) {
      console.log(error);
    }
  };

  const signIn = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const restul = await axios.post("https://mrtqvz6k34.execute-api.us-east-1.amazonaws.com/dev/signIn", { email: email, password: password });
      router.push("/uploud");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="w-full h-[100vh] bg-black flex items-center justify-center">
        <form className="flex flex-col gap-[10px]" onSubmit={async (e) => (login ? await signUp(e) : await signIn(e))}>
          <input className="w-[300px] h-[30px] p-[10px] rounded-md" placeholder="email" type="email" onChange={(e) => setEmail(e.target.value)} />
          <input
            className="w-[300px] h-[30px] p-[10px] rounded-md"
            placeholder="password"
            type="password"
            onChange={(e) => setpassword(e.target.value)}
          />
          <button className="w-[300px] h-[30px] text-[#000] bg-[#fff] text-center rounded-md" type="submit">
            {login ? "Sign up" : "Sign in"}
          </button>
          <div className="w-[300px] flex justify-end">
            <button onClick={() => setLogin(!login)} className="text-[#fff]" type="button">
              {login ? "Sign in" : "Sign up"}
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
