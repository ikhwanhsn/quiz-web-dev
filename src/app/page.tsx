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
            color={`bg-blue-700 hover:shadow-md hover:shadow-blue-500 ${
              onSelect === "html"
                ? "border-8 border-blue-500"
                : "border-8 border-blue-700"
            }`}
            onClick={() => setOnSelect("html")}
          />
          <CategoryQuestion
            title="CSS"
            description="Style your web pages using CSS properties and layout techniques."
            color={`bg-blue-400 hover:shadow-md hover:shadow-blue-400 ${
              onSelect === "css"
                ? "border-8 border-blue-200"
                : "border-8 border-blue-400"
            }`}
            onClick={() => setOnSelect("css")}
          />
          <CategoryQuestion
            title="JavaScript"
            description="Master JavaScript fundamentals for dynamic and interactive websites."
            color={`bg-red-500 hover:shadow-md hover:shadow-red-500 ${
              onSelect === "javascript"
                ? "border-8 border-red-300"
                : "border-8 border-red-500"
            }`}
            onClick={() => setOnSelect("javascript")}
          />
          <CategoryQuestion
            title="ReactJS"
            description="Build powerful UIs with ReactJS components, props, and state."
            color={`bg-orange-500 hover:shadow-md hover:shadow-orange-500 ${
              onSelect === "reactjs"
                ? "border-8 border-orange-300"
                : "border-8 border-orange-500"
            }`}
            onClick={() => setOnSelect("reactjs")}
          />
          <CategoryQuestion
            title="NextJS"
            description="Create fast, optimized websites using the NextJS framework."
            color={`bg-green-500 hover:shadow-md hover:shadow-green-500 ${
              onSelect === "nextjs"
                ? "border-8 border-green-300"
                : "border-8 border-green-500"
            }`}
            onClick={() => setOnSelect("nextjs")}
          />
        </section>
        <center>
          <button
            className="btn btn-primary text-white mt-5"
            onClick={() => {
              const modal = document.getElementById(
                "my_modal_1"
              ) as HTMLDialogElement;
              modal?.showModal();
            }}
          >
            Start Quiz
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box bg-white">
              <h3 className="font-bold text-lg uppercase">
                {onSelect + " Quiz"}
              </h3>
              <p className="py-4">
                There will be five multiple choice questions that you must
                answer correctly, are you ready to start now?
              </p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-error text-white">Cancel</button>
                </form>
                <Link
                  href={`/quiz/${onSelect}`}
                  className="btn btn-primary text-white"
                  onClick={() => {
                    const modal = document.getElementById(
                      "my_modal_1"
                    ) as HTMLDialogElement;
                    modal?.close();
                  }}
                >
                  Start Quiz
                </Link>
              </div>
            </div>
          </dialog>
        </center>
      </section>
    </main>
  );
}
