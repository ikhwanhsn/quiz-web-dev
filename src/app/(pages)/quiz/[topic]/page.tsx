"use client";

import { useParams } from "next/navigation";

const Quiz = () => {
  const { topic } = useParams();
  return (
    <main className="min-h-screen w-full flex items-center justify-center">
      <h1>Quiz</h1>
      <p>{topic}</p>
    </main>
  );
};

export default Quiz;
