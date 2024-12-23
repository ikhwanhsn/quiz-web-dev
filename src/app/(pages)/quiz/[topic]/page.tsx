"use client";

import { questions } from "@/app/services/dataQuestion";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Quiz = () => {
  const router = useRouter();
  const { topic } = useParams();
  const [answerPage, setAnswerPage] = useState(1);
  const [score, setScore] = useState(0);
  const [isFinish, setIsFinish] = useState(false);
  const [answerSelected, setAnswerSelected] = useState({
    first: 0,
    second: 0,
    third: 0,
    fourth: 0,
    fifth: 0,
  });
  const checkAllAnswer = () => {
    if (
      answerSelected.first === 0 ||
      answerSelected.second === 0 ||
      answerSelected.third === 0 ||
      answerSelected.fourth === 0 ||
      answerSelected.fifth === 0
    ) {
      return false;
    } else {
      return true;
    }
  };
  const checkScore = () => {
    const topicIndexMap: Record<
      "html" | "css" | "javascript" | "reactjs" | "nextjs",
      number
    > = {
      html: 0,
      css: 1,
      javascript: 2,
      reactjs: 3,
      nextjs: 4,
    };

    const topicIndex = topicIndexMap[topic as keyof typeof topicIndexMap];

    if (topicIndex !== undefined) {
      const topicQuestions = questions[topicIndex].questions;

      const answerKeys: Array<
        "first" | "second" | "third" | "fourth" | "fifth"
      > = ["first", "second", "third", "fourth", "fifth"];

      answerKeys.forEach((key, index) => {
        if (answerSelected[key] === topicQuestions[index].answer + 1) {
          setScore((prevScore) => prevScore + 1);
        }
      });
    }
    return score;
  };

  return (
    <main className="min-h-screen w-full flex items-center justify-center">
      <center className="w-1/2">
        <h1 className="text-xl font-bold capitalize">Category: {topic}</h1>
        <p className="text-3xl font-semibold mt-2">{answerPage} / 5</p>
        <p className="text-xl font-bold mt-3">
          {topic === "html" && questions[0].questions[answerPage - 1].question}
          {topic === "css" && questions[1].questions[answerPage - 1].question}
          {topic === "javascript" &&
            questions[2].questions[answerPage - 1].question}
          {topic === "reactjs" &&
            questions[3].questions[answerPage - 1].question}
          {topic === "nextjs" &&
            questions[4].questions[answerPage - 1].question}
        </p>
        <section className="mt-5 w-full grid grid-cols-2 gap-2">
          <section>
            <section className="flex items-center gap-3 border-2 p-2 rounded-md cursor-pointer">
              <input
                type="radio"
                name="radio-1"
                className="radio radio-primary checked:bg-white"
                id="radio-1"
                checked={
                  (answerPage === 1 && answerSelected.first === 1) ||
                  (answerPage === 2 && answerSelected.second === 1) ||
                  (answerPage === 3 && answerSelected.third === 1) ||
                  (answerPage === 4 && answerSelected.fourth === 1) ||
                  (answerPage === 5 && answerSelected.fifth === 1)
                }
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
                {topic === "html" &&
                  questions[0].questions[answerPage - 1].options[0]}
                {topic === "css" &&
                  questions[1].questions[answerPage - 1].options[0]}
                {topic === "javascript" &&
                  questions[2].questions[answerPage - 1].options[0]}
                {topic === "reactjs" &&
                  questions[3].questions[answerPage - 1].options[0]}
                {topic === "nextjs" &&
                  questions[4].questions[answerPage - 1].options[0]}
              </label>
            </section>
            <section className="flex items-center gap-3 border-2 p-2 rounded-md cursor-pointer mt-2">
              <input
                type="radio"
                name="radio-1"
                className="radio radio-primary checked:bg-white"
                id="radio-2"
                checked={
                  (answerPage === 1 && answerSelected.first === 2) ||
                  (answerPage === 2 && answerSelected.second === 2) ||
                  (answerPage === 3 && answerSelected.third === 2) ||
                  (answerPage === 4 && answerSelected.fourth === 2) ||
                  (answerPage === 5 && answerSelected.fifth === 2)
                }
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
                {topic === "html" &&
                  questions[0].questions[answerPage - 1].options[1]}
                {topic === "css" &&
                  questions[1].questions[answerPage - 1].options[1]}
                {topic === "javascript" &&
                  questions[2].questions[answerPage - 1].options[1]}
                {topic === "reactjs" &&
                  questions[3].questions[answerPage - 1].options[1]}
                {topic === "nextjs" &&
                  questions[4].questions[answerPage - 1].options[1]}
              </label>
            </section>
          </section>
          <section>
            <section className="flex items-center gap-3 border-2 p-2 rounded-md cursor-pointer">
              <input
                type="radio"
                name="radio-1"
                className="radio radio-primary checked:bg-white"
                id="radio-3"
                checked={
                  (answerPage === 1 && answerSelected.first === 3) ||
                  (answerPage === 2 && answerSelected.second === 3) ||
                  (answerPage === 3 && answerSelected.third === 3) ||
                  (answerPage === 4 && answerSelected.fourth === 3) ||
                  (answerPage === 5 && answerSelected.fifth === 3)
                }
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
                {topic === "html" &&
                  questions[0].questions[answerPage - 1].options[2]}
                {topic === "css" &&
                  questions[1].questions[answerPage - 1].options[2]}
                {topic === "javascript" &&
                  questions[2].questions[answerPage - 1].options[2]}
                {topic === "reactjs" &&
                  questions[3].questions[answerPage - 1].options[2]}
                {topic === "nextjs" &&
                  questions[4].questions[answerPage - 1].options[2]}
              </label>
            </section>
            <section className="flex items-center gap-3 border-2 p-2 rounded-md cursor-pointer mt-2">
              <input
                type="radio"
                name="radio-1"
                className="radio radio-primary checked:bg-white"
                id="radio-4"
                checked={
                  (answerPage === 1 && answerSelected.first === 4) ||
                  (answerPage === 2 && answerSelected.second === 4) ||
                  (answerPage === 3 && answerSelected.third === 4) ||
                  (answerPage === 4 && answerSelected.fourth === 4) ||
                  (answerPage === 5 && answerSelected.fifth === 4)
                }
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
                {topic === "html" &&
                  questions[0].questions[answerPage - 1].options[3]}
                {topic === "css" &&
                  questions[1].questions[answerPage - 1].options[3]}
                {topic === "javascript" &&
                  questions[2].questions[answerPage - 1].options[3]}
                {topic === "reactjs" &&
                  questions[3].questions[answerPage - 1].options[3]}
                {topic === "nextjs" &&
                  questions[4].questions[answerPage - 1].options[3]}
              </label>
            </section>
          </section>
        </section>
        <section className="flex items-center justify-center gap-2">
          <button
            className={`btn btn-primary btn-outline mt-5 hover:!text-white text-white w-44 ${
              answerPage === 1 && "hidden"
            }`}
            onClick={() => setAnswerPage(answerPage - 1)}
          >
            Back
          </button>
          <button
            className="btn btn-primary mt-5 text-white w-44"
            onClick={() => {
              answerPage < 5 && setAnswerPage(answerPage + 1);
              answerPage === 5 &&
                checkAllAnswer() &&
                Swal.fire({
                  title: "Are you sure?",
                  text: "You won't be able to revert this!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, finish it!",
                }).then((result) => {
                  if (result.isConfirmed) {
                    Swal.fire({
                      title: "Congrats!",
                      text: `Your score is ${score} out of 5`,
                      icon: "success",
                    }).then(() => {
                      router.push("/");
                    });
                  }
                });
              answerPage === 5 &&
                !checkAllAnswer() &&
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "Please answer all question!",
                });
            }}
          >
            {answerPage > 4 ? "Finish" : "Next Question"}
          </button>
        </section>
      </center>
    </main>
  );
};

export default Quiz;
