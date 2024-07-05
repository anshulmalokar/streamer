"use client";
import React, { useCallback, useState } from "react";
import Input from "@/components/input";

type Props = {};

export default function page({}: Props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [varient, setVarient] = useState("login");

  const toggleEvent = useCallback(() => {
    setVarient((val) => (val === "login" ? "register" : "login"));
  }, []);

  return (
    <div className="h-full w-full relative bg-[url(/images/hero.jpg)] bg-no-repeat bg-center bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-2 py-2">
          <img src="/images/logo.png" alt="logo" className="h-10 w-30" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-80 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {varient === "login" ? "Sign in" : "Register"}
            </h2>
            <div className="flex flex-col gap-4 text-white">
              {varient === "register" && (
                <Input
                  label="Username"
                  onChange={(e: any) => {
                    setName(e.target.value);
                  }}
                  id="name"
                  value={name}
                />
              )}
              <Input
                label="Email"
                onChange={(e: any) => {
                  setEmail(e.target.value);
                }}
                id="email"
                type="email"
                value={email}
              />
              <Input
                label="Password"
                onChange={(e: any) => {
                  setPassword(e.target.value);
                }}
                id="password"
                type="password"
                value={password}
              />
            </div>
            <button className="bg-red-600 w-full p-4 mt-3 rounded-md">
              {
                varient === 'login' ? 'Login' : 'Sign up'
              }
            </button>
            <p className="text-slate-600 w-full text-center">
              {
                varient === 'login' ? "First time using Netflix" : "Already have an account"
              }
              <span
                onClick={toggleEvent}
                className="text-white hover:cursor-pointer"
              >
                Create an account
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
