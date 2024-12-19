export const questions = [
  // HTML Questions
  {
    topic: "HTML",
    questions: [
      {
        question:
          "What is the correct syntax for creating a hyperlink in HTML?",
        options: [
          "<link src='url'>",
          "<a href='url'>Link</a>",
          "<url href='url'>Link</url>",
          "<a src='url'>Link</a>",
        ],
        answer: 1,
      },
      {
        question: "Which HTML element is used to define important text?",
        options: ["<b>", "<i>", "<strong>", "<em>"],
        answer: 2,
      },
      {
        question:
          "What does the <meta> tag primarily affect in an HTML document?",
        options: ["Styling", "Structure", "Metadata", "Images"],
        answer: 2,
      },
      {
        question:
          "Which is the correct structure for the <html> tag hierarchy?",
        options: [
          "<html><body><head></body></html>",
          "<html><head><body></head></body></html>",
          "<html><head></head><body></body></html>",
          "<html><body></body><head></head></html>",
        ],
        answer: 2,
      },
      {
        question:
          "Which attribute is used to uniquely identify an HTML element?",
        options: ["class", "id", "name", "style"],
        answer: 1,
      },
    ],
  },
  // CSS Questions
  {
    topic: "CSS",
    questions: [
      {
        question: "Which property is used to change the text color in CSS?",
        options: ["font-color", "color", "text-color", "background-color"],
        answer: 1,
      },
      {
        question:
          "How do you select an element with the class name 'container'?",
        options: ["#container", ".container", "container", "class-container"],
        answer: 1,
      },
      {
        question: "What is the default position value for an HTML element?",
        options: ["relative", "absolute", "fixed", "static"],
        answer: 3,
      },
      {
        question: "What is the difference between em and rem in CSS?",
        options: [
          "em is relative to the parent element, while rem is relative to the root element.",
          "rem is relative to the parent element, while em is relative to the root element.",
          "Both are relative to the viewport size.",
          "Both are absolute units.",
        ],
        answer: 0,
      },
      {
        question:
          "How would you apply a fallback font in case the primary font fails to load?",
        options: [
          "font-family: Arial, sans-serif;",
          "font-family: Arial -> sans-serif;",
          "font: Arial sans-serif;",
          "font-fallback: Arial, sans-serif;",
        ],
        answer: 0,
      },
    ],
  },
  // JavaScript Questions
  {
    topic: "JavaScript",
    questions: [
      {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "let", "const", "All of the above"],
        answer: 3,
      },
      {
        question: "How do you write an 'if' statement in JavaScript?",
        options: [
          "if x == 5 then {}",
          "if (x == 5) {}",
          "if x = 5 {}",
          "if x equals 5 then {}",
        ],
        answer: 1,
      },
      {
        question: "Which method is used to convert a string into a number?",
        options: [
          "Number.parse()",
          "Number.parseInt()",
          "Number()",
          "Both b and c",
        ],
        answer: 3,
      },
      {
        question: "What is the difference between == and === in JavaScript?",
        options: [
          "== compares values, while === compares both values and types.",
          "=== compares values, while == compares both values and types.",
          "Both are identical in usage.",
          "They perform different operations unrelated to comparison.",
        ],
        answer: 0,
      },
      {
        question: "How do you handle asynchronous operations in JavaScript?",
        options: [
          "Using setTimeout",
          "Using Promise",
          "Using async and await",
          "Both b and c",
        ],
        answer: 3,
      },
    ],
  },
  // React.js Questions
  {
    topic: "React.js",
    questions: [
      {
        question: "What does the useState hook do?",
        options: [
          "Manages side effects in functional components.",
          "Allows the creation of state variables in functional components.",
          "Updates the DOM.",
          "Handles routing in React.",
        ],
        answer: 1,
      },
      {
        question:
          "How do you pass data from a parent component to a child component?",
        options: ["Using props", "Using state", "Using context", "Using refs"],
        answer: 0,
      },
      {
        question: "What does the key prop help with in React?",
        options: [
          "It provides unique identifiers for elements in a list.",
          "It encrypts data in the component.",
          "It determines the order of rendering.",
          "It is a required prop for all components.",
        ],
        answer: 0,
      },
      {
        question:
          "Which lifecycle method is triggered after a component is updated?",
        options: [
          "componentDidMount",
          "componentDidUpdate",
          "componentWillUnmount",
          "render",
        ],
        answer: 1,
      },
      {
        question: "What is the purpose of React.memo?",
        options: [
          "To memoize functional components and prevent unnecessary re-renders.",
          "To manage side effects in class components.",
          "To create higher-order components.",
          "To optimize the use of hooks.",
        ],
        answer: 0,
      },
    ],
  },
  // Next.js Questions
  {
    topic: "Next.js",
    questions: [
      {
        question: "What is the primary feature of Next.js?",
        options: [
          "Static site generation",
          "Server-side rendering",
          "API routes",
          "All of the above",
        ],
        answer: 3,
      },
      {
        question:
          "Which file is used for configuring custom routes in Next.js?",
        options: ["routes.js", "next.config.js", "server.js", "config.js"],
        answer: 1,
      },
      {
        question: "How do you create a dynamic route in Next.js?",
        options: [
          "By using a file with [param].js in the pages folder.",
          "By using a file with {param}.js in the pages folder.",
          "By using a file named dynamic.js in the pages folder.",
          "By adding routes in next.config.js.",
        ],
        answer: 0,
      },
      {
        question: "What is the purpose of getServerSideProps in Next.js?",
        options: [
          "To fetch data at build time.",
          "To fetch data on each request.",
          "To fetch data after the component is mounted.",
          "To handle client-side routing.",
        ],
        answer: 1,
      },
      {
        question:
          "Which of the following is NOT a built-in data-fetching method in Next.js?",
        options: [
          "getServerSideProps",
          "getStaticProps",
          "getStaticPaths",
          "useEffect",
        ],
        answer: 3,
      },
    ],
  },
];
