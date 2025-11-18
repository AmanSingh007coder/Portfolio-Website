import { motion } from "framer-motion";

const snippets = [
  "const robot = human-being();",
  "function CompleteProject() { }",
  "useEffect(() => {}, []);",
  "<AI powered />",
  "{data.map(item => <Card />)}",
  "return <div>Hello World</div>",
  "import React from 'react';",
  "const [state, setState] = useState(null);",
  "console.log('Building the Future...');",
  "bg-gradient-to-r from-blue-400 to-blue-700",
  "#include<life.h.>",
  "</>",
  "<Tech />",
  "let innovation = true;",
];

 const getRandomPosition = () => ({
  top: `${Math.random() * 90}vh`,
  left: `${Math.random() * 90}vw`,
});

const CodeBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden px-4">
      {snippets.map((text, index) => {
        const { top, left } = getRandomPosition();
        const randomDelay = Math.random() * 5;

        return (
          <motion.span
            key={index}
            className="absolute text-gray-500 font-cursive text-sm select-none max-w-[80vw] break-words overflow-hidden"
            style={{ top, left }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              delay: randomDelay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {text}
          </motion.span>
        );
      })}
    </div>
  );
};

export default CodeBackground;
