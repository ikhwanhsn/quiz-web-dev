"use client";

import { useParams } from "next/navigation";
import { useState } from "react";

const Quiz = () => {
  const { topic } = useParams();
  const [answerPage, setAnswerPage] = useState(1);
  const [answerSelected, setAnswerSelected] = useState({
    first: 0,
    second: 0,
    third: 0,
    fourth: 0,
    fifth: 0,
  });
  return (
    <main className="min-h-screen w-full flex items-center justify-center">
      <center className="w-1/2">
        <h1 className="text-xl font-bold capitalize">Category: {topic}</h1>
        <p className="text-3xl font-semibold mt-2">{answerPage} / 5</p>
        <p className="text-xl font-bold mt-3">
          What is the best programming language?
        </p>
        <section className="mt-5 w-full grid grid-cols-2 gap-2">
          <section>
            <section className="flex items-center gap-3 border-2 p-2 rounded-md cursor-pointer">
              <input
                type="radio"
                name="radio-2"
                className="radio radio-primary checked:bg-white"
                id="radio-1"
                onChange={() => {
                  answerPage === 1 &&
                    setAnswerSelected({ ...answerSelected, first: 1 });
                  answerPage === 2 &&
                    setAnswerSelected({ ...answerSelected, second: 1 });
                  answerPage === 3 &&
                    setAnswerSelected({ ...answerSelected, third: 1 });
                  answerPage === 4 &&
                    setAnswerSelected({ ...answerSelected, fourth: 1 });
                  answerPage === 5 &&
                    setAnswerSelected({ ...answerSelected, fifth: 1 });
                }}
              />
              <label
                htmlFor="radio-1"
                className="cursor-pointer w-full text-left"
              >
                HTML
              </label>
            </section>
            <section className="flex items-center gap-3 border-2 p-2 rounded-md cursor-pointer mt-2">
              <input
                type="radio"
                name="radio-2"
                className="radio radio-primary checked:bg-white"
                id="radio-2"
                onChange={() => {
                  answerPage === 1 &&
                    setAnswerSelected({ ...answerSelected, first: 2 });
                  answerPage === 2 &&
                    setAnswerSelected({ ...answerSelected, second: 2 });
                  answerPage === 3 &&
                    setAnswerSelected({ ...answerSelected, third: 2 });
                  answerPage === 4 &&
                    setAnswerSelected({ ...answerSelected, fourth: 2 });
                  answerPage === 5 &&
                    setAnswerSelected({ ...answerSelected, fifth: 2 });
                }}
              />
              <label
                htmlFor="radio-2"
                className="cursor-pointer w-full text-left"
              >
                CSS
              </label>
            </section>
          </section>
          <section>
            <section className="flex items-center gap-3 border-2 p-2 rounded-md cursor-pointer">
              <input
                type="radio"
                name="radio-2"
                className="radio radio-primary checked:bg-white"
                id="radio-3"
                onChange={() => {
                  answerPage === 1 &&
                    setAnswerSelected({ ...answerSelected, first: 3 });
                  answerPage === 2 &&
                    setAnswerSelected({ ...answerSelected, second: 3 });
                  answerPage === 3 &&
                    setAnswerSelected({ ...answerSelected, third: 3 });
                  answerPage === 4 &&
                    setAnswerSelected({ ...answerSelected, fourth: 3 });
                  answerPage === 5 &&
                    setAnswerSelected({ ...answerSelected, fifth: 3 });
                }}
              />
              <label
                htmlFor="radio-3"
                className="cursor-pointer w-full text-left"
              >
                Javascript
              </label>
            </section>
            <section className="flex items-center gap-3 border-2 p-2 rounded-md cursor-pointer mt-2">
              <input
                type="radio"
                name="radio-2"
                className="radio radio-primary checked:bg-white"
                id="radio-4"
                onChange={() => {
                  answerPage === 1 &&
                    setAnswerSelected({ ...answerSelected, first: 4 });
                  answerPage === 2 &&
                    setAnswerSelected({ ...answerSelected, second: 4 });
                  answerPage === 3 &&
                    setAnswerSelected({ ...answerSelected, third: 4 });
                  answerPage === 4 &&
                    setAnswerSelected({ ...answerSelected, fourth: 4 });
                  answerPage === 5 &&
                    setAnswerSelected({ ...answerSelected, fifth: 4 });
                }}
              />
              <label
                htmlFor="radio-4"
                className="cursor-pointer w-full text-left"
              >
                PHP
              </label>
            </section>
          </section>
        </section>
        <button
          className="btn btn-primary mt-5 text-white w-44"
          onClick={() => {
            answerPage < 5 && setAnswerPage(answerPage + 1);
            answerPage === 5 && alert("Your score is " + 100);
          }}
        >
          {answerPage > 4 ? "Check Score" : "Next Question"}
        </button>
      </center>
    </main>
  );
};

export default Quiz;
