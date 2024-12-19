"use client";

import { questions } from "@/app/services/dataQuestion";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

const Quiz = () => {
  const router = useRouter();
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
        <p>
          {answerSelected.first}|{answerSelected.second}|{answerSelected.third}|
          {answerSelected.fourth}|{answerSelected.fifth}
        </p>
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
              const my_modal_1 = document.getElementById(
                "my_modal_1"
              ) as HTMLDialogElement;
              answerPage < 5 && setAnswerPage(answerPage + 1);
              answerPage === 5 && my_modal_1?.showModal();
            }}
          >
            {answerPage > 4 ? "Check Score" : "Next Question"}
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box bg-white">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">
                Press ESC key or click the button below to close
              </p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-error text-white">Cancel</button>
                </form>
                <button
                  className="btn btn-primary text-white"
                  onClick={() => {
                    const my_modal_1 = document.getElementById(
                      "my_modal_1"
                    ) as HTMLDialogElement;
                    my_modal_1?.close();
                    const my_modal_2 = document.getElementById(
                      "my_modal_2"
                    ) as HTMLDialogElement;
                    my_modal_2?.showModal();
                  }}
                >
                  Finish
                </button>
              </div>
            </div>
          </dialog>
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box bg-white">
              <h3 className="font-bold text-lg">Congrats</h3>
              <p className="py-4">
                Press ESC key or click the button below to close
              </p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button
                    className="btn btn-error text-white"
                    onClick={() => router.push("/")}
                  >
                    Close
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </section>
      </center>
    </main>
  );
};

export default Quiz;
