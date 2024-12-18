"use client";

import CategoryQuestion from "@/components/CategoryQuestion";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [onSelect, setOnSelect] = useState("html");
  return (
    <main className="min-h-screen w-full flex items-center justify-center">
      <section className="w-full">
        <h1 className="text-lg text-center max-w-xl mx-auto font-semibold">
          Choose one from categories below & see how many questions you can
          answer correctly out of 5 questions
        </h1>
        <section className="grid grid-cols-5 mx-auto items-center gap-4 w-fit mt-5">
          <CategoryQuestion
            title="HTML"
            description="Learn the basics of HTML elements and tags to build web structures."
            color={`bg-blue-700 ${
              onSelect === "html"
                ? "border-8 border-blue-500"
                : "border-8 border-blue-700"
            }`}
            onClick={() => setOnSelect("html")}
          />
          <CategoryQuestion
            title="CSS"
            description="Style your web pages using CSS properties and layout techniques."
            color={`bg-blue-400 ${
              onSelect === "css"
                ? "border-8 border-blue-200"
                : "border-8 border-blue-400"
            }`}
            onClick={() => setOnSelect("css")}
          />
          <CategoryQuestion
            title="JavaScript"
            description="Master JavaScript fundamentals for dynamic and interactive websites."
            color={`bg-red-500 ${
              onSelect === "javascript"
                ? "border-8 border-red-300"
                : "border-8 border-red-500"
            }`}
            onClick={() => setOnSelect("javascript")}
          />
          <CategoryQuestion
            title="ReactJS"
            description="Build powerful UIs with ReactJS components, props, and state."
            color={`bg-orange-500 ${
              onSelect === "reactjs"
                ? "border-8 border-orange-300"
                : "border-8 border-orange-500"
            }`}
            onClick={() => setOnSelect("reactjs")}
          />
          <CategoryQuestion
            title="NextJS"
            description="Create fast, optimized websites using the NextJS framework."
            color={`bg-green-500 ${
              onSelect === "nextjs"
                ? "border-8 border-green-300"
                : "border-8 border-green-500"
            }`}
            onClick={() => setOnSelect("nextjs")}
          />
        </section>
        <center>
          <Link
            href={`/quiz/${onSelect}`}
            className="btn btn-primary mt-5 shadow-lg shadow-blue-200 text-white"
          >
            Start Quiz
          </Link>
        </center>
      </section>
    </main>
  );
}
