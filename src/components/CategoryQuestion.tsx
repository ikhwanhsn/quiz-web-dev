import {
  TbBrandCss3,
  TbBrandHtml5,
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandReact,
} from "react-icons/tb";

type CategoryQuestionProps = {
  title: string;
  description: string;
  color: string;
  onClick?: () => void;
};

const CategoryQuestion = ({
  title,
  description,
  color,
  onClick,
}: CategoryQuestionProps) => {
  return (
    <main
      onClick={onClick}
      className={`w-52 text-center cursor-pointer h-64 rounded-t-3xl shadow-md p-5 text-white ${color}`}
    >
      {title === "HTML" && <TbBrandHtml5 size={50} className="mx-auto" />}
      {title === "CSS" && <TbBrandCss3 size={50} className="mx-auto" />}
      {title === "JavaScript" && (
        <TbBrandJavascript size={50} className="mx-auto" />
      )}
      {title === "ReactJS" && <TbBrandReact size={50} className="mx-auto" />}
      {title === "NextJS" && <TbBrandNextjs size={50} className="mx-auto" />}
      <h1 className="text-lg font-bold mt-1">{title}</h1>
      <p>{description}</p>
    </main>
  );
};

export default CategoryQuestion;
