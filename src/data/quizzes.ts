import type { Quiz } from '../types';

export const quizzes: Quiz[] = [
  {
    id: 'quiz-1',
    title: 'JavaScript Fundamentals',
    description: 'Test your knowledge of JavaScript basics, ES6+ features, and core concepts.',
    difficulty: 'easy',
    timeLimit: 15,
    questions: [
      {
        id: 'q1',
        question: 'What is the output of the following code?',
        code: 'console.log(typeof null);',
        options: ['null', 'undefined', 'object', 'number'],
        correctAnswer: 2,
        explanation: 'typeof null returns "object" due to a historical bug in JavaScript that has been kept for backward compatibility.',
        difficulty: 'easy',
        topic: 'JavaScript Basics'
      },
      {
        id: 'q2',
        question: 'Which method is used to add elements to the end of an array?',
        options: ['push()', 'pop()', 'shift()', 'unshift()'],
        correctAnswer: 0,
        explanation: 'push() adds one or more elements to the end of an array and returns the new length.',
        difficulty: 'easy',
        topic: 'JavaScript Arrays'
      },
      {
        id: 'q3',
        question: 'What will the following code output?',
        code: 'console.log(0.1 + 0.2 === 0.3);',
        options: ['true', 'false', 'NaN', 'undefined'],
        correctAnswer: 1,
        explanation: 'Due to floating-point precision issues, 0.1 + 0.2 equals 0.30000000000000004, not exactly 0.3.',
        difficulty: 'medium',
        topic: 'JavaScript Numbers'
      },
      {
        id: 'q4',
        question: 'What is a closure in JavaScript?',
        options: [
          'A function that has access to variables in its outer scope',
          'A way to close browser windows',
          'A method to end a loop',
          'A type of error handling'
        ],
        correctAnswer: 0,
        explanation: 'A closure is a function that has access to variables in its outer (enclosing) lexical scope, even after the outer function has returned.',
        difficulty: 'medium',
        topic: 'JavaScript Functions'
      },
      {
        id: 'q5',
        question: 'Which of the following is NOT a JavaScript data type?',
        options: ['String', 'Boolean', 'Float', 'Symbol'],
        correctAnswer: 2,
        explanation: 'JavaScript has Number type for all numeric values. There is no separate Float or Integer type.',
        difficulty: 'easy',
        topic: 'JavaScript Data Types'
      }
    ]
  },
  {
    id: 'quiz-2',
    title: 'React Essentials',
    description: 'Master the core concepts of React including hooks, components, and state management.',
    difficulty: 'medium',
    timeLimit: 20,
    questions: [
      {
        id: 'q6',
        question: 'What hook would you use to perform side effects in a functional component?',
        options: ['useState', 'useEffect', 'useContext', 'useReducer'],
        correctAnswer: 1,
        explanation: 'useEffect is used to perform side effects like data fetching, subscriptions, or manually changing the DOM.',
        difficulty: 'easy',
        topic: 'React Hooks'
      },
      {
        id: 'q7',
        question: 'What is the correct way to update state in React?',
        code: 'const [count, setCount] = useState(0);',
        options: [
          'count = count + 1;',
          'setCount(count + 1);',
          'count++;',
          'setState(count + 1);'
        ],
        correctAnswer: 1,
        explanation: 'State should be updated using the setter function returned by useState. Direct mutation will not trigger a re-render.',
        difficulty: 'easy',
        topic: 'React State'
      },
      {
        id: 'q8',
        question: 'What is prop drilling in React?',
        options: [
          'Passing props through multiple levels of components',
          'A method to validate props',
          'A way to optimize performance',
          'A testing technique'
        ],
        correctAnswer: 0,
        explanation: 'Prop drilling is when you pass props through intermediate components that don\'t need them, just to get them to deeply nested components.',
        difficulty: 'medium',
        topic: 'React Props'
      },
      {
        id: 'q9',
        question: 'When does useEffect run by default?',
        options: [
          'Only once when component mounts',
          'After every render',
          'Before every render',
          'Only when state changes'
        ],
        correctAnswer: 1,
        explanation: 'By default, useEffect runs after every render. You can control this behavior with the dependency array.',
        difficulty: 'medium',
        topic: 'React Hooks'
      },
      {
        id: 'q10',
        question: 'What is the purpose of the key prop in React lists?',
        options: [
          'To encrypt data',
          'To help React identify which items have changed',
          'To style list items',
          'To add accessibility'
        ],
        correctAnswer: 1,
        explanation: 'Keys help React identify which items have changed, are added, or are removed, enabling efficient updates.',
        difficulty: 'easy',
        topic: 'React Lists'
      }
    ]
  },
  {
    id: 'quiz-3',
    title: 'TypeScript Advanced',
    description: 'Challenge yourself with advanced TypeScript concepts, generics, and type system features.',
    difficulty: 'hard',
    timeLimit: 25,
    questions: [
      {
        id: 'q11',
        question: 'What is the purpose of the "as const" assertion?',
        options: [
          'To create a constant variable',
          'To create a readonly literal type',
          'To convert a variable to a string',
          'To assert type compatibility'
        ],
        correctAnswer: 1,
        explanation: '"as const" creates a readonly literal type, making all properties readonly and narrowing literals to their specific values.',
        difficulty: 'hard',
        topic: 'TypeScript Types'
      },
      {
        id: 'q12',
        question: 'What does the "never" type represent?',
        options: [
          'A null or undefined value',
          'A value that never occurs',
          'An optional parameter',
          'An empty object'
        ],
        correctAnswer: 1,
        explanation: 'The never type represents values that never occur, like functions that always throw errors or have infinite loops.',
        difficulty: 'hard',
        topic: 'TypeScript Types'
      },
      {
        id: 'q13',
        question: 'What is a generic constraint in TypeScript?',
        options: [
          'A way to limit what types can be used with generics',
          'A performance optimization',
          'A way to create interfaces',
          'A method to validate runtime types'
        ],
        correctAnswer: 0,
        explanation: 'Generic constraints use the "extends" keyword to limit which types can be passed to a generic type parameter.',
        difficulty: 'hard',
        topic: 'TypeScript Generics'
      },
      {
        id: 'q14',
        question: 'What is the difference between "interface" and "type" in TypeScript?',
        options: [
          'There is no difference',
          'Interfaces can be extended and merged, types cannot be merged',
          'Types are faster than interfaces',
          'Interfaces are deprecated'
        ],
        correctAnswer: 1,
        explanation: 'Interfaces can be extended and declaration merged. Types are more flexible but cannot be merged like interfaces.',
        difficulty: 'medium',
        topic: 'TypeScript Types'
      },
      {
        id: 'q15',
        question: 'What does the "keyof" operator do?',
        options: [
          'Creates a new object',
          'Returns a union of an object\'s keys',
          'Deletes a property',
          'Validates keys at runtime'
        ],
        correctAnswer: 1,
        explanation: 'keyof creates a union type of an object type\'s keys, useful for creating mapped types and type-safe property access.',
        difficulty: 'hard',
        topic: 'TypeScript Operators'
      }
    ]
  }
];

export const getQuizById = (id: string): Quiz | undefined => {
  return quizzes.find(quiz => quiz.id === id);
};

export const getQuizzesByDifficulty = (difficulty: 'easy' | 'medium' | 'hard'): Quiz[] => {
  return quizzes.filter(quiz => quiz.difficulty === difficulty);
};
