# CodeQuiz - Responsive Coding Quiz Platform

A modern, fully responsive coding quiz platform built with React, TypeScript, Tailwind CSS, and Shadcn UI. Test your knowledge with interactive coding questions, track your progress, and improve your skills!

## ✨ Features

### 🔐 Authentication
- Frontend-only authentication system
- Login and registration pages
- Protected routes for authenticated users
- User session persistence via localStorage

### 📝 Quiz System
- Multiple quiz categories (JavaScript, React, TypeScript)
- Interactive multiple-choice questions
- Code snippets in questions
- Difficulty levels (Easy, Medium, Hard)
- Timer to track quiz duration
- Progress indicator
- Instant feedback with explanations
- Navigate between questions

### 📊 Dashboard & Analytics
- Welcome page with user statistics
- Quiz cards showing:
  - Difficulty badges
  - Number of questions
  - Time limits
  - Best scores
- Statistics tracking:
  - Total quizzes available
  - Quizzes taken
  - Average score
  - Total time spent
- Recent quiz attempts history
- Pass/fail indicators

### 💾 Data Persistence
- All quiz progress stored in localStorage
- Resume incomplete quizzes
- Quiz history and results saved
- User authentication state persisted

### 🎨 UI/UX
- Fully responsive design (mobile, tablet, desktop)
- Modern gradient backgrounds
- Smooth transitions and animations
- Clean, accessible interface
- Shadcn UI components for consistency
- Dark mode support

## 🚀 Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS 4** - Styling
- **Shadcn UI** - Component library
- **React Router** - Navigation
- **Lucide React** - Icons
- **localStorage** - Data persistence

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/LaibaTARIQ-20/-QuizApp.git
cd -QuizApp
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Shadcn UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── progress.tsx
│   │   └── badge.tsx
│   ├── Navbar.tsx      # Navigation bar
│   └── ProtectedRoute.tsx
├── pages/              # Page components
│   ├── LoginPage.tsx
│   ├── RegisterPage.tsx
│   ├── HomePage.tsx
│   └── QuizPage.tsx
├── contexts/           # React contexts
│   └── AuthContext.tsx
├── data/               # Quiz data
│   └── quizzes.ts
├── types/              # TypeScript types
│   └── index.ts
├── utils/              # Utility functions
│   └── storage.ts
├── lib/                # Library utilities
│   └── utils.ts
├── App.tsx             # Main app component
└── main.tsx            # Entry point
```

## 🎮 Usage

### Getting Started
1. **Register**: Create an account with a username and email
2. **Browse Quizzes**: View available quizzes on the dashboard
3. **Take a Quiz**: Click "Start Quiz" on any quiz card
4. **Answer Questions**: Select your answers and optionally view explanations
5. **Complete Quiz**: Finish all questions to see your results
6. **Track Progress**: View your quiz history and statistics on the dashboard

### Quiz Features
- **Timer**: Each quiz tracks time spent
- **Progress Bar**: Visual indicator of quiz completion
- **Explanations**: Click "Show Explanation" to learn why an answer is correct
- **Navigation**: Move forward/backward through questions
- **Resume**: Incomplete quizzes are automatically saved

## 🧪 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Quiz Topics

### JavaScript Fundamentals (Easy)
- Basic syntax and operators
- Data types and type checking
- Array methods
- Core concepts

### React Essentials (Medium)
- React Hooks (useState, useEffect)
- Component lifecycle
- Props and state management
- React best practices

### TypeScript Advanced (Hard)
- Advanced types
- Generics and constraints
- Type operators (keyof, typeof)
- Type system features

## 🔒 Security

- Frontend-only authentication (no backend)
- No sensitive data stored
- Client-side validation
- Type-safe implementation with TypeScript

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Created with ❤️ by [LaibaTARIQ-20](https://github.com/LaibaTARIQ-20)
