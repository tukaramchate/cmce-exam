const QUIZ_DATA_WEBPROG = {
  "title": "Web Programming MCQ Practice Bank – CDAC PGCP-AC",
  "description": "MCQs covering HTML, CSS, JavaScript, DOM, HTTP, and modern web concepts",
  "sections": [
    { "id": 1, "title": "HTML5, Semantic Elements, Forms", "range": "Q1–Q5" },
    { "id": 2, "title": "CSS3, Selectors, Flexbox, Grid", "range": "Q6–Q10" },
    { "id": 3, "title": "JavaScript, DOM, Events, ES6+", "range": "Q11–Q15" },
    { "id": 4, "title": "HTTP, REST, AJAX, Web APIs", "range": "Q16–Q20" }
  ],
  "questions": [
    {
      "id": 1, "section": 1, "type": "Concept",
      "question": "Which HTML5 element is used to define navigation links?",
      "options": ["<navigation>", "<nav>", "<links>", "<menu>"],
      "answer": 1,
      "explanation": "The <nav> element represents a section of navigation links."
    },
    {
      "id": 2, "section": 1, "type": "Trap",
      "question": "What is the difference between <div> and <section> in HTML5?",
      "options": [
        "They are identical",
        "<section> is semantic and represents a thematic grouping; <div> is a generic container",
        "<div> is semantic; <section> is not",
        "<section> is block-level; <div> is inline"
      ],
      "answer": 1,
      "explanation": "<section> conveys meaning (a thematic section of content), while <div> is purely for styling/layout with no semantic value."
    },
    {
      "id": 3, "section": 1, "type": "Concept",
      "question": "Which input type in HTML5 creates a date picker?",
      "options": ["<input type=\"calendar\">", "<input type=\"date\">", "<input type=\"datetime\">", "<input type=\"picker\">"],
      "answer": 1,
      "explanation": "type=\"date\" renders a date picker in modern browsers."
    },
    {
      "id": 4, "section": 1, "type": "Trap",
      "question": "What does the 'defer' attribute on a <script> tag do?",
      "options": [
        "Downloads and executes the script immediately",
        "Downloads the script during HTML parsing and executes it after parsing is complete",
        "Prevents the script from executing",
        "Loads the script only when the user scrolls to it"
      ],
      "answer": 1,
      "explanation": "defer downloads the script in parallel with HTML parsing and executes it after the document is fully parsed, preserving script order."
    },
    {
      "id": 5, "section": 1, "type": "Concept",
      "question": "Which HTML5 API is used for client-side persistent storage (up to ~5MB)?",
      "options": ["sessionStorage", "localStorage", "cookieStorage", "cacheStorage"],
      "answer": 1,
      "explanation": "localStorage stores key-value pairs persistently (survives browser restarts) with ~5MB limit per origin."
    },
    {
      "id": 6, "section": 2, "type": "Output",
      "question": "Given the CSS:\n\n.box { color: red; }\n#box { color: blue; }\ndiv { color: green; }\n\nWhich color is applied to <div id=\"box\" class=\"box\">Hello</div>?",
      "options": ["red", "blue", "green", "Depends on order"],
      "answer": 1,
      "explanation": "ID selectors (#box) have higher specificity (0,1,0,0) than class selectors (0,0,1,0) and element selectors (0,0,0,1)."
    },
    {
      "id": 7, "section": 2, "type": "Concept",
      "question": "Which CSS property creates a flexible container?",
      "options": ["display: block", "display: flex", "display: grid", "display: inline"],
      "answer": 1,
      "explanation": "display: flex creates a flex container, enabling Flexbox layout for its direct children."
    },
    {
      "id": 8, "section": 2, "type": "Trap",
      "question": "What is the CSS box model order from inside to outside?",
      "options": [
        "Margin → Border → Padding → Content",
        "Content → Padding → Border → Margin",
        "Content → Margin → Border → Padding",
        "Padding → Content → Border → Margin"
      ],
      "answer": 1,
      "explanation": "The box model layers from inside out: Content → Padding → Border → Margin."
    },
    {
      "id": 9, "section": 2, "type": "Output",
      "question": "What does 'position: absolute' do?",
      "options": [
        "Positions relative to the viewport",
        "Positions relative to the nearest positioned ancestor",
        "Positions relative to the document body always",
        "Removes the element from the page"
      ],
      "answer": 1,
      "explanation": "An absolutely positioned element is placed relative to its nearest ancestor with position: relative, absolute, fixed, or sticky."
    },
    {
      "id": 10, "section": 2, "type": "Concept",
      "question": "Which CSS unit is relative to the font-size of the root element?",
      "options": ["em", "rem", "px", "vh"],
      "answer": 1,
      "explanation": "rem (root em) is relative to the html element's font-size. em is relative to the parent element's font-size."
    },
    {
      "id": 11, "section": 3, "type": "Output",
      "question": "What is the output of the following JavaScript?\n\nconsole.log(typeof null);",
      "options": ["\"null\"", "\"undefined\"", "\"object\"", "\"boolean\""],
      "answer": 2,
      "explanation": "typeof null returns 'object' — this is a well-known JavaScript bug that has persisted for backward compatibility."
    },
    {
      "id": 12, "section": 3, "type": "Trap",
      "question": "What is the output?\n\nconsole.log(0.1 + 0.2 === 0.3);",
      "options": ["true", "false", "undefined", "NaN"],
      "answer": 1,
      "explanation": "Due to floating-point precision, 0.1 + 0.2 equals 0.30000000000000004, not exactly 0.3."
    },
    {
      "id": 13, "section": 3, "type": "Output",
      "question": "What is the output?\n\nlet x = 10;\nfunction foo() {\n  console.log(x);\n  let x = 20;\n}\nfoo();",
      "options": ["10", "20", "undefined", "ReferenceError"],
      "answer": 3,
      "explanation": "let declarations are hoisted but not initialized (temporal dead zone). Accessing x before its declaration throws a ReferenceError."
    },
    {
      "id": 14, "section": 3, "type": "Concept",
      "question": "What does event.preventDefault() do?",
      "options": [
        "Stops the event from bubbling up",
        "Cancels the default browser action for the event",
        "Removes the event listener",
        "Prevents other handlers from being called"
      ],
      "answer": 1,
      "explanation": "preventDefault() cancels the default action (e.g., prevents a form from submitting or a link from navigating)."
    },
    {
      "id": 15, "section": 3, "type": "Trap",
      "question": "What is the difference between '==' and '===' in JavaScript?",
      "options": [
        "They are identical",
        "== compares values with type coercion; === compares values and types strictly",
        "=== compares with type coercion; == does not",
        "== is for numbers only; === is for strings"
      ],
      "answer": 1,
      "explanation": "== performs type coercion before comparison (e.g., '5' == 5 is true). === checks both value and type strictly."
    },
    {
      "id": 16, "section": 4, "type": "Concept",
      "question": "Which HTTP method is idempotent?",
      "options": ["POST", "GET", "PATCH", "None of them"],
      "answer": 1,
      "explanation": "GET is idempotent — making the same GET request multiple times produces the same result. POST typically creates new resources (not idempotent)."
    },
    {
      "id": 17, "section": 4, "type": "Trap",
      "question": "What does HTTP status code 304 mean?",
      "options": [
        "Not Found",
        "Not Modified",
        "Redirect",
        "Server Error"
      ],
      "answer": 1,
      "explanation": "304 Not Modified tells the client to use its cached version — the resource hasn't changed since last request."
    },
    {
      "id": 18, "section": 4, "type": "Concept",
      "question": "In REST, which HTTP method is used to update an existing resource completely?",
      "options": ["POST", "PUT", "PATCH", "DELETE"],
      "answer": 1,
      "explanation": "PUT replaces the entire resource. PATCH is for partial updates. POST is for creating new resources."
    },
    {
      "id": 19, "section": 4, "type": "Concept",
      "question": "What does CORS stand for?",
      "options": [
        "Cross-Origin Resource Sharing",
        "Client-Origin Response System",
        "Cross-Object Request Service",
        "Cache-Origin Resource System"
      ],
      "answer": 0,
      "explanation": "CORS (Cross-Origin Resource Sharing) is a security mechanism that allows or restricts web pages from making requests to a different origin."
    },
    {
      "id": 20, "section": 4, "type": "Scenario",
      "question": "A single-page application (SPA) needs to fetch data from an API without reloading the page. Which technology is most appropriate?",
      "options": [
        "HTML forms with action attribute",
        "fetch() API or XMLHttpRequest (AJAX)",
        "Server-side rendering only",
        "HTML iframe"
      ],
      "answer": 1,
      "explanation": "The fetch() API (or XMLHttpRequest) enables asynchronous HTTP requests without page reloads — the foundation of AJAX."
    }
  ]
};
if (typeof window !== 'undefined') window.QUIZ_DATA_WEBPROG = QUIZ_DATA_WEBPROG;
