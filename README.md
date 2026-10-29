# CDAC PGCP-AC Mock Exam

An interactive, responsive web application for CDAC PGCP-AC MCQ exam preparation across multiple subjects: **Core Java (Java 17)**, **Database (DBMS)**, **C++**, **Data Structures (DSA)**, and **Web Programming**.

---

## 🌟 Features
- **Multi-Subject Practice**:
  - ☕ **Core Java**: 200 questions across 12 comprehensive sections.
  - 🗄️ **Database (DBMS)**: SQL queries, normalization, transactions & indexing.
  - ⚙️ **C++**: OOP, memory management, pointers, and templates.
  - 🌳 **Algorithms & Data Structures**: 268 curated questions across 17 sections (Problem Solving, Arrays, Stacks, Queues, Linked Lists, Trees, BST, AVL, Graphs, Shortest Path, Spanning Trees, Sorting, Hashing, and Dynamic Programming).
  - 🌐 **Web Programming**: HTML5, CSS3, JavaScript, DOM, and async programming.
- **Multiple Quiz Modes**:
  - 📚 **Full Test**: Test all questions in the chosen subject.
  - 📂 **By Section**: Focus on a specific syllabus topic.
  - 🎲 **Quick Test**: Practice 50 randomized questions.
  - ⚡ **Traps Only**: Target tricky questions and common interview pitfalls.
- **Instant Answer Feedback**: Detailed explanations immediately upon answering.
- **Rich Analytics**: Visual score circle, correct/wrong/skipped stats, and section breakdown.
- **Review Mode**: Complete post-test review with option comparisons and code formatting.
- **Keyboard Shortcuts**: `1-4` to select options, `Arrow Keys` or `Enter` for next/prev.
- **Glassmorphic Dark UI**: Modern, responsive design built with vanilla HTML/CSS/JS.

---

## 📁 Project Structure

```
cdac mock exam/
├── index.html                    # Main web application entry point
├── README.md                     # Documentation & project guide
│
├── assets/
│   ├── css/
│   │   └── style.css             # Design system & responsive styles
│   └── js/
│       ├── quiz.js               # Quiz engine & state management
│       └── data/                 # Subject-specific question banks
│           ├── quiz-data-java.js
│           ├── quiz-data-database.js
│           ├── quiz-data-cpp.js
│           ├── quiz-data-dsa.js
│           └── quiz-data-webprog.js
│
├── data/
│   ├── quiz-data.json            # Raw JSON export of quiz questions
│   └── mcq_algorithms_ds_java.json # Algorithms & DSA questions dataset
│
└── docs/                         # Reference PDFs & source materials
    ├── Core Java MCQ Practice Bank – CDAC PGCP-AC (Java 17).pdf
    ├── dsa_solutions.pdf
    ├── dsa_solutions_2.pdf
    ├── dsa_solutions_3.pdf
    ├── dsa_solutions_4.pdf
    └── full_text.txt
```

---

## 🚀 Getting Started

Simply open `index.html` in any modern web browser — no web server or build process required.

---

## 👨‍💻 Author

Developed by **Tukaram Chate** · Connect on [LinkedIn](https://www.linkedin.com/in/tukaram-chate/)
