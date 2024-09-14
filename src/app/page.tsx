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
            description="lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa quasi reiciendis rerum ducimus dolorum."
            color={`bg-blue-700 hover:bg-blue-800 ${
              onSelect === "html" && "border-4 border-gray-700"
            }`}
            onClick={() => setOnSelect("html")}
          />
          <CategoryQuestion
            title="CSS"
            description="lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa quasi reiciendis rerum ducimus dolorum."
            color={`bg-blue-400 hover:bg-blue-500 ${
              onSelect === "css" && "border-4 border-gray-700"
            }`}
            onClick={() => setOnSelect("css")}
          />
          <CategoryQuestion
            title="JavaScript"
            description="lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa quasi reiciendis rerum ducimus dolorum."
            color={`bg-red-500 hover:bg-red-600 ${
              onSelect === "javascript" && "border-4 border-gray-700"
            }`}
            onClick={() => setOnSelect("javascript")}
          />
          <CategoryQuestion
            title="ReactJS"
            description="lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa quasi reiciendis rerum ducimus dolorum."
            color={`bg-orange-500 hover:bg-orange-600 ${
              onSelect === "reactjs" && "border-4 border-gray-700"
            }`}
            onClick={() => setOnSelect("reactjs")}
          />
          <CategoryQuestion
            title="NextJS"
            description="lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa quasi reiciendis rerum ducimus dolorum."
            color={`bg-green-500 hover:bg-green-600 ${
              onSelect === "nextjs" && "border-4 border-gray-700"
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
