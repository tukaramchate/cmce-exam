const QUIZ_DATA_DSA = {
  "title": "Algorithms & Data Structures MCQ Practice Bank – CDAC PGCP-AC",
  "description": "268 medium-to-hard MCQs across 17 sections covering Problem Solving, Complexity, Arrays, Stacks, Queues, Linked Lists, Trees, BST, AVL, Graphs, Sorting, Hashing, and Dynamic Programming.",
  "sections": [
    {
      "id": 1,
      "title": "Problem Solving and Computational Thinking",
      "range": "Q1–Q8"
    },
    {
      "id": 2,
      "title": "Complexity Analysis (Big O) and ADT",
      "range": "Q9–Q17"
    },
    {
      "id": 3,
      "title": "Arrays",
      "range": "Q18–Q28"
    },
    {
      "id": 4,
      "title": "Stack",
      "range": "Q29–Q41"
    },
    {
      "id": 5,
      "title": "Queue and Circular Queue",
      "range": "Q42–Q52"
    },
    {
      "id": 6,
      "title": "Linked List (Singly, Doubly, Circular, Node Pool)",
      "range": "Q53–Q72"
    },
    {
      "id": 7,
      "title": "Recursion",
      "range": "Q73–Q87"
    },
    {
      "id": 8,
      "title": "Trees and Terminology, Traversals, Binary Trees, ACBT",
      "range": "Q88–Q111"
    },
    {
      "id": 9,
      "title": "Binary Search Tree (BST)",
      "range": "Q112–Q127"
    },
    {
      "id": 10,
      "title": "AVL Tree",
      "range": "Q128–Q141"
    },
    {
      "id": 11,
      "title": "Searching",
      "range": "Q142–Q151"
    },
    {
      "id": 12,
      "title": "Sorting",
      "range": "Q152–Q179"
    },
    {
      "id": 13,
      "title": "Hashing and Hash Tables",
      "range": "Q180–Q199"
    },
    {
      "id": 14,
      "title": "Graphs: Representation, BFS, DFS",
      "range": "Q200–Q215"
    },
    {
      "id": 15,
      "title": "Shortest Path: Dijkstra, Bellman-Ford, Floyd-Warshall",
      "range": "Q216–Q234"
    },
    {
      "id": 16,
      "title": "Spanning Trees: Kruskal, Prim, Union-Find",
      "range": "Q235–Q249"
    },
    {
      "id": 17,
      "title": "Algorithm Design Techniques, Dynamic Programming, Complexity",
      "range": "Q250–Q268"
    }
  ],
  "questions": [
    {
      "id": 1,
      "code": "PS-01",
      "section": 1,
      "type": "Concept",
      "difficulty": "easy",
      "question": "Which of the following is NOT a core component of computational thinking?",
      "options": [
        "Decomposition",
        "Pattern recognition",
        "Compilation",
        "Abstraction"
      ],
      "answer": 2,
      "explanation": "The core components are decomposition, pattern recognition, abstraction and algorithms. Compilation is a code-translation step, not a thinking skill."
    },
    {
      "id": 2,
      "code": "PS-02",
      "section": 1,
      "type": "Scenario",
      "difficulty": "medium",
      "question": "A metro-map app shows only stations and the lines connecting them, ignoring building colours and exact geography. Which computational thinking component is applied?",
      "options": [
        "Decomposition",
        "Abstraction",
        "Brute force",
        "Backtracking"
      ],
      "answer": 1,
      "explanation": "Abstraction means keeping important information and ignoring irrelevant details."
    },
    {
      "id": 3,
      "code": "PS-03",
      "section": 1,
      "type": "Scenario",
      "difficulty": "medium",
      "question": "A team splits a ride-booking application into login, booking, payment and tracking modules. This is an example of:",
      "options": [
        "Decomposition",
        "Abstraction",
        "Memoization",
        "Recursion"
      ],
      "answer": 0,
      "explanation": "Decomposition breaks a complex problem into smaller, simpler problems."
    },
    {
      "id": 4,
      "code": "PS-04",
      "section": 1,
      "type": "Concept",
      "difficulty": "medium",
      "question": "Which is the correct order of the problem-solving process?",
      "options": [
        "Decide -> define problem -> list solutions -> implement -> set schedule",
        "Set schedule -> define problem -> decide -> list solutions",
        "List solutions -> implement -> define problem -> decide",
        "Define problem -> identify cause -> list possible solutions -> decide -> assign responsibility -> set schedule -> implement"
      ],
      "answer": 3,
      "explanation": "Define and identify the problem first, find possible solutions, take a decision, assign responsibility, set a schedule (without a deadline it is just a discussion) and then implement."
    },
    {
      "id": 5,
      "code": "PS-05",
      "section": 1,
      "type": "Concept",
      "difficulty": "medium",
      "question": "A procedure that loops forever for some inputs violates which property of an algorithm?",
      "options": [
        "Definiteness",
        "Input",
        "Output",
        "Finiteness"
      ],
      "answer": 3,
      "explanation": "An algorithm is a finite sequence of well-defined steps; it must terminate."
    },
    {
      "id": 6,
      "code": "PS-06",
      "section": 1,
      "type": "Concept",
      "difficulty": "easy",
      "question": "The basic constructs of an algorithm are:",
      "options": [
        "Sequence, conditional (if-then-else), loop",
        "Sequence, pointer, recursion",
        "Class, object, inheritance",
        "Declaration, compilation, linking"
      ],
      "answer": 0,
      "explanation": "Linear sequence, conditional statements and loops are the three basic constructs."
    },
    {
      "id": 7,
      "code": "PS-07",
      "section": 1,
      "type": "Scenario",
      "difficulty": "medium",
      "question": "The 'tree swing' picture in the notes (marketing, sales, engineering, manufacturing each delivered something different from what the customer wanted) mainly illustrates which lesson?",
      "options": [
        "Manufacturing did the best job",
        "The tree was too big",
        "Marketing delivered exactly what was needed",
        "Communication means saying and hearing carry the same message; the problem must be defined and understood the same way by everyone"
      ],
      "answer": 3,
      "explanation": "Each team interpreted the requirement differently, so the customer's real need (a simple tyre swing) was lost. Define and identify the problem clearly first."
    },
    {
      "id": 8,
      "code": "PS-08",
      "section": 1,
      "type": "Concept",
      "difficulty": "easy",
      "question": "A data structure is best described as:",
      "options": [
        "A programming language syntax rule",
        "A type of memory chip",
        "A sorting algorithm",
        "A way to store and organise data so that it can be accessed and modified efficiently; no single structure suits every purpose"
      ],
      "answer": 3,
      "explanation": "Because no single data structure works well for all purposes, we must know the strengths and limits of several."
    },
    {
      "id": 9,
      "code": "CX-01",
      "section": 2,
      "type": "Output",
      "difficulty": "medium",
      "question": "for i = 0 to n-2:\n  for j = i+1 to n-1:\n    work()\nHow many times does work() run and what is the complexity?",
      "options": [
        "n(n-1)/2 times -> O(n^2)",
        "n(n+1)/2 times -> O(n)",
        "n^2 times -> O(n^3)",
        "n-1 times -> O(n)"
      ],
      "answer": 0,
      "explanation": "(n-1)+(n-2)+...+1 = n(n-1)/2; ignoring constants and lower terms gives O(n^2)."
    },
    {
      "id": 10,
      "code": "CX-02",
      "section": 2,
      "type": "Output",
      "difficulty": "medium",
      "question": "for (i = 1; i < n; i = i * 2) { count++; }\nTime complexity?",
      "options": [
        "O(n)",
        "O(log n)",
        "O(sqrt n)",
        "O(n log n)"
      ],
      "answer": 1,
      "explanation": "i doubles each time, so the loop runs about log2(n) times."
    },
    {
      "id": 11,
      "code": "CX-03",
      "section": 2,
      "type": "Trap",
      "difficulty": "hard",
      "question": "for (i = n; i >= 1; i = i / 2)\n  for (j = 1; j <= i; j++)\n    work();\nTime complexity?",
      "options": [
        "O(n log n)",
        "O(n^2)",
        "O(n)",
        "O(log^2 n)"
      ],
      "answer": 2,
      "explanation": "Total work = n + n/2 + n/4 + ... < 2n, so O(n)."
    },
    {
      "id": 12,
      "code": "CX-04",
      "section": 2,
      "type": "Concept",
      "difficulty": "medium",
      "question": "Which ordering of growth rates is correct (slowest to fastest growing)?",
      "options": [
        "log n < n < n log n < n^2 < 2^n",
        "n < log n < n log n < n^2 < 2^n",
        "log n < n log n < n < 2^n < n^2",
        "n < n log n < log n < n^2 < 2^n"
      ],
      "answer": 0,
      "explanation": "Standard order: O(1) < O(log n) < O(n) < O(n log n) < O(n^2) < O(2^n)."
    },
    {
      "id": 13,
      "code": "CX-05",
      "section": 2,
      "type": "Concept",
      "difficulty": "medium",
      "question": "Auxiliary space complexity of finding the maximum of an n-element array using a single variable is:",
      "options": [
        "O(n)",
        "O(log n)",
        "O(1)",
        "O(n^2)"
      ],
      "answer": 2,
      "explanation": "Only a constant number of extra variables are used."
    },
    {
      "id": 14,
      "code": "CX-06",
      "section": 2,
      "type": "Concept",
      "difficulty": "easy",
      "question": "An Abstract Data Type (ADT) is best described as:",
      "options": [
        "A class that must use arrays internally",
        "A Java primitive type",
        "A specification of data and operations that hides how they are implemented",
        "A sorting technique"
      ],
      "answer": 2,
      "explanation": "An ADT defines what operations are supported, not how; e.g. Stack ADT can be implemented with array or linked list."
    },
    {
      "id": 15,
      "code": "CX-07",
      "section": 2,
      "type": "Trap",
      "difficulty": "hard",
      "question": "An O(n^2) algorithm takes 2 seconds for n = 1000. Approximately how long for n = 3000?",
      "options": [
        "6 s",
        "9 s",
        "18 s",
        "54 s"
      ],
      "answer": 2,
      "explanation": "Input is 3x larger, so time is 3^2 = 9x larger: 2 x 9 = 18 s."
    },
    {
      "id": 16,
      "code": "CX-08",
      "section": 2,
      "type": "Trap",
      "difficulty": "hard",
      "question": "for i = 0 to n/2\n  for j = i+1 to n-1\n    for m = 0 to n-1\n      work()\nTime complexity?",
      "options": [
        "O(n^2)",
        "O(n^3)",
        "O(n log n)",
        "O(n^4)"
      ],
      "answer": 1,
      "explanation": "About (n/2) x n x n iterations = O(n^3)."
    },
    {
      "id": 17,
      "code": "CX-09",
      "section": 2,
      "type": "Concept",
      "difficulty": "easy",
      "question": "A program that only executes 3 fixed statements (sum = no1 + no2 + no3; print sum) has time complexity:",
      "options": [
        "O(log n)",
        "O(3n) which is different from O(n)",
        "O(n)",
        "O(1) - constant, independent of input size"
      ],
      "answer": 3,
      "explanation": "Constants are ignored; a fixed number of steps is O(1)."
    },
    {
      "id": 18,
      "code": "AR-01",
      "section": 3,
      "type": "Concept",
      "difficulty": "easy",
      "question": "Why is arr[i] access O(1)?",
      "options": [
        "Address = base address + i x element size, computed directly",
        "The array is scanned from index 0",
        "Elements are linked by pointers",
        "Binary search is used internally"
      ],
      "answer": 0,
      "explanation": "Elements are stored contiguously so the address is computed arithmetically."
    },
    {
      "id": 19,
      "code": "AR-02",
      "section": 3,
      "type": "Output",
      "difficulty": "medium",
      "question": "To insert a value at index pos in an array holding n elements (capacity > n), which shifting loop is correct?",
      "options": [
        "for(i=pos; i<n; i++) arr[i+1]=arr[i];",
        "for(i=0; i<pos; i++) arr[i]=arr[i+1];",
        "for(i=pos; i<n; i++) arr[i]=arr[i+1];",
        "for(i=n; i>pos; i--) arr[i]=arr[i-1];"
      ],
      "answer": 3,
      "explanation": "Shifting must go right-to-left; option A copies arr[pos] into every later cell and loses data."
    },
    {
      "id": 20,
      "code": "AR-03",
      "section": 3,
      "type": "Output",
      "difficulty": "medium",
      "question": "arr = {10,20,30,40,50}, n = 5, capacity 10. After insertInArray(arr, n, 2, 25), what are the array and the returned logical size?",
      "options": [
        "{10,20,25,30,40,50}, 6",
        "{10,20,25,40,50}, 5",
        "{10,25,20,30,40,50}, 6",
        "{10,20,30,25,40,50}, 6"
      ],
      "answer": 0,
      "explanation": "Elements from index 2 shift right, 25 is stored at index 2, logical size becomes n+1 = 6."
    },
    {
      "id": 21,
      "code": "AR-04",
      "section": 3,
      "type": "Output",
      "difficulty": "medium",
      "question": "Delete index 1 from {5,8,12,15} by shifting left. What are the valid elements and logical size afterwards?",
      "options": [
        "{5,12,15}, size 3",
        "{5,8,15}, size 3",
        "{12,15}, size 2",
        "{5,12,15,15}, size 4"
      ],
      "answer": 0,
      "explanation": "Elements after index 1 move left and logical size decreases by 1 (the stale last cell is ignored)."
    },
    {
      "id": 22,
      "code": "AR-05",
      "section": 3,
      "type": "Trap",
      "difficulty": "hard",
      "question": "int a[3][4] stored in row-major order, base address 1000, int = 4 bytes. Address of a[2][1]?",
      "options": [
        "1032",
        "1036",
        "1044",
        "1040"
      ],
      "answer": 1,
      "explanation": "1000 + (2x4 + 1) x 4 = 1000 + 36 = 1036."
    },
    {
      "id": 23,
      "code": "AR-06",
      "section": 3,
      "type": "Concept",
      "difficulty": "easy",
      "question": "Logical size vs physical size of an array:",
      "options": [
        "Both are always equal",
        "Logical = allocated capacity, physical = elements stored",
        "Logical = number of elements actually stored, physical = allocated capacity",
        "Logical = memory in bytes"
      ],
      "answer": 2,
      "explanation": "Count/logical size tracks used elements; physical size/capacity is how much was allocated."
    },
    {
      "id": 24,
      "code": "AR-07",
      "section": 3,
      "type": "Scenario",
      "difficulty": "medium",
      "question": "A fixed-size array becomes full while data keeps arriving. Best remedy?",
      "options": [
        "Stop accepting data",
        "Shift every element one place",
        "Create a larger array, copy the old elements and discard the old array (e.g. doubling)",
        "Convert to a 2-D array"
      ],
      "answer": 2,
      "explanation": "Resizing = new larger array + copy (O(n)); doubling gives amortised O(1) appends."
    },
    {
      "id": 25,
      "code": "AR-08",
      "section": 3,
      "type": "Concept",
      "difficulty": "easy",
      "question": "int[] a = new int[5]; System.out.println(a[5]); results in:",
      "options": [
        "0",
        "null",
        "ArrayIndexOutOfBoundsException",
        "Compilation error"
      ],
      "answer": 2,
      "explanation": "Valid indices are 0..4; index 5 throws an exception at run time."
    },
    {
      "id": 26,
      "code": "AR-09",
      "section": 3,
      "type": "Scenario",
      "difficulty": "medium",
      "question": "A loop finds the maximum of an int array whose values may all be negative. What is the correct way to initialise max?",
      "options": [
        "max = -1",
        "max = arr.length",
        "max = 0",
        "max = arr[0] and loop from index 1"
      ],
      "answer": 3,
      "explanation": "Initialising with 0 would wrongly return 0 for all-negative data. Using the first element needs n-1 comparisons."
    },
    {
      "id": 27,
      "code": "AR-10",
      "section": 3,
      "type": "Trap",
      "difficulty": "hard",
      "question": "int a[3][4], base address 1000, 4 bytes per int, stored in COLUMN-major order. Address of a[1][2]?",
      "options": [
        "1044",
        "1036",
        "1024",
        "1028"
      ],
      "answer": 3,
      "explanation": "Column-major: base + (col x rows + row) x size = 1000 + (2x3 + 1) x 4 = 1028. 1024 would be the row-major address."
    },
    {
      "id": 28,
      "code": "AR-11",
      "section": 3,
      "type": "Concept",
      "difficulty": "easy",
      "question": "Read N numbers into an array and compute their sum. Time complexity and space complexity of the array?",
      "options": [
        "O(log n) time",
        "O(n^2) time",
        "O(1) time; O(1) space",
        "O(n) time; O(n) space for the array"
      ],
      "answer": 3,
      "explanation": "One loop reads and one loop adds: O(n). Storing the numbers needs O(n) space."
    },
    {
      "id": 29,
      "code": "ST-01",
      "section": 4,
      "type": "Output",
      "difficulty": "medium",
      "question": "push(1), push(2), push(3), pop(), push(4), pop(), pop(). Sequence of popped values?",
      "options": [
        "3, 4, 2",
        "3, 2, 4",
        "1, 4, 3",
        "3, 4, 1"
      ],
      "answer": 0,
      "explanation": "LIFO: pops return 3, then 4 (just pushed), then 2. Element 1 remains."
    },
    {
      "id": 30,
      "code": "ST-02",
      "section": 4,
      "type": "Output",
      "difficulty": "medium",
      "question": "Array stack of capacity n with top initialised to -1. Correct conditions?",
      "options": [
        "isEmpty: top==0, isFull: top==n",
        "isEmpty: top<0, isFull: top==n",
        "isEmpty: top==n-1, isFull: top==-1",
        "isEmpty: top==-1, isFull: top==n-1"
      ],
      "answer": 3,
      "explanation": "Valid indices are 0..n-1, so full means top == n-1 and empty means top == -1."
    },
    {
      "id": 31,
      "code": "ST-03",
      "section": 4,
      "type": "Output",
      "difficulty": "medium",
      "question": "Evaluate the postfix expression: 5 6 2 + * 12 4 / -",
      "options": [
        "30",
        "41",
        "37",
        "42"
      ],
      "answer": 2,
      "explanation": "6+2=8; 5*8=40; 12/4=3; 40-3=37."
    },
    {
      "id": 32,
      "code": "ST-04",
      "section": 4,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Evaluate the postfix expression: 2 3 1 * + 9 -",
      "options": [
        "-4",
        "4",
        "14",
        "-14"
      ],
      "answer": 0,
      "explanation": "3*1=3; 2+3=5; 5-9=-4."
    },
    {
      "id": 33,
      "code": "ST-05",
      "section": 4,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Evaluate the prefix expression: - * + 2 3 4 5",
      "options": [
        "20",
        "25",
        "5",
        "15"
      ],
      "answer": 3,
      "explanation": "Scan right to left: (2+3)=5; 5*4=20; 20-5=15."
    },
    {
      "id": 34,
      "code": "ST-06",
      "section": 4,
      "type": "Scenario",
      "difficulty": "medium",
      "question": "Which string is NOT balanced when checked with a stack?",
      "options": [
        "{[()]}",
        "([]){}",
        "{[(])}",
        "()[]{}"
      ],
      "answer": 2,
      "explanation": "In {[(])} the ']' arrives when '(' is on top of the stack, so brackets are mismatched."
    },
    {
      "id": 35,
      "code": "ST-07",
      "section": 4,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Two stacks share one array of size N, growing from opposite ends. When does an overflow occur?",
      "options": [
        "top1 == top2",
        "top1 + 1 == top2",
        "top1 == N-1",
        "top2 == 0"
      ],
      "answer": 1,
      "explanation": "The stacks collide when there is no free cell between them."
    },
    {
      "id": 36,
      "code": "ST-08",
      "section": 4,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Design a stack that returns the minimum element in O(1). Which approach works?",
      "options": [
        "Scan the stack on every getMin",
        "Sort the stack after each push",
        "Keep an auxiliary stack that stores the minimum so far at each push and pop it together with the main stack",
        "Store only the first pushed element"
      ],
      "answer": 2,
      "explanation": "The auxiliary min-stack's top is always the current minimum, giving O(1) getMin."
    },
    {
      "id": 37,
      "code": "ST-09",
      "section": 4,
      "type": "Trap",
      "difficulty": "hard",
      "question": "A queue is built from two stacks. enqueue(1), enqueue(2), enqueue(3) go to stack-in. What does the first dequeue() return?",
      "options": [
        "3",
        "2",
        "1",
        "Exception"
      ],
      "answer": 2,
      "explanation": "Dequeue moves all elements from stack-in to stack-out (reversing order) and pops 1, preserving FIFO."
    },
    {
      "id": 38,
      "code": "ST-10",
      "section": 4,
      "type": "Concept",
      "difficulty": "medium",
      "question": "Which task naturally uses a stack?",
      "options": [
        "Function-call management / recursion",
        "Printer job spooling",
        "Level-order tree traversal",
        "Round-robin scheduling"
      ],
      "answer": 0,
      "explanation": "The call stack stores activation records in LIFO order. Spooling, level order and round robin use queues."
    },
    {
      "id": 39,
      "code": "ST-11",
      "section": 4,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Convert the infix expression a * (b + c) - d to postfix.",
      "options": [
        "a b * c + d -",
        "a b + c * d -",
        "a b c d + * -",
        "a b c + * d -"
      ],
      "answer": 3,
      "explanation": "Brackets first: (b+c) -> bc+, then a*(...) -> abc+*, then minus d -> abc+*d-."
    },
    {
      "id": 40,
      "code": "ST-12",
      "section": 4,
      "type": "Concept",
      "difficulty": "medium",
      "question": "Stack underflow occurs when:",
      "options": [
        "pop() is called when top == 0",
        "push() is called when top == -1",
        "push() is called while top == n-1",
        "pop() is called while top == -1 (stack empty)"
      ],
      "answer": 3,
      "explanation": "Underflow = removing from an empty stack; overflow = pushing onto a full stack."
    },
    {
      "id": 41,
      "code": "ST-13",
      "section": 4,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Evaluate the postfix expression: 7 2 3 * - 4 +",
      "options": [
        "-1",
        "13",
        "9",
        "5"
      ],
      "answer": 3,
      "explanation": "2*3=6; 7-6=1; 1+4=5."
    },
    {
      "id": 42,
      "code": "QU-01",
      "section": 5,
      "type": "Output",
      "difficulty": "medium",
      "question": "enqueue(5), enqueue(1), enqueue(10), dequeue(), enqueue(3), enqueue(2), dequeue(). Which element is now at the front?",
      "options": [
        "1",
        "3",
        "10",
        "2"
      ],
      "answer": 2,
      "explanation": "After first dequeue (5) queue = 1,10,3,2; second dequeue removes 1, so 10 is at the front."
    },
    {
      "id": 43,
      "code": "QU-02",
      "section": 5,
      "type": "Scenario",
      "difficulty": "medium",
      "question": "Linear array queue of capacity 3: enqueue 5, 10, 20; dequeue twice. isFull() (rear == capacity-1) now returns true though only one element exists. This problem is called:",
      "options": [
        "Stack overflow",
        "False-full problem, solved by a circular queue",
        "Memory leak",
        "Underflow"
      ],
      "answer": 1,
      "explanation": "Space behind 'front' is wasted in a linear queue; a circular queue reuses it using modulo arithmetic."
    },
    {
      "id": 44,
      "code": "QU-03",
      "section": 5,
      "type": "Output",
      "difficulty": "medium",
      "question": "Which statement correctly advances rear in a circular array queue of size n?",
      "options": [
        "rear = rear + 1",
        "rear = (rear + 1) % n",
        "rear = rear % (n + 1)",
        "rear = n - rear"
      ],
      "answer": 1,
      "explanation": "Modulo makes the index wrap around to 0 after n-1."
    },
    {
      "id": 45,
      "code": "QU-04",
      "section": 5,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Circular queue, array size 5, front = 3, rear = 1 (queue has wrapped around). How many elements are stored?",
      "options": [
        "2",
        "3",
        "4",
        "5"
      ],
      "answer": 2,
      "explanation": "Occupied cells are 3, 4, 0, 1 -> (rear - front + n) % n + 1 = (1-3+5)%5 + 1 = 4."
    },
    {
      "id": 46,
      "code": "QU-05",
      "section": 5,
      "type": "Trap",
      "difficulty": "hard",
      "question": "A circular queue of array size 6 uses only front and rear (no count) and keeps one slot empty to tell full from empty. Maximum elements it can hold?",
      "options": [
        "6",
        "5",
        "4",
        "3"
      ],
      "answer": 1,
      "explanation": "Full condition is (rear+1)%n == front, so one cell always stays unused: capacity n-1 = 5."
    },
    {
      "id": 47,
      "code": "QU-06",
      "section": 5,
      "type": "Concept",
      "difficulty": "easy",
      "question": "A double-ended queue (deque) allows:",
      "options": [
        "Only insertion at front",
        "LIFO access only",
        "Only deletion at rear",
        "Insertion and deletion at both ends"
      ],
      "answer": 3,
      "explanation": "Deque supports addFront, addRear, deleteFront and deleteRear."
    },
    {
      "id": 48,
      "code": "QU-07",
      "section": 5,
      "type": "Scenario",
      "difficulty": "medium",
      "question": "Queue implemented with a linked list. Which is true?",
      "options": [
        "With head and tail pointers, enqueue at tail and dequeue at head are both O(1)",
        "Enqueue is O(log n)",
        "Dequeue is always O(n)",
        "With only a head pointer, enqueue at tail is O(1)"
      ],
      "answer": 0,
      "explanation": "Tail pointer avoids traversing to the last node; with only a head pointer enqueue needs O(n) traversal."
    },
    {
      "id": 49,
      "code": "QU-08",
      "section": 5,
      "type": "Trap",
      "difficulty": "hard",
      "question": "A stack is built using ONE queue: on push(x) enqueue x and then move the previous n-1 elements behind it, so the newest element is at the front. Costs?",
      "options": [
        "Push O(1), pop O(n)",
        "Push O(n), pop O(1)",
        "Both O(n)",
        "Both O(1)"
      ],
      "answer": 1,
      "explanation": "Push rotates n-1 elements (O(n)); pop just dequeues the front (O(1))."
    },
    {
      "id": 50,
      "code": "QU-09",
      "section": 5,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Circular queue using a circular singly linked list. Keeping only a tail pointer, how is the head found and what is enqueue cost?",
      "options": [
        "head = tail.next; enqueue O(1)",
        "Head must be searched; enqueue O(n)",
        "head = tail.prev; enqueue O(n)",
        "Queue cannot be built this way"
      ],
      "answer": 0,
      "explanation": "In a circular list tail.next is the head, so insertion after tail and deletion at head are O(1)."
    },
    {
      "id": 51,
      "code": "QU-10",
      "section": 5,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Circular queue of array size 4 (rear starts at -1, rear=(rear+1)%n, count tracks size). Operations: enqueue 1, 2, 3; dequeue; enqueue 4; enqueue 5. Where is 5 stored and what is the state?",
      "options": [
        "Index 0; not full",
        "Index 3; not full",
        "Index 4; overflow",
        "Index 0; queue is full (holds 2,3,4,5)"
      ],
      "answer": 3,
      "explanation": "1,2,3 go to indices 0,1,2; dequeue removes 1; 4 goes to index 3; 5 wraps around to index 0. Four elements in a size-4 array means full."
    },
    {
      "id": 52,
      "code": "QU-11",
      "section": 5,
      "type": "Concept",
      "difficulty": "medium",
      "question": "A deque can behave as a stack when:",
      "options": [
        "Insertion at front and deletion at rear",
        "Only insertion is allowed",
        "Elements are inserted in sorted order",
        "Insertion and deletion are done at the same end"
      ],
      "answer": 3,
      "explanation": "Same-end insertion/deletion gives LIFO; opposite ends give FIFO (queue)."
    },
    {
      "id": 53,
      "code": "LL-01",
      "section": 6,
      "type": "Concept",
      "difficulty": "easy",
      "question": "addAtEnd() in a singly linked list that keeps only a head pointer is:",
      "options": [
        "O(1)",
        "O(n); it becomes O(1) if a tail pointer is also kept",
        "O(log n)",
        "O(n) even with a tail pointer"
      ],
      "answer": 1,
      "explanation": "Without tail we traverse to the last node; with tail we link directly."
    },
    {
      "id": 54,
      "code": "LL-02",
      "section": 6,
      "type": "Output",
      "difficulty": "medium",
      "question": "In deleteFirstNode(), after head = head.next, why set tail = null when head becomes null?",
      "options": [
        "Tail would still point to the removed node (dangling reference)",
        "Java requires it",
        "To reduce size",
        "To make head non-null"
      ],
      "answer": 0,
      "explanation": "When the only node is deleted the list is empty; tail must also be cleared."
    },
    {
      "id": 55,
      "code": "LL-03",
      "section": 6,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Reverse a singly list:\nprev=null; cur=head;\nwhile(cur!=null){ next=cur.next; cur.next=prev; ____; cur=next; }\nhead=prev;\nThe blank is:",
      "options": [
        "prev = cur",
        "cur = prev",
        "next = prev",
        "head = cur"
      ],
      "answer": 0,
      "explanation": "After reversing the link, prev must advance to the current node."
    },
    {
      "id": 56,
      "code": "LL-04",
      "section": 6,
      "type": "Trap",
      "difficulty": "hard",
      "question": "How can a cycle in a singly linked list be detected in O(n) time and O(1) space?",
      "options": [
        "Reverse the list and compare",
        "Count nodes using a stack",
        "Floyd's method: slow pointer moves 1 step, fast moves 2; they meet iff a cycle exists",
        "Binary search on node addresses"
      ],
      "answer": 2,
      "explanation": "Hare-and-tortoise needs no extra memory, unlike marking visited nodes."
    },
    {
      "id": 57,
      "code": "LL-05",
      "section": 6,
      "type": "Scenario",
      "difficulty": "medium",
      "question": "How do you find the middle of a singly linked list in a single pass?",
      "options": [
        "Count nodes then count again",
        "Use slow (1 step) and fast (2 steps) pointers; when fast reaches the end, slow is at the middle",
        "Reverse the list",
        "Use binary search"
      ],
      "answer": 1,
      "explanation": "Fast covers twice the distance of slow."
    },
    {
      "id": 58,
      "code": "LL-06",
      "section": 6,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Insert newNode BEFORE node cur in a doubly linked list (cur.prev exists). Which order of statements is correct?",
      "options": [
        "cur.prev=newNode; newNode.prev=cur.prev; newNode.next=cur; cur.prev.next=newNode;",
        "newNode.next=cur; newNode.prev=cur.prev; cur.prev.next=newNode; cur.prev=newNode;",
        "cur.prev.next=newNode; cur.prev=newNode; newNode.next=cur; newNode.prev=cur.prev;",
        "newNode.prev=cur; newNode.next=cur.prev; cur.prev=newNode; cur.next=newNode;"
      ],
      "answer": 1,
      "explanation": "newNode's links must be read from cur before cur.prev is overwritten. In A and C, newNode.prev ends up pointing to newNode itself. If cur is head, cur.prev is null and needs special handling."
    },
    {
      "id": 59,
      "code": "LL-07",
      "section": 6,
      "type": "Output",
      "difficulty": "medium",
      "question": "Delete a middle node cur from a doubly linked list:",
      "options": [
        "cur.prev.next = cur.next; cur.next.prev = cur.prev;",
        "cur.next = cur.prev;",
        "cur.prev.next = cur; cur.next.prev = cur;",
        "head = cur.next;"
      ],
      "answer": 0,
      "explanation": "Neighbours are linked to each other. Deleting the first or last node needs head/tail handling."
    },
    {
      "id": 60,
      "code": "LL-08",
      "section": 6,
      "type": "Output",
      "difficulty": "medium",
      "question": "Correct traversal of a non-empty circular singly linked list:",
      "options": [
        "while (cur != null) { process; cur = cur.next; }",
        "while (cur.next != null) { process; cur = cur.next; }",
        "do { process(cur); cur = cur.next; } while (cur != head);",
        "process(head) only"
      ],
      "answer": 2,
      "explanation": "There is no null in a circular list; traversal stops when we return to head. A dummy/sentinel node can simplify this."
    },
    {
      "id": 61,
      "code": "LL-09",
      "section": 6,
      "type": "Trap",
      "difficulty": "hard",
      "question": "A node pool (array of Node objects with an isFree[] array) allocates a node by scanning isFree[] for the first true entry. Worst-case allocation time?",
      "options": [
        "O(1)",
        "O(n)",
        "O(log n)",
        "O(n^2)"
      ],
      "answer": 1,
      "explanation": "The scan may check every slot; keeping a free-list/stack of free indices would make it O(1)."
    },
    {
      "id": 62,
      "code": "LL-10",
      "section": 6,
      "type": "Trap",
      "difficulty": "hard",
      "question": "How can the 3rd node from the END of a singly linked list be found in one pass?",
      "options": [
        "Reverse the list first (two passes)",
        "Count the nodes then traverse",
        "Binary search",
        "Move a lead pointer 3 nodes ahead, then move lead and follower together until lead is null; follower is the answer"
      ],
      "answer": 3,
      "explanation": "The two-pointer gap technique needs one traversal and O(1) space."
    },
    {
      "id": 63,
      "code": "LL-11",
      "section": 6,
      "type": "Trap",
      "difficulty": "hard",
      "question": "As per the notes' addAtPosition(position, element) pseudo-code, what happens when position equals the current size of the list (one past the last node)?",
      "options": [
        "Node is added at the end",
        "Nothing is inserted: current becomes empty and the algorithm stops",
        "Exception is thrown",
        "Node is added at the head"
      ],
      "answer": 1,
      "explanation": "The loop ends with current empty and the algorithm says 'if current is empty then Stop'. Appending must be done through addAtEnd."
    },
    {
      "id": 64,
      "code": "LL-12",
      "section": 6,
      "type": "Concept",
      "difficulty": "medium",
      "question": "Advantage of a doubly linked list over a singly linked list:",
      "options": [
        "Backward traversal and O(1) deletion of a node when a pointer to it is given",
        "Less memory",
        "Faster random access",
        "No head pointer required"
      ],
      "answer": 0,
      "explanation": "The prev pointer allows going back and unlinking without searching for the predecessor, at the cost of extra memory."
    },
    {
      "id": 65,
      "code": "LL-13",
      "section": 6,
      "type": "Scenario",
      "difficulty": "medium",
      "question": "Best way to implement a stack with a singly linked list:",
      "options": [
        "Push and pop at the head (both O(1))",
        "Push at tail, pop at head",
        "Push at head, pop at tail using only head",
        "Sorted insertion"
      ],
      "answer": 0,
      "explanation": "Head operations are O(1); tail operations need traversal in a singly list."
    },
    {
      "id": 66,
      "code": "LL-14",
      "section": 6,
      "type": "Output",
      "difficulty": "medium",
      "question": "addAtFront on a singly list that keeps head and tail. What extra step is needed when the list was empty?",
      "options": [
        "Nothing extra",
        "Make newNode.next point to itself",
        "Set head to null",
        "Set tail to the new node as well"
      ],
      "answer": 3,
      "explanation": "When the first node is added it is both first and last, so tail must also point to it (the notes: 'if tail is empty then set tail to head')."
    },
    {
      "id": 67,
      "code": "LL-15",
      "section": 6,
      "type": "Trap",
      "difficulty": "hard",
      "question": "In delete(element) for a singly list the code keeps a 'previous' pointer. If the element is found in the FIRST node, previous is empty. What must be done?",
      "options": [
        "Set previous.next = current.next",
        "Set tail = previous",
        "Nothing; first node cannot be deleted",
        "Move head to head.next (then release the node)"
      ],
      "answer": 3,
      "explanation": "previous.next cannot be used when previous is empty; the head pointer itself has to change."
    },
    {
      "id": 68,
      "code": "LL-16",
      "section": 6,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Insert 7 into the sorted list 2 -> 5 -> 9 -> 12 using the notes' addAtPosition(position, element). Which position is used and what are previous/current when the loop stops?",
      "options": [
        "Position 1; previous = 2",
        "Position 2; previous = 9",
        "Position 2; previous = 5, current = 9",
        "Position 3; previous = 9"
      ],
      "answer": 3,
      "explanation": "Index 2 (0-based) is where 7 belongs: previous = 5, current = 9. Then newNode.next = current and previous.next = newNode."
    },
    {
      "id": 69,
      "code": "LL-17",
      "section": 6,
      "type": "Output",
      "difficulty": "medium",
      "question": "addAtEnd() in a doubly linked list that has a tail pointer (non-empty list):",
      "options": [
        "head.next = newNode",
        "newNode.next = tail",
        "tail.prev = newNode; tail = newNode",
        "newNode.prev = tail; tail.next = newNode; tail = newNode"
      ],
      "answer": 3,
      "explanation": "Link the new node after the current tail in both directions, then move tail. Cost O(1)."
    },
    {
      "id": 70,
      "code": "LL-18",
      "section": 6,
      "type": "Trap",
      "difficulty": "hard",
      "question": "deleteFirstNode() in a doubly linked list. Which is correct?",
      "options": [
        "head.next = null",
        "head = head.prev",
        "tail = head",
        "head = head.next; if list becomes empty set tail = null else head.prev = null"
      ],
      "answer": 3,
      "explanation": "The new head must not point back to the deleted node; if the only node was removed, tail must be cleared too."
    },
    {
      "id": 71,
      "code": "LL-19",
      "section": 6,
      "type": "Concept",
      "difficulty": "medium",
      "question": "In a circular doubly linked list implemented with a dummy (sentinel) node, an EMPTY list is represented by:",
      "options": [
        "head == null",
        "size < 0",
        "dummy == null",
        "dummy.next == dummy and dummy.prev == dummy"
      ],
      "answer": 3,
      "explanation": "The sentinel always exists, so insertion/deletion code needs no null checks or first/last special cases."
    },
    {
      "id": 72,
      "code": "LL-20",
      "section": 6,
      "type": "Concept",
      "difficulty": "medium",
      "question": "Deleting the LAST node of a doubly linked list that has a tail pointer takes:",
      "options": [
        "O(log n)",
        "Cannot be done",
        "O(n) traversal like a singly list",
        "O(1): tail = tail.prev; tail.next = null"
      ],
      "answer": 3,
      "explanation": "The prev pointer gives direct access to the new last node; a singly list needs O(n) to find the predecessor."
    },
    {
      "id": 73,
      "code": "RC-01",
      "section": 7,
      "type": "Concept",
      "difficulty": "easy",
      "question": "A recursive function with no reachable base case will:",
      "options": [
        "Compile-fail",
        "Throw StackOverflowError at run time",
        "Return 0",
        "Run forever with constant memory"
      ],
      "answer": 1,
      "explanation": "Every call adds an activation record to the call stack until it overflows."
    },
    {
      "id": 74,
      "code": "RC-02",
      "section": 7,
      "type": "Output",
      "difficulty": "medium",
      "question": "void p(int n){ if(n==0) return; print(n); p(n-1); print(n); }\nOutput of p(3)?",
      "options": [
        "3 2 1",
        "1 2 3",
        "3 2 1 1 2 3",
        "3 2 1 0 1 2 3"
      ],
      "answer": 2,
      "explanation": "Prints on the way down (3 2 1) and again while unwinding (1 2 3)."
    },
    {
      "id": 75,
      "code": "RC-03",
      "section": 7,
      "type": "Output",
      "difficulty": "medium",
      "question": "f(n): if n<=1 return n; return f(n-1)+f(n-2). Value of f(6)?",
      "options": [
        "5",
        "8",
        "13",
        "21"
      ],
      "answer": 1,
      "explanation": "Sequence 0,1,1,2,3,5,8 -> f(6)=8."
    },
    {
      "id": 76,
      "code": "RC-04",
      "section": 7,
      "type": "Trap",
      "difficulty": "hard",
      "question": "f(n): if n<=2 return 1; return f(n-1)+f(n-2). Total number of calls (including f(5) itself) for f(5)?",
      "options": [
        "5",
        "7",
        "9",
        "15"
      ],
      "answer": 2,
      "explanation": "Recursion tree: f5,f4,f3,f2,f1,f2,f3,f2,f1 = 9 nodes."
    },
    {
      "id": 77,
      "code": "RC-05",
      "section": 7,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Same function with memoization (mem[n]!=0 -> return mem[n]; base case n<=2 stores 1). If callCount increments on every call, what is callCount for f(5)?",
      "options": [
        "5",
        "7",
        "9",
        "4"
      ],
      "answer": 1,
      "explanation": "Calls: f5,f4,f3,f2,f1 (first descent) + f2 (from f4) + f3 (memo hit from f5) = 7."
    },
    {
      "id": 78,
      "code": "RC-06",
      "section": 7,
      "type": "Concept",
      "difficulty": "medium",
      "question": "Which return statement is tail-recursive?",
      "options": [
        "return n * fact(n-1);",
        "return gcd(b, a % b);",
        "return fib(n-1) + fib(n-2);",
        "return 1 + length(rest);"
      ],
      "answer": 1,
      "explanation": "In gcd the recursive call is the last operation; the others do work after the call returns."
    },
    {
      "id": 79,
      "code": "RC-07",
      "section": 7,
      "type": "Concept",
      "difficulty": "medium",
      "question": "Space complexity of recursive factorial(n) is:",
      "options": [
        "O(1)",
        "O(n)",
        "O(log n)",
        "O(n^2)"
      ],
      "answer": 1,
      "explanation": "n activation records exist on the call stack at the deepest point."
    },
    {
      "id": 80,
      "code": "RC-08",
      "section": 7,
      "type": "Trap",
      "difficulty": "hard",
      "question": "multiply(m,n) = 0 if m==0, else n + multiply(m-1, n). For multiply(3,4) the result and number of calls are:",
      "options": [
        "12, 3 calls",
        "12, 4 calls",
        "7, 4 calls",
        "16, 5 calls"
      ],
      "answer": 1,
      "explanation": "4+4+4+0 = 12 using calls for m=3,2,1,0 = 4 calls."
    },
    {
      "id": 81,
      "code": "RC-09",
      "section": 7,
      "type": "Concept",
      "difficulty": "easy",
      "question": "An activation record (stack frame) typically stores:",
      "options": [
        "Parameters, local variables and return address",
        "Only heap objects",
        "Only global variables",
        "Source code"
      ],
      "answer": 0,
      "explanation": "These items are kept per function call, which is how recursion keeps separate state."
    },
    {
      "id": 82,
      "code": "RC-10",
      "section": 7,
      "type": "Concept",
      "difficulty": "medium",
      "question": "Backtracking (e.g. N-Queens, Sudoku, maze) means:",
      "options": [
        "Trying every complete candidate with no pruning",
        "Solving independent subproblems and combining them",
        "Using random choices",
        "Building the solution step by step and abandoning partial choices that cannot lead to a valid solution"
      ],
      "answer": 3,
      "explanation": "It is recursion with pruning: undo the last choice when a dead end is found."
    },
    {
      "id": 83,
      "code": "RC-11",
      "section": 7,
      "type": "Output",
      "difficulty": "medium",
      "question": "f(int n){ if(n==0) return 0; return f(n+1)+1; } is called as f(5). Result?",
      "options": [
        "0",
        "5",
        "StackOverflowError (base case never reached)",
        "Terminates normally with no output"
      ],
      "answer": 2,
      "explanation": "n moves away from 0, so infinite recursion occurs."
    },
    {
      "id": 84,
      "code": "RC-12",
      "section": 7,
      "type": "Concept",
      "difficulty": "medium",
      "question": "Steps of a divide-and-conquer algorithm are:",
      "options": [
        "Guess, Check, Repeat",
        "Sort, Search, Merge",
        "Memoize, Tabulate, Return",
        "Divide, Conquer, Combine (combine is optional for some problems)"
      ],
      "answer": 3,
      "explanation": "Divide the problem, solve (conquer) smaller problems until base case, then combine their solutions, e.g. merge sort needs combine, binary search does not."
    },
    {
      "id": 85,
      "code": "RC-13",
      "section": 7,
      "type": "Concept",
      "difficulty": "medium",
      "question": "A calling convention specifies:",
      "options": [
        "The names of functions",
        "The data types of variables",
        "The size of the heap",
        "The order in which function arguments are placed on the stack and whether the caller or callee clears the stack frame"
      ],
      "answer": 3,
      "explanation": "It standardises how activation records are created and cleaned for function calls."
    },
    {
      "id": 86,
      "code": "RC-14",
      "section": 7,
      "type": "Concept",
      "difficulty": "medium",
      "question": "Pros and cons of recursion:",
      "options": [
        "Uses no extra memory",
        "Always faster than loops",
        "Cannot express DFS",
        "Simple code for trees, divide-and-conquer and backtracking, but uses stack memory and call overhead"
      ],
      "answer": 3,
      "explanation": "Each call adds an activation record, so deep recursion costs O(depth) space and may overflow the stack."
    },
    {
      "id": 87,
      "code": "RC-15",
      "section": 7,
      "type": "Trap",
      "difficulty": "hard",
      "question": "void f(int n){ if(n<=0) return; g(n-1);}  void g(int n){ f(n-1);}  What kind of recursion is this and does f(3) terminate?",
      "options": [
        "Direct recursion; infinite",
        "Tail recursion only",
        "Not recursion",
        "Indirect recursion; terminates because n decreases to <= 0"
      ],
      "answer": 3,
      "explanation": "f calls g and g calls f (indirect). n goes 3,2,1,0 so the base case is reached."
    },
    {
      "id": 88,
      "code": "TR-01",
      "section": 8,
      "type": "Scenario",
      "difficulty": "medium",
      "question": "Tree: A has children B and C; B has child D; D has child E. Height of the tree (edges on longest root-to-leaf path)?",
      "options": [
        "2",
        "3",
        "4",
        "5"
      ],
      "answer": 1,
      "explanation": "Longest path A-B-D-E has 3 edges."
    },
    {
      "id": 89,
      "code": "TR-02",
      "section": 8,
      "type": "Concept",
      "difficulty": "medium",
      "question": "Maximum number of nodes in a binary tree of height 4 (root at height 0 level)?",
      "options": [
        "15",
        "16",
        "31",
        "32"
      ],
      "answer": 2,
      "explanation": "2^(h+1) - 1 = 2^5 - 1 = 31."
    },
    {
      "id": 90,
      "code": "TR-03",
      "section": 8,
      "type": "Trap",
      "difficulty": "hard",
      "question": "A full binary tree (every node has 0 or 2 children) has 7 leaves. Total nodes?",
      "options": [
        "13",
        "14",
        "7",
        "15"
      ],
      "answer": 0,
      "explanation": "A full binary tree with L leaves has 2L - 1 nodes = 13."
    },
    {
      "id": 91,
      "code": "TR-04",
      "section": 8,
      "type": "Concept",
      "difficulty": "medium",
      "question": "Which statement is correct?",
      "options": [
        "Every complete binary tree is full",
        "Every perfect binary tree is both full and complete",
        "Every full binary tree is perfect",
        "A perfect binary tree can have a node with one child"
      ],
      "answer": 1,
      "explanation": "Perfect = all internal nodes have two children and all leaves at the same depth; so it is full and complete."
    },
    {
      "id": 92,
      "code": "TR-05",
      "section": 8,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Almost complete binary tree with 10 nodes stored in a 0-indexed array. Index of the last parent, and parent of index 7?",
      "options": [
        "5 and 3",
        "4 and 3",
        "4 and 4",
        "5 and 2"
      ],
      "answer": 1,
      "explanation": "Last parent = n/2 - 1 = 4; parent(i) = (i-1)/2 = 3 for i=7. Children of i are 2i+1 and 2i+2."
    },
    {
      "id": 93,
      "code": "TR-06",
      "section": 8,
      "type": "Output",
      "difficulty": "medium",
      "question": "Binary tree: root 5; left child 10 (which has left child 8); right child 6. Postorder traversal?",
      "options": [
        "5 10 8 6",
        "8 10 5 6",
        "8 10 6 5",
        "5 10 6 8"
      ],
      "answer": 2,
      "explanation": "Postorder = left, right, root: 8, 10, 6, 5."
    },
    {
      "id": 94,
      "code": "TR-07",
      "section": 8,
      "type": "Output",
      "difficulty": "medium",
      "question": "For the same tree (root 5; left 10 with left child 8; right 6) the level-order traversal is:",
      "options": [
        "5 10 6 8",
        "5 6 10 8",
        "8 10 5 6",
        "5 10 8 6"
      ],
      "answer": 0,
      "explanation": "Level order uses a queue: level 0: 5; level 1: 10, 6; level 2: 8."
    },
    {
      "id": 95,
      "code": "TR-08",
      "section": 8,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Preorder = A B D E C and Inorder = D B E A C (distinct values). Postorder of the unique tree?",
      "options": [
        "D B E C A",
        "D E B C A",
        "B D E C A",
        "D E C B A"
      ],
      "answer": 1,
      "explanation": "Root A; left subtree (D B E) with root B; right subtree C. Postorder: D E B C A."
    },
    {
      "id": 96,
      "code": "TR-09",
      "section": 8,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Which pair of traversals does NOT always determine a unique binary tree (with distinct keys)?",
      "options": [
        "Preorder + Inorder",
        "Postorder + Inorder",
        "Preorder + Postorder",
        "Level order + Inorder"
      ],
      "answer": 2,
      "explanation": "A node with a single child can be left or right with identical preorder/postorder, so the tree is ambiguous."
    },
    {
      "id": 97,
      "code": "TR-10",
      "section": 8,
      "type": "Scenario",
      "difficulty": "medium",
      "question": "Expression tree for a + b * c. Which is correct?",
      "options": [
        "Preorder gives +a*bc and postorder gives abc*+",
        "Preorder gives abc*+",
        "Postorder gives +a*bc",
        "Inorder gives abc*+"
      ],
      "answer": 0,
      "explanation": "Preorder = prefix, postorder = postfix, inorder = infix (without brackets)."
    },
    {
      "id": 98,
      "code": "TR-11",
      "section": 8,
      "type": "Output",
      "difficulty": "medium",
      "question": "int f(Node n){ if(n==null) return 0; if(n.left==null && n.right==null) return 1; return f(n.left)+f(n.right); } returns:",
      "options": [
        "Total nodes",
        "Height",
        "Number of leaf nodes",
        "Number of internal nodes"
      ],
      "answer": 2,
      "explanation": "It counts only nodes without children."
    },
    {
      "id": 99,
      "code": "TR-12",
      "section": 8,
      "type": "Concept",
      "difficulty": "medium",
      "question": "Recursive inorder traversal of a binary tree of n nodes and height h has:",
      "options": [
        "O(n) time, O(h) extra space for the call stack",
        "O(n log n) time, O(1) space",
        "O(n) time, O(1) space",
        "O(h) time, O(n) space"
      ],
      "answer": 0,
      "explanation": "Each node is visited once; recursion depth is the tree height."
    },
    {
      "id": 100,
      "code": "TR-13",
      "section": 8,
      "type": "Concept",
      "difficulty": "medium",
      "question": "Trie lookup of a word of length w in a dictionary of n words is:",
      "options": [
        "O(n)",
        "O(n x w)",
        "O(w), independent of n",
        "O(log n) always"
      ],
      "answer": 2,
      "explanation": "One node per character is followed from the root."
    },
    {
      "id": 101,
      "code": "TR-14",
      "section": 8,
      "type": "Concept",
      "difficulty": "medium",
      "question": "Purpose of a threaded binary tree:",
      "options": [
        "To store trees in arrays",
        "Use null child pointers as threads to inorder predecessor/successor so traversal needs no stack or recursion",
        "To balance the height",
        "To make the tree complete"
      ],
      "answer": 1,
      "explanation": "Threads let inorder traversal be done iteratively with O(1) extra space."
    },
    {
      "id": 102,
      "code": "TR-15",
      "section": 8,
      "type": "Concept",
      "difficulty": "medium",
      "question": "Which structures are used by level-order traversal and iterative DFS respectively?",
      "options": [
        "Stack; queue",
        "Queue; stack",
        "Queue; queue",
        "Stack; stack"
      ],
      "answer": 1,
      "explanation": "BFS/level order -> queue, DFS -> stack (or recursion)."
    },
    {
      "id": 103,
      "code": "TR-16",
      "section": 8,
      "type": "Concept",
      "difficulty": "medium",
      "question": "Minimum number of nodes in a full binary tree of height 4 (height counted in edges)?",
      "options": [
        "16",
        "31",
        "15",
        "9"
      ],
      "answer": 3,
      "explanation": "Minimum = 2h + 1 (each level adds two nodes along one path) = 9. The maximum for a full/perfect tree is 2^(h+1) - 1 = 31."
    },
    {
      "id": 104,
      "code": "TR-17",
      "section": 8,
      "type": "Scenario",
      "difficulty": "medium",
      "question": "Tree: A has children B and C; B has child D; D has child E. Depth (level) of node E?",
      "options": [
        "3",
        "4",
        "2",
        "1"
      ],
      "answer": 3,
      "explanation": "Depth = number of edges from the root to the node: A-B-D-E = 3."
    },
    {
      "id": 105,
      "code": "TR-18",
      "section": 8,
      "type": "Concept",
      "difficulty": "easy",
      "question": "Which tree is used to represent all possible moves in Tic-Tac-Toe?",
      "options": [
        "Heap",
        "B-tree",
        "Trie",
        "Game tree"
      ],
      "answer": 3,
      "explanation": "Game trees store positions as nodes and moves as edges."
    },
    {
      "id": 106,
      "code": "TR-19",
      "section": 8,
      "type": "Concept",
      "difficulty": "easy",
      "question": "A ternary tree is a tree in which each node has:",
      "options": [
        "Exactly 2 children",
        "Exactly 3 children and sorted keys",
        "At most 2 children",
        "At most 3 children"
      ],
      "answer": 3,
      "explanation": "An n-ary tree allows at most n children per node; binary = 2, ternary = 3."
    },
    {
      "id": 107,
      "code": "TR-20",
      "section": 8,
      "type": "Output",
      "difficulty": "medium",
      "question": "Tree: root 5; left child 10 (left child 8); right child 6. Inorder traversal?",
      "options": [
        "8 10 5 6",
        "5 10 8 6",
        "10 8 5 6",
        "8 10 6 5"
      ],
      "answer": 0,
      "explanation": "Inorder = left, root, right."
    },
    {
      "id": 108,
      "code": "TR-21",
      "section": 8,
      "type": "Trap",
      "difficulty": "hard",
      "question": "cur=root; while(cur!=null || !stack.isEmpty()){ while(cur!=null){ stack.push(cur); cur=cur.left; } cur=stack.pop(); print(cur.data); cur=cur.right; }  This iterative code prints nodes in which order?",
      "options": [
        "Postorder",
        "Preorder",
        "Level order",
        "Inorder"
      ],
      "answer": 3,
      "explanation": "It goes as far left as possible, processes the node after its left subtree, then moves to the right subtree: inorder."
    },
    {
      "id": 109,
      "code": "TR-22",
      "section": 8,
      "type": "Trap",
      "difficulty": "hard",
      "question": "A trie contains only the word 'abc'. Each node has child links and an end-of-word flag. What does search('ab') return?",
      "options": [
        "Exception",
        "true, because the path exists",
        "false, because the end-of-word flag is not set at node 'b'",
        "true only if startsWith"
      ],
      "answer": 2,
      "explanation": "A word exists only if its last node is marked as an end of word; 'ab' is just a prefix."
    },
    {
      "id": 110,
      "code": "TR-23",
      "section": 8,
      "type": "Concept",
      "difficulty": "medium",
      "question": "Why does preorder traversal of a tree not need an isVisited array while DFS on a graph does?",
      "options": [
        "Trees are smaller",
        "Graphs use stacks and trees do not",
        "Trees use recursion and graphs do not",
        "A tree has no cycles, so no node is reached twice"
      ],
      "answer": 3,
      "explanation": "In a graph with cycles, vertices must be marked to avoid revisiting and infinite recursion."
    },
    {
      "id": 111,
      "code": "TR-24",
      "section": 8,
      "type": "Scenario",
      "difficulty": "medium",
      "question": "How can level-order traversal print each level on a separate line?",
      "options": [
        "Use preorder instead",
        "Use recursion only",
        "Process exactly (queue size at start of level) nodes per round, or use a null marker after each level",
        "Sort the nodes first"
      ],
      "answer": 2,
      "explanation": "The queue contains exactly one level at the start of each round."
    },
    {
      "id": 112,
      "code": "BS-01",
      "section": 9,
      "type": "Output",
      "difficulty": "medium",
      "question": "Keys inserted into an empty BST in order: 50, 30, 70, 20, 40, 60, 80. Preorder traversal?",
      "options": [
        "50 30 20 40 70 60 80",
        "20 30 40 50 60 70 80",
        "50 30 70 20 40 60 80",
        "20 40 30 60 80 70 50"
      ],
      "answer": 0,
      "explanation": "Root 50; left subtree 30(20,40); right subtree 70(60,80). Preorder = root, left, right."
    },
    {
      "id": 113,
      "code": "BS-02",
      "section": 9,
      "type": "Scenario",
      "difficulty": "medium",
      "question": "Keys 10, 20, 30, 40, 50 are inserted in this order into a BST. Height and search complexity?",
      "options": [
        "Height 2, O(log n)",
        "Height 3, O(log n)",
        "Height 4, O(n) (skewed)",
        "Height 5, O(1)"
      ],
      "answer": 2,
      "explanation": "Sorted input creates a right-skewed tree (a linked list), so operations degrade to O(n)."
    },
    {
      "id": 114,
      "code": "BS-03",
      "section": 9,
      "type": "Concept",
      "difficulty": "medium",
      "question": "Deleting a BST node with two children is done by:",
      "options": [
        "Replacing its value with the inorder successor (or predecessor) and deleting that node",
        "Deleting both subtrees",
        "Replacing it with the root",
        "Replacing it with any leaf"
      ],
      "answer": 0,
      "explanation": "The inorder successor has at most one (right) child, making its removal simple."
    },
    {
      "id": 115,
      "code": "BS-04",
      "section": 9,
      "type": "Trap",
      "difficulty": "hard",
      "question": "In the BST built from 50,30,70,20,40,60,80, root 50 is deleted using the inorder successor. New root?",
      "options": [
        "30",
        "60",
        "70",
        "40"
      ],
      "answer": 1,
      "explanation": "Inorder successor of 50 = leftmost node of right subtree = 60."
    },
    {
      "id": 116,
      "code": "BS-05",
      "section": 9,
      "type": "Trap",
      "difficulty": "hard",
      "question": "In the same BST, inorder successor of node 40 (it has no right child)?",
      "options": [
        "50",
        "60",
        "70",
        "30"
      ],
      "answer": 0,
      "explanation": "With no right subtree, the successor is the lowest ancestor whose left subtree contains the node: 50."
    },
    {
      "id": 117,
      "code": "BS-06",
      "section": 9,
      "type": "Trap",
      "difficulty": "hard",
      "question": "A BST contains keys 1..100 and 63 is searched. Which sequence of visited nodes is IMPOSSIBLE?",
      "options": [
        "50, 80, 60, 70, 65, 62",
        "20, 90, 40, 80, 55, 70, 65",
        "10, 75, 64, 43, 60, 57, 55",
        "30, 70, 65, 60, 62"
      ],
      "answer": 2,
      "explanation": "After 60 we go right, so later keys must be > 60 (and < 64). 57 violates the BST range."
    },
    {
      "id": 118,
      "code": "BS-07",
      "section": 9,
      "type": "Trap",
      "difficulty": "hard",
      "question": "BST preorder: 8, 3, 1, 6, 4, 7, 10, 14, 13. Its postorder is:",
      "options": [
        "1 4 7 6 3 13 14 10 8",
        "1 3 4 6 7 8 10 13 14",
        "8 3 10 1 6 14 4 7 13",
        "1 4 6 7 3 13 14 10 8"
      ],
      "answer": 0,
      "explanation": "Root 8; left 3(1, 6(4,7)); right 10(-, 14(13,-)). Postorder = 1 4 7 6 3 13 14 10 8."
    },
    {
      "id": 119,
      "code": "BS-08",
      "section": 9,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Number of structurally different BSTs possible with 3 distinct keys?",
      "options": [
        "3",
        "5",
        "6",
        "8"
      ],
      "answer": 1,
      "explanation": "Catalan number C3 = 5."
    },
    {
      "id": 120,
      "code": "BS-09",
      "section": 9,
      "type": "Scenario",
      "difficulty": "medium",
      "question": "Building a balanced BST from sorted array [1..7]: root and height?",
      "options": [
        "Root 1, height 6",
        "Root 4, height 2",
        "Root 7, height 6",
        "Root 4, height 3"
      ],
      "answer": 1,
      "explanation": "Pick the middle element recursively; 7 nodes fit in a perfect tree of height 2."
    },
    {
      "id": 121,
      "code": "BS-10",
      "section": 9,
      "type": "Concept",
      "difficulty": "medium",
      "question": "Approximate comparisons to search a balanced BST of 1,000,000 keys?",
      "options": [
        "About 20",
        "About 1,000",
        "About 500,000",
        "About 10"
      ],
      "answer": 0,
      "explanation": "log2(10^6) is about 20."
    },
    {
      "id": 122,
      "code": "BS-11",
      "section": 9,
      "type": "Concept",
      "difficulty": "medium",
      "question": "Inorder successor of a node that has a right subtree is:",
      "options": [
        "Rightmost node of the left subtree",
        "Leftmost node of its right subtree",
        "Its parent",
        "The root"
      ],
      "answer": 1,
      "explanation": "The smallest key larger than the node lies at the leftmost position of the right subtree."
    },
    {
      "id": 123,
      "code": "BS-12",
      "section": 9,
      "type": "Output",
      "difficulty": "medium",
      "question": "In iterative BST insert, we keep a 'parent' pointer while moving 'current'. Why?",
      "options": [
        "To attach the new node, because current becomes null when the position is found",
        "To count nodes",
        "To rebalance",
        "To delete the node"
      ],
      "answer": 0,
      "explanation": "When current becomes empty, parent is the node to which newNode must be linked."
    },
    {
      "id": 124,
      "code": "BS-13",
      "section": 9,
      "type": "Trap",
      "difficulty": "hard",
      "question": "BST built from 50, 30, 70, 20, 40, 60, 80. Inorder predecessor of 60?",
      "options": [
        "50",
        "70",
        "40",
        "30"
      ],
      "answer": 0,
      "explanation": "60 has no left child, so the predecessor is the nearest ancestor reached by going up from a right-child link: 60 is the left child of 70, and 70 is the right child of 50, so the predecessor is 50."
    },
    {
      "id": 125,
      "code": "BS-14",
      "section": 9,
      "type": "Trap",
      "difficulty": "hard",
      "question": "In the same BST delete 60 and then delete 70. Which is true afterwards?",
      "options": [
        "80 becomes the root",
        "50's right child becomes 60",
        "50's right child becomes 80",
        "70 is replaced by 50"
      ],
      "answer": 2,
      "explanation": "60 is a leaf (simply removed). 70 then has one child (80), so the child replaces 70 under its parent 50."
    },
    {
      "id": 126,
      "code": "BS-15",
      "section": 9,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Keys inserted in order 8, 3, 10, 1, 6, 14, 4, 7, 13. Height of the BST (edges)?",
      "options": [
        "2",
        "4",
        "5",
        "3"
      ],
      "answer": 3,
      "explanation": "Longest paths: 8-3-6-4 and 8-10-14-13, each 3 edges."
    },
    {
      "id": 127,
      "code": "BS-16",
      "section": 9,
      "type": "Output",
      "difficulty": "medium",
      "question": "Same BST (8,3,10,1,6,14,4,7,13). How many nodes are compared while searching for 7?",
      "options": [
        "4",
        "6",
        "3",
        "5"
      ],
      "answer": 0,
      "explanation": "Path: 8 -> 3 -> 6 -> 7 = 4 nodes."
    },
    {
      "id": 128,
      "code": "AV-01",
      "section": 10,
      "type": "Concept",
      "difficulty": "easy",
      "question": "AVL property:",
      "options": [
        "For every node |height(left) - height(right)| <= 1",
        "All leaves are at the same depth",
        "Every node has 0 or 2 children",
        "Left subtree is shorter than right subtree"
      ],
      "answer": 0,
      "explanation": "Balance factor of every node must be -1, 0 or +1."
    },
    {
      "id": 129,
      "code": "AV-02",
      "section": 10,
      "type": "Output",
      "difficulty": "medium",
      "question": "Insert 10, 20, 30 into an AVL tree. What happens?",
      "options": [
        "RR imbalance at 10 -> left rotation; 20 becomes root",
        "LL imbalance -> right rotation",
        "LR double rotation",
        "No rotation needed"
      ],
      "answer": 0,
      "explanation": "Skewed to the right; a left rotation around 20 balances it."
    },
    {
      "id": 130,
      "code": "AV-03",
      "section": 10,
      "type": "Output",
      "difficulty": "medium",
      "question": "Insert 30, 10, 20 into an AVL tree. Which fix is applied?",
      "options": [
        "Single right rotation",
        "Left rotation at 10 then right rotation at 30 (LR case); 20 becomes root",
        "Single left rotation",
        "Right then left rotation"
      ],
      "answer": 1,
      "explanation": "20 is the right child of the left child of 30: LR imbalance needs a double rotation."
    },
    {
      "id": 131,
      "code": "AV-04",
      "section": 10,
      "type": "Output",
      "difficulty": "medium",
      "question": "Insert 10, 30, 20 into an AVL tree. Case and result?",
      "options": [
        "Right rotation at 30 then left rotation at 10 (RL); 20 becomes root",
        "LL; single rotation",
        "LR; left then right",
        "No imbalance"
      ],
      "answer": 0,
      "explanation": "20 lies in the left subtree of the right child: RL case."
    },
    {
      "id": 132,
      "code": "AV-05",
      "section": 10,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Insert 15, 20, 30, 35, 40, 45 (in order) into an empty AVL tree. Root of the final tree?",
      "options": [
        "20",
        "30",
        "35",
        "40"
      ],
      "answer": 2,
      "explanation": "After 30: root 20. After 40 rotate at 30 -> 35. After 45 the root 20 becomes unbalanced (RR) and a left rotation makes 35 the root with 20(15,30) and 40(-,45)."
    },
    {
      "id": 133,
      "code": "AV-06",
      "section": 10,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Minimum number of nodes in an AVL tree of height 4 (single node has height 0)? Use N(h)=N(h-1)+N(h-2)+1.",
      "options": [
        "8",
        "10",
        "12",
        "15"
      ],
      "answer": 2,
      "explanation": "N(0)=1, N(1)=2, N(2)=4, N(3)=7, N(4)=12."
    },
    {
      "id": 134,
      "code": "AV-07",
      "section": 10,
      "type": "Trap",
      "difficulty": "hard",
      "question": "BST: root 10, left child 5, right child 20; 20 has right child 30; 30 has right child 40. Is it an AVL tree?",
      "options": [
        "Yes",
        "No: node 20 has balance factor -2 (RR case)",
        "No: 5 is a leaf",
        "Not a BST"
      ],
      "answer": 1,
      "explanation": "Left height of 20 is 0 and right height is 2, so |BF|=2."
    },
    {
      "id": 135,
      "code": "AV-08",
      "section": 10,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Rotations needed after an operation:",
      "options": [
        "Insertion: at most one single or double rotation; deletion: may need O(log n) rotations",
        "Insertion needs O(log n) rotations",
        "Deletion never needs rotations",
        "Both always exactly two"
      ],
      "answer": 0,
      "explanation": "Insertion fixes the lowest unbalanced node and the whole tree is restored; deletion may propagate imbalance upward."
    },
    {
      "id": 136,
      "code": "AV-09",
      "section": 10,
      "type": "Concept",
      "difficulty": "medium",
      "question": "g is the nearest unbalanced ancestor of the new node; p is g's left child and the new node lies in p's right subtree. The case is:",
      "options": [
        "LL",
        "LR",
        "RR",
        "RL"
      ],
      "answer": 1,
      "explanation": "Path from g: left then right = LR, needing a left rotation around p then a right rotation around g."
    },
    {
      "id": 137,
      "code": "AV-10",
      "section": 10,
      "type": "Concept",
      "difficulty": "easy",
      "question": "Worst-case search time in an AVL tree with n nodes:",
      "options": [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n log n)"
      ],
      "answer": 1,
      "explanation": "AVL height is at most about 1.44 log2(n)."
    },
    {
      "id": 138,
      "code": "AV-11",
      "section": 10,
      "type": "Scenario",
      "difficulty": "medium",
      "question": "A read-mostly dictionary has rare updates. Which structure is best?",
      "options": [
        "Unbalanced BST",
        "Unsorted array",
        "Linked list",
        "AVL tree (strict balance gives shallow height and fast lookups)"
      ],
      "answer": 3,
      "explanation": "AVL trees guarantee O(log n) operations and are more strictly balanced than red-black trees."
    },
    {
      "id": 139,
      "code": "AV-12",
      "section": 10,
      "type": "Concept",
      "difficulty": "medium",
      "question": "A left rotation at node g (p = g.right) does what?",
      "options": [
        "p's right child becomes g",
        "g becomes the right child of p and p keeps its left subtree",
        "p becomes the subtree root, g becomes p's left child, and p's old left subtree becomes g's right child",
        "No pointers change"
      ],
      "answer": 2,
      "explanation": "Left rotation lifts the right child; the middle subtree (p.left) moves under g to keep BST ordering."
    },
    {
      "id": 140,
      "code": "AV-13",
      "section": 10,
      "type": "Output",
      "difficulty": "medium",
      "question": "Insert 15, 10, 5 in an AVL tree. Which imbalance occurs and what is the new root?",
      "options": [
        "LR imbalance; root 5",
        "RR imbalance; left rotation; root 10",
        "No imbalance; root 15",
        "LL imbalance; right rotation; root 10"
      ],
      "answer": 3,
      "explanation": "The tree is left-skewed (LL) at 15; a right rotation makes 10 the root with children 5 and 15."
    },
    {
      "id": 141,
      "code": "AV-14",
      "section": 10,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Insert 15, 5, 10 in an AVL tree. New root?",
      "options": [
        "15",
        "No rotation",
        "5",
        "10"
      ],
      "answer": 0,
      "explanation": "10 is the right child of the left child of 15 (LR). Left rotation at 5 then right rotation at 15 makes 10 the root."
    },
    {
      "id": 142,
      "code": "SE-01",
      "section": 11,
      "type": "Concept",
      "difficulty": "easy",
      "question": "Linear search complexity:",
      "options": [
        "O(1) worst case",
        "O(n) worst case, O(1) best case",
        "O(log n)",
        "O(n^2)"
      ],
      "answer": 1,
      "explanation": "Best: key at first position; worst: last position or absent."
    },
    {
      "id": 143,
      "code": "SE-02",
      "section": 11,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Binary search for 23 in {2,5,8,12,16,23,38,56,72,91}. Number of elements compared with the key (mid probes)?",
      "options": [
        "2",
        "3",
        "4",
        "5"
      ],
      "answer": 1,
      "explanation": "mid=4 (16) -> mid=7 (56) -> mid=5 (23) found: 3 probes."
    },
    {
      "id": 144,
      "code": "SE-03",
      "section": 11,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Maximum comparisons of binary search in a sorted array of 1024 elements?",
      "options": [
        "9",
        "10",
        "11",
        "12"
      ],
      "answer": 2,
      "explanation": "floor(log2 1024) + 1 = 11."
    },
    {
      "id": 145,
      "code": "SE-04",
      "section": 11,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Binary search written as while(low<=high){ mid=(low+high)/2; if(key<a[mid]) high=mid; else if(key>a[mid]) low=mid+1; else return mid; } What is the bug?",
      "options": [
        "Works correctly",
        "Possible infinite loop: high=mid may not shrink the range (use mid-1)",
        "ArrayIndexOutOfBounds always",
        "Returns -1 always"
      ],
      "answer": 1,
      "explanation": "When low==high and key<a[mid], high stays equal to mid, so the loop never ends."
    },
    {
      "id": 146,
      "code": "SE-05",
      "section": 11,
      "type": "Concept",
      "difficulty": "medium",
      "question": "A safer midpoint in Java for very large arrays is:",
      "options": [
        "low + (high - low) / 2",
        "low * high / 2",
        "(low + high) * 2",
        "high - low"
      ],
      "answer": 0,
      "explanation": "(low+high) can overflow int; low + (high-low)/2 cannot."
    },
    {
      "id": 147,
      "code": "SE-06",
      "section": 11,
      "type": "Scenario",
      "difficulty": "medium",
      "question": "An unsorted array must be searched only once. Best choice?",
      "options": [
        "Sort then binary search (O(n log n))",
        "Linear search (O(n))",
        "Build a hash table then search",
        "Binary search directly"
      ],
      "answer": 1,
      "explanation": "Sorting costs more than a single linear scan."
    },
    {
      "id": 148,
      "code": "SE-07",
      "section": 11,
      "type": "Scenario",
      "difficulty": "medium",
      "question": "Why is binary search not efficient on a singly linked list?",
      "options": [
        "It is efficient, O(log n)",
        "No O(1) random access: reaching the middle node takes O(n)",
        "Nodes are unsorted",
        "Java forbids it"
      ],
      "answer": 1,
      "explanation": "Each mid computation needs traversal, giving O(n) overall."
    },
    {
      "id": 149,
      "code": "SE-08",
      "section": 11,
      "type": "Concept",
      "difficulty": "medium",
      "question": "Which statement about search/insert time is correct?",
      "options": [
        "Sorted array: O(log n) search, O(n) insert",
        "Linked list: O(1) search",
        "Hash table: O(n) average search",
        "Balanced BST: O(n) always"
      ],
      "answer": 0,
      "explanation": "Binary search works on sorted arrays but insertion needs shifting."
    },
    {
      "id": 150,
      "code": "SE-09",
      "section": 11,
      "type": "Concept",
      "difficulty": "medium",
      "question": "Space used by iterative vs recursive binary search:",
      "options": [
        "Both O(1)",
        "Iterative O(1); recursive O(log n)",
        "Iterative O(n)",
        "Recursive O(1)"
      ],
      "answer": 1,
      "explanation": "Recursive version uses log n stack frames."
    },
    {
      "id": 151,
      "code": "SE-10",
      "section": 11,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Binary search for 18 in {3,8,14,20,25,31,40}. Probes and result?",
      "options": [
        "3 probes (20, 8, 14); not found",
        "4 probes; found",
        "7 probes; not found",
        "2 probes; not found"
      ],
      "answer": 0,
      "explanation": "mid=3 (20) > 18 -> high=2; mid=1 (8) < 18 -> low=2; mid=2 (14) < 18 -> low=3 > high=2, stop."
    },
    {
      "id": 152,
      "code": "SO-01",
      "section": 12,
      "type": "Output",
      "difficulty": "medium",
      "question": "Array [5,1,9,3,7,2]. After the first pass of bubble sort (ascending):",
      "options": [
        "[1,5,3,7,2,9]",
        "[1,5,9,3,7,2]",
        "[5,1,3,7,2,9]",
        "[1,2,3,5,7,9]"
      ],
      "answer": 0,
      "explanation": "The largest element 9 bubbles to the end through successive swaps."
    },
    {
      "id": 153,
      "code": "SO-02",
      "section": 12,
      "type": "Output",
      "difficulty": "medium",
      "question": "Array [5,1,9,3,7,2]. After the first pass of selection sort:",
      "options": [
        "[1,5,3,7,2,9]",
        "[1,5,9,3,7,2]",
        "[1,2,9,3,7,5]",
        "[5,1,9,3,7,2]"
      ],
      "answer": 1,
      "explanation": "Smallest element 1 is swapped with the element at position 0."
    },
    {
      "id": 154,
      "code": "SO-03",
      "section": 12,
      "type": "Output",
      "difficulty": "medium",
      "question": "Array [5,1,9,3,7,2]. Insertion sort after the first three insertions (sorted part has 4 elements):",
      "options": [
        "[1,5,9,3,7,2]",
        "[1,3,5,9,7,2]",
        "[1,3,5,7,9,2]",
        "[1,2,3,5,7,9]"
      ],
      "answer": 1,
      "explanation": "1, 9 and 3 are inserted into the sorted prefix, giving [1,3,5,9] followed by 7, 2."
    },
    {
      "id": 155,
      "code": "SO-04",
      "section": 12,
      "type": "Concept",
      "difficulty": "medium",
      "question": "Which statement is correct?",
      "options": [
        "Optimised bubble sort (early exit when no swap) is O(n) best case and O(n^2) worst case",
        "Selection sort best case is O(n)",
        "Insertion sort best case is O(n^2)",
        "Unoptimised bubble sort best case is O(n)"
      ],
      "answer": 0,
      "explanation": "The swap-count check stops after one pass on sorted data. Selection sort always does n(n-1)/2 comparisons."
    },
    {
      "id": 156,
      "code": "SO-05",
      "section": 12,
      "type": "Scenario",
      "difficulty": "medium",
      "question": "Small, nearly sorted data set. Best simple algorithm?",
      "options": [
        "Heap sort",
        "Selection sort",
        "Insertion sort (close to O(n))",
        "Unoptimised bubble sort"
      ],
      "answer": 2,
      "explanation": "Insertion sort does very few shifts when data is almost sorted."
    },
    {
      "id": 157,
      "code": "SO-06",
      "section": 12,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Writes/swaps are very expensive (e.g. flash memory). Which of these minimises swaps?",
      "options": [
        "Selection sort (at most n-1 swaps)",
        "Bubble sort",
        "Insertion sort",
        "Quick sort"
      ],
      "answer": 0,
      "explanation": "Selection sort performs one swap per pass."
    },
    {
      "id": 158,
      "code": "SO-07",
      "section": 12,
      "type": "Concept",
      "difficulty": "medium",
      "question": "Which of these is NOT a stable sort (in its usual array form)?",
      "options": [
        "Merge sort",
        "Insertion sort",
        "Bubble sort",
        "Heap sort"
      ],
      "answer": 3,
      "explanation": "Heap sort (like selection sort and quick sort) can reorder equal keys."
    },
    {
      "id": 159,
      "code": "SO-08",
      "section": 12,
      "type": "Concept",
      "difficulty": "medium",
      "question": "Number of comparisons performed by selection sort on 6 elements?",
      "options": [
        "10",
        "15",
        "21",
        "30"
      ],
      "answer": 1,
      "explanation": "n(n-1)/2 = 15 regardless of the input order."
    },
    {
      "id": 160,
      "code": "SO-09",
      "section": 12,
      "type": "Output",
      "difficulty": "medium",
      "question": "Unoptimised bubble sort (n decreases by 1 each pass) on 5 elements makes how many comparisons?",
      "options": [
        "4",
        "10",
        "15",
        "20"
      ],
      "answer": 1,
      "explanation": "4+3+2+1 = 10."
    },
    {
      "id": 161,
      "code": "SO-10",
      "section": 12,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Partition [5,1,9,4,3,2,8,7] with the first element as pivot (left/right pointer method). Result and pivot index?",
      "options": [
        "[3,1,2,4,5,9,8,7], pivot at index 4",
        "[1,3,2,4,5,9,8,7], pivot at index 4",
        "[3,1,2,4,5,9,8,7], pivot at index 0",
        "[5,1,2,4,3,9,8,7], pivot at index 5"
      ],
      "answer": 0,
      "explanation": "9 and 2 are swapped, pointers cross, then pivot 5 swaps with the element at 'right' (3): [3,1,2,4] 5 [9,8,7]."
    },
    {
      "id": 162,
      "code": "SO-11",
      "section": 12,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Quick sort with first-element pivot degrades to O(n^2) when:",
      "options": [
        "The input is random",
        "The array is already sorted (or reverse sorted), giving partitions of size n-1 and 0",
        "All partitions are equal",
        "n is small"
      ],
      "answer": 1,
      "explanation": "Recurrence T(n)=T(n-1)+n. Randomised pivot selection (a stochastic algorithm) makes the bad case unlikely."
    },
    {
      "id": 163,
      "code": "SO-12",
      "section": 12,
      "type": "Concept",
      "difficulty": "medium",
      "question": "Merge sort time and extra space for an array:",
      "options": [
        "O(n^2), O(1)",
        "O(n log n), O(1)",
        "O(n), O(n)",
        "O(n log n) in all cases, O(n) extra space"
      ],
      "answer": 3,
      "explanation": "log n levels, each merging n elements; merging needs an auxiliary array."
    },
    {
      "id": 164,
      "code": "SO-13",
      "section": 12,
      "type": "Trap",
      "difficulty": "hard",
      "question": "ConvertToMaxHeap on [4,10,3,5,1] gives:",
      "options": [
        "[10,4,3,5,1]",
        "[10,5,3,4,1]",
        "[10,5,4,3,1]",
        "[5,10,3,4,1]"
      ],
      "answer": 1,
      "explanation": "Start at last parent index n/2-1 = 1 (10 is fine), then index 0: swap 4 with 10, then sift 4 down with 5."
    },
    {
      "id": 165,
      "code": "SO-14",
      "section": 12,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Max-heap [10,5,3,4,1]. After the first heap-sort step (swap root with last, shrink heap, restore heap) the array is:",
      "options": [
        "[5,4,3,1,10]",
        "[5,4,1,3,10]",
        "[4,5,3,1,10]",
        "[1,5,3,4,10]"
      ],
      "answer": 0,
      "explanation": "Swap -> [1,5,3,4,10]; sift 1 down: swap with 5, then with 4 -> [5,4,3,1,10]."
    },
    {
      "id": 166,
      "code": "SO-15",
      "section": 12,
      "type": "Concept",
      "difficulty": "medium",
      "question": "Sorting data larger than RAM uses:",
      "options": [
        "Bubble sort",
        "Selection sort",
        "External merge sort (m-way merge)",
        "Insertion sort"
      ],
      "answer": 2,
      "explanation": "External sorting sorts chunks in memory and merges them from secondary storage."
    },
    {
      "id": 167,
      "code": "SO-16",
      "section": 12,
      "type": "Scenario",
      "difficulty": "medium",
      "question": "Best O(n log n) choice for sorting a linked list:",
      "options": [
        "Heap sort (needs index access)",
        "Quick sort with array indexing",
        "Binary insertion sort",
        "Merge sort (sequential access, no random access needed)"
      ],
      "answer": 3,
      "explanation": "Merge sort only needs to traverse and relink nodes."
    },
    {
      "id": 168,
      "code": "SO-17",
      "section": 12,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Heap sort complexity:",
      "options": [
        "O(n log n) time, O(1) extra space (in place) with iterative heapify",
        "O(n) time",
        "O(n^2) worst",
        "O(n log n) time, O(n) space"
      ],
      "answer": 0,
      "explanation": "Building the heap is O(n); n-1 extractions each cost O(log n)."
    },
    {
      "id": 169,
      "code": "SO-18",
      "section": 12,
      "type": "Trap",
      "difficulty": "hard",
      "question": "MergeSort(arr, 0, 4) on 5 elements. Which merge call happens FIRST?",
      "options": [
        "Merge(arr, 0, 1, 2, 2)",
        "Merge(arr, 3, 3, 4, 4)",
        "Merge(arr, 0, 2, 3, 4)",
        "Merge(arr, 0, 0, 1, 1)"
      ],
      "answer": 3,
      "explanation": "Recursion goes left first: (0,4) -> (0,2) -> (0,1) -> bases (0,0) and (1,1), then merging 0 and 1 happens first."
    },
    {
      "id": 170,
      "code": "SO-19",
      "section": 12,
      "type": "Concept",
      "difficulty": "medium",
      "question": "How many Merge() calls does merge sort make for n = 5 elements?",
      "options": [
        "3",
        "4",
        "2",
        "5"
      ],
      "answer": 2,
      "explanation": "Each merge reduces the number of sorted pieces by one: n - 1 = 4."
    },
    {
      "id": 171,
      "code": "SO-20",
      "section": 12,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Merge the sorted arrays [1,4,9] and [2,3,10]. How many element comparisons are made before the remaining elements are copied?",
      "options": [
        "4",
        "6",
        "3",
        "5"
      ],
      "answer": 3,
      "explanation": "Comparisons: 1v2, 4v2, 4v3, 4v10, 9v10 = 5; then 10 is copied."
    },
    {
      "id": 172,
      "code": "SO-21",
      "section": 12,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Partition [4,2,7,1,9,3] with the first element as pivot (notes' left/right method). Resulting array and pivot index?",
      "options": [
        "[1,2,3,4,7,9], pivot index 3",
        "[4,2,3,1,9,7], pivot index 0",
        "[1,2,3,4,9,7], pivot index 3",
        "[2,1,3,4,9,7], pivot index 3"
      ],
      "answer": 2,
      "explanation": "7 and 3 are swapped -> [4,2,3,1,9,7]; pointers cross with right at index 3 (value 1); pivot swaps with it: [1,2,3,4,9,7]."
    },
    {
      "id": 173,
      "code": "SO-22",
      "section": 12,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Which array is NOT a valid max-heap (0-indexed, children of i are 2i+1 and 2i+2)?",
      "options": [
        "[50,30,40,45,20,35,15]",
        "[50,30,40,10,20,35,15]",
        "[9,5,8,1,2,3,4]",
        "[60,40,50,20,30,10,45]"
      ],
      "answer": 0,
      "explanation": "In the first array 45 (index 3) is a child of 30 (index 1) but larger than its parent."
    },
    {
      "id": 174,
      "code": "SO-23",
      "section": 12,
      "type": "Concept",
      "difficulty": "medium",
      "question": "To sort ascending in place using heap sort you build a:",
      "options": [
        "Min-heap and leave it",
        "BST",
        "Max-heap, repeatedly swapping the root with the last element",
        "Queue"
      ],
      "answer": 2,
      "explanation": "The largest element is moved to the end each round; a min-heap in place gives descending order."
    },
    {
      "id": 175,
      "code": "SO-24",
      "section": 12,
      "type": "Concept",
      "difficulty": "medium",
      "question": "Internal vs external sorting:",
      "options": [
        "Internal is stable, external is unstable",
        "Internal sorts ascending, external sorts descending",
        "No difference",
        "Internal: data fits in RAM; external: data resides on secondary storage (e.g. external merge sort)"
      ],
      "answer": 3,
      "explanation": "External sorting reads chunks, sorts them and merges (m-way merge)."
    },
    {
      "id": 176,
      "code": "SO-25",
      "section": 12,
      "type": "Output",
      "difficulty": "medium",
      "question": "Optimised bubble sort (break when no swaps) on the sorted array [1,2,3,5,7,9]. Comparisons made?",
      "options": [
        "5",
        "10",
        "6",
        "15"
      ],
      "answer": 0,
      "explanation": "One pass of n-1 = 5 comparisons finds no swap, so it stops."
    },
    {
      "id": 177,
      "code": "SO-26",
      "section": 12,
      "type": "Output",
      "difficulty": "medium",
      "question": "Insertion sort from the notes (inner loop breaks when arr[i] > insertElement is false) on the sorted array of 6 elements. Comparisons?",
      "options": [
        "15",
        "6",
        "0",
        "5"
      ],
      "answer": 3,
      "explanation": "Each of the 5 insertions needs exactly one comparison before breaking: n-1."
    },
    {
      "id": 178,
      "code": "SO-27",
      "section": 12,
      "type": "Output",
      "difficulty": "medium",
      "question": "The notes' selection sort swaps only if elementPos != smallestElementPos. Number of swaps on an already sorted array?",
      "options": [
        "1",
        "n-1",
        "0",
        "n(n-1)/2"
      ],
      "answer": 2,
      "explanation": "Every element is already its own minimum, so no swap happens; comparisons are still n(n-1)/2."
    },
    {
      "id": 179,
      "code": "SO-28",
      "section": 12,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Quick sort recurrences are:",
      "options": [
        "Best/average T(n) = 2T(n/2) + n; worst T(n) = T(n-1) + n",
        "T(n) = T(n/2) + 1",
        "Both T(n) = 2T(n/2) + 1",
        "Best T(n) = T(n-1) + n; worst 2T(n/2) + n"
      ],
      "answer": 0,
      "explanation": "Balanced partitions give O(n log n); one-sided partitions give O(n^2)."
    },
    {
      "id": 180,
      "code": "HS-01",
      "section": 13,
      "type": "Concept",
      "difficulty": "easy",
      "question": "Under ideal conditions, hash table insert/search cost is:",
      "options": [
        "O(n)",
        "O(1)",
        "O(log n)",
        "O(n log n)"
      ],
      "answer": 1,
      "explanation": "The hash function maps a key directly to its bucket."
    },
    {
      "id": 181,
      "code": "HS-02",
      "section": 13,
      "type": "Output",
      "difficulty": "medium",
      "question": "Table size 7, h(k)=k%7, linear probing. Insert 15, 22, 8, 29. At which index does 29 go?",
      "options": [
        "1",
        "3",
        "4",
        "5"
      ],
      "answer": 2,
      "explanation": "All four hash to 1: 15->1, 22->2, 8->3, 29->4."
    },
    {
      "id": 182,
      "code": "HS-03",
      "section": 13,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Table size 11, quadratic probing index (h + i^2) % 11. Insert 22, 33, 44, 15. Where is 15 stored?",
      "options": [
        "4",
        "5",
        "6",
        "7"
      ],
      "answer": 1,
      "explanation": "22->0; 33->1; 44: i=1 ->1 busy, i=2 ->4; 15 hashes to 4 (busy), i=1 -> 5."
    },
    {
      "id": 183,
      "code": "HS-04",
      "section": 13,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Table size 11, double hashing: index = (k%11 + i x (7 - k%7)) % 11. Insert 22, 33, 44. Index of 44?",
      "options": [
        "2",
        "4",
        "5",
        "7"
      ],
      "answer": 2,
      "explanation": "22->0. 33: busy at 0, step 7-5=2 -> 2. 44: busy at 0, step 7-2=5 -> 5."
    },
    {
      "id": 184,
      "code": "HS-05",
      "section": 13,
      "type": "Concept",
      "difficulty": "medium",
      "question": "Clustering in open addressing:",
      "options": [
        "Linear probing causes primary clustering; quadratic probing causes secondary clustering",
        "Linear probing causes secondary clustering; quadratic causes primary",
        "Double hashing causes primary clustering",
        "Chaining causes primary clustering"
      ],
      "answer": 0,
      "explanation": "Linear probing builds contiguous blocks; quadratic keys with the same start follow the same probe sequence."
    },
    {
      "id": 185,
      "code": "HS-06",
      "section": 13,
      "type": "Trap",
      "difficulty": "hard",
      "question": "In an open-addressing table a key is deleted by simply setting its bucket to null. What goes wrong?",
      "options": [
        "Nothing",
        "Hash function changes",
        "Searches for keys placed later in the same probe chain stop at the emptied slot and fail; mark a deleted flag instead",
        "Table shrinks"
      ],
      "answer": 2,
      "explanation": "Search stops at the first null, so a tombstone/isDeleted marker is required."
    },
    {
      "id": 186,
      "code": "HS-07",
      "section": 13,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Table size 5, loadFactor 0.7, insert() first does: if (keysCount >= size * loadFactor) resize. At which insertion does the first resize occur?",
      "options": [
        "4th",
        "5th",
        "3rd",
        "6th"
      ],
      "answer": 1,
      "explanation": "Threshold = 3.5. Before the 4th insert keysCount=3 (no); before the 5th keysCount=4 (>= 3.5), so resize."
    },
    {
      "id": 187,
      "code": "HS-08",
      "section": 13,
      "type": "Concept",
      "difficulty": "medium",
      "question": "After resizing a hash table all keys must be re-inserted (rehashed) because:",
      "options": [
        "Java requires it",
        "To sort keys",
        "To remove duplicates",
        "The bucket index depends on table size (key % size)"
      ],
      "answer": 3,
      "explanation": "Changing size changes the modulo result of every key."
    },
    {
      "id": 188,
      "code": "HS-09",
      "section": 13,
      "type": "Concept",
      "difficulty": "medium",
      "question": "Why is the hash of a string computed as 97*10^2 + 98*10 + 99 for 'abc' rather than 97+98+99?",
      "options": [
        "It is faster",
        "Plain sum gives the same value for anagrams like 'abc' and 'acb'; place values make position matter",
        "It uses less memory",
        "Java demands it"
      ],
      "answer": 1,
      "explanation": "Position-weighted (polynomial) hashing reduces collisions."
    },
    {
      "id": 189,
      "code": "HS-10",
      "section": 13,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Chaining with each bucket implemented as a BST holding k keys. Search time inside the bucket?",
      "options": [
        "O(1)",
        "O(log k) (versus O(k) for a linked-list bucket)",
        "O(n)",
        "O(n log n)"
      ],
      "answer": 1,
      "explanation": "A BST bucket is searched logarithmically in the number of keys it holds."
    },
    {
      "id": 190,
      "code": "HS-11",
      "section": 13,
      "type": "Scenario",
      "difficulty": "medium",
      "question": "Fibonacci computed recursively is slow. Storing computed values in a hash table (memoization) changes the time from:",
      "options": [
        "O(2^n) to O(n)",
        "O(n) to O(1)",
        "O(n^2) to O(n)",
        "No change"
      ],
      "answer": 0,
      "explanation": "Each distinct f(i) is computed once and then looked up in O(1)."
    },
    {
      "id": 191,
      "code": "HS-12",
      "section": 13,
      "type": "Concept",
      "difficulty": "medium",
      "question": "Java contract between equals() and hashCode():",
      "options": [
        "Equal objects may have any hash codes",
        "Unequal objects must have different hash codes",
        "Equal objects must have equal hash codes",
        "hashCode must be random"
      ],
      "answer": 2,
      "explanation": "Otherwise equal keys could land in different buckets and not be found."
    },
    {
      "id": 192,
      "code": "HS-13",
      "section": 13,
      "type": "Trap",
      "difficulty": "hard",
      "question": "A good second hash function for double hashing (table size N) must:",
      "options": [
        "Equal h1(k)",
        "Never return 0 and be co-prime with N (e.g. R - (k mod R) with prime R < N)",
        "Return 0 sometimes",
        "Depend on table size only"
      ],
      "answer": 1,
      "explanation": "A zero step would never move; co-primality lets the probe sequence visit every bucket."
    },
    {
      "id": 193,
      "code": "HS-14",
      "section": 13,
      "type": "Concept",
      "difficulty": "medium",
      "question": "Worst-case search time when all keys collide into one linked-list bucket:",
      "options": [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n^2)"
      ],
      "answer": 2,
      "explanation": "The table degenerates to a linked list."
    },
    {
      "id": 194,
      "code": "HS-15",
      "section": 13,
      "type": "Output",
      "difficulty": "medium",
      "question": "Folding hash: key 123456 is split into 12, 34, 56, added and then taken mod 10. Bucket?",
      "options": [
        "6",
        "12",
        "0",
        "2"
      ],
      "answer": 3,
      "explanation": "12+34+56 = 102; 102 mod 10 = 2."
    },
    {
      "id": 195,
      "code": "HS-16",
      "section": 13,
      "type": "Output",
      "difficulty": "medium",
      "question": "Mid-square hash for key 12 (take the middle digit of the square):",
      "options": [
        "Bucket 1",
        "Bucket 2",
        "Bucket 4",
        "Bucket 144"
      ],
      "answer": 2,
      "explanation": "12^2 = 144; the middle digit is 4."
    },
    {
      "id": 196,
      "code": "HS-17",
      "section": 13,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Size 10, h = k % 10, linear probing. Insert 23, 53, 33 (they sit at indices 3, 4, 5). 53 is then deleted and marked as deleted (tombstone). search(33) inspects how many buckets and returns what?",
      "options": [
        "3 buckets (3, 4, 5); true",
        "3 buckets; false",
        "1 bucket; false",
        "2 buckets; false (stops at deleted slot)"
      ],
      "answer": 0,
      "explanation": "A deleted flag means 'keep probing'. Bucket 3 (23) no, bucket 4 (deleted) continue, bucket 5 (33) found."
    },
    {
      "id": 197,
      "code": "HS-18",
      "section": 13,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Table size 5 holds key 6 at index 1 and key 8 at index 3. After resizing to 10 and rehashing, the indices are:",
      "options": [
        "6 and 8",
        "0 and 8",
        "6 and 3",
        "1 and 3"
      ],
      "answer": 0,
      "explanation": "New index = key % 10: 6 -> 6 and 8 -> 8. This is why rehashing is needed."
    },
    {
      "id": 198,
      "code": "HS-19",
      "section": 13,
      "type": "Concept",
      "difficulty": "easy",
      "question": "Static vs dynamic hash table:",
      "options": [
        "Static: grows; dynamic: fixed",
        "No difference",
        "Static: key set fixed in advance (e.g. keyword table of a compiler); dynamic: grows/shrinks (e.g. Java HashMap)",
        "Static must use chaining"
      ],
      "answer": 2,
      "explanation": "Symbol tables of keywords are static; library classes resize dynamically."
    },
    {
      "id": 199,
      "code": "HS-20",
      "section": 13,
      "type": "Concept",
      "difficulty": "medium",
      "question": "Load factor of a table with 10 buckets holding 7 keys:",
      "options": [
        "0.07",
        "17",
        "1.43",
        "0.7"
      ],
      "answer": 3,
      "explanation": "Load factor = number of keys / number of buckets."
    },
    {
      "id": 200,
      "code": "GR-01",
      "section": 14,
      "type": "Concept",
      "difficulty": "medium",
      "question": "Maximum edges in a simple undirected graph with 6 vertices?",
      "options": [
        "12",
        "15",
        "30",
        "36"
      ],
      "answer": 1,
      "explanation": "n(n-1)/2 = 15."
    },
    {
      "id": 201,
      "code": "GR-02",
      "section": 14,
      "type": "Concept",
      "difficulty": "medium",
      "question": "Space needed by adjacency matrix vs adjacency list:",
      "options": [
        "Matrix O(V^2); list O(V+E) so list is better for sparse graphs",
        "Matrix O(E); list O(V^2)",
        "Both O(V)",
        "Both O(V^2)"
      ],
      "answer": 0,
      "explanation": "Matrix wastes space when |E| is much less than |V|^2."
    },
    {
      "id": 202,
      "code": "GR-03",
      "section": 14,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Undirected graph edges: 0-1, 0-2, 1-3, 2-3, 3-4. Neighbours are visited in ascending order. DFS from 0 gives:",
      "options": [
        "0 1 3 2 4",
        "0 1 2 3 4",
        "0 2 3 1 4",
        "0 1 3 4 2"
      ],
      "answer": 0,
      "explanation": "0->1->3 (smallest unvisited neighbour of 3 is 2)->2, back to 3 ->4."
    },
    {
      "id": 203,
      "code": "GR-04",
      "section": 14,
      "type": "Output",
      "difficulty": "medium",
      "question": "Same graph, BFS from 0 gives:",
      "options": [
        "0 1 3 2 4",
        "0 1 2 3 4",
        "0 2 1 3 4",
        "0 3 1 2 4"
      ],
      "answer": 1,
      "explanation": "Level 0: 0; level 1: 1, 2; level 2: 3; level 3: 4."
    },
    {
      "id": 204,
      "code": "GR-05",
      "section": 14,
      "type": "Trap",
      "difficulty": "hard",
      "question": "In the notes' BFS, neighbours are added to the queue without marking them visited, and the loop has 'if (isVisited[vi]) continue;'. Why?",
      "options": [
        "A vertex can be enqueued more than once before it is processed",
        "The queue is circular",
        "The graph is directed",
        "It improves speed"
      ],
      "answer": 0,
      "explanation": "Marking happens on dequeue, so duplicates can exist and must be skipped."
    },
    {
      "id": 205,
      "code": "GR-06",
      "section": 14,
      "type": "Concept",
      "difficulty": "medium",
      "question": "BFS/DFS time complexity:",
      "options": [
        "O(V^2) with list, O(V+E) with matrix",
        "O(V+E) with adjacency list; O(V^2) with adjacency matrix",
        "O(E) always",
        "O(V log V)"
      ],
      "answer": 1,
      "explanation": "With a matrix each vertex scans a whole row of V entries."
    },
    {
      "id": 206,
      "code": "GR-07",
      "section": 14,
      "type": "Scenario",
      "difficulty": "medium",
      "question": "Shortest path (fewest edges) in an unweighted graph is found using:",
      "options": [
        "DFS",
        "Kruskal",
        "Heap sort",
        "BFS"
      ],
      "answer": 3,
      "explanation": "BFS explores vertices in increasing distance from the source."
    },
    {
      "id": 207,
      "code": "GR-08",
      "section": 14,
      "type": "Scenario",
      "difficulty": "easy",
      "question": "Modelling Facebook friendships and a road map with distances respectively:",
      "options": [
        "Directed; undirected",
        "Directed weighted; undirected unweighted",
        "Undirected; directed weighted",
        "Both unweighted"
      ],
      "answer": 2,
      "explanation": "Friendship is mutual (undirected); roads have lengths and often one-way direction."
    },
    {
      "id": 208,
      "code": "GR-09",
      "section": 14,
      "type": "Concept",
      "difficulty": "medium",
      "question": "An undirected graph has 7 edges. Sum of all vertex degrees?",
      "options": [
        "7",
        "14",
        "21",
        "49"
      ],
      "answer": 1,
      "explanation": "Each edge contributes 2 to the total degree."
    },
    {
      "id": 209,
      "code": "GR-10",
      "section": 14,
      "type": "Scenario",
      "difficulty": "medium",
      "question": "How do you count connected components of an undirected graph?",
      "options": [
        "Count edges",
        "Compute V - E",
        "Run DFS/BFS from every unvisited vertex; the number of starts is the component count",
        "Sort vertices"
      ],
      "answer": 2,
      "explanation": "Each fresh traversal covers exactly one component."
    },
    {
      "id": 210,
      "code": "GR-11",
      "section": 14,
      "type": "Trap",
      "difficulty": "hard",
      "question": "A weighted adjacency matrix stores 0 for 'no edge' (as in the notes' code, adjMat[u][v] != 0). Limitation?",
      "options": [
        "Matrix too large",
        "Only directed graphs",
        "Edges are lost",
        "A genuine edge of weight 0 cannot be distinguished from no edge"
      ],
      "answer": 3,
      "explanation": "A sentinel like infinity (or a separate flag) is needed if zero weights are allowed."
    },
    {
      "id": 211,
      "code": "GR-12",
      "section": 14,
      "type": "Output",
      "difficulty": "medium",
      "question": "DFS helper on a graph with cycles omits 'isVisited[v] = true' before recursing. Result?",
      "options": [
        "Infinite recursion/StackOverflow",
        "Faster traversal",
        "Correct output",
        "BFS order"
      ],
      "answer": 0,
      "explanation": "Cycles are revisited endlessly without visited marking."
    },
    {
      "id": 212,
      "code": "GR-13",
      "section": 14,
      "type": "Concept",
      "difficulty": "medium",
      "question": "A connected undirected graph with V vertices and V-1 edges is:",
      "options": [
        "Complete",
        "A tree (acyclic)",
        "Has exactly one cycle",
        "Disconnected"
      ],
      "answer": 1,
      "explanation": "A connected graph with V-1 edges has no cycle."
    },
    {
      "id": 213,
      "code": "GR-14",
      "section": 14,
      "type": "Output",
      "difficulty": "medium",
      "question": "addEdge(u, v) for an UNDIRECTED graph must:",
      "options": [
        "Update only adjMat[u][v]",
        "Update only adjMat[v][u]",
        "Update adjMat[u][u]",
        "Update both adjMat[u][v] and adjMat[v][u] (or add v to u's list and u to v's list)"
      ],
      "answer": 3,
      "explanation": "The matrix of an undirected graph is symmetric."
    },
    {
      "id": 214,
      "code": "GR-15",
      "section": 14,
      "type": "Concept",
      "difficulty": "medium",
      "question": "In the adjacency matrix of a directed graph:",
      "options": [
        "Neither is related to degree",
        "Both give total degree",
        "Row sum = out-degree, column sum = in-degree",
        "Row sum = in-degree, column sum = out-degree"
      ],
      "answer": 2,
      "explanation": "Row u lists edges leaving u; column v lists edges entering v."
    },
    {
      "id": 215,
      "code": "GR-16",
      "section": 14,
      "type": "Scenario",
      "difficulty": "medium",
      "question": "Exercise from the notes: how do you check whether an undirected graph is connected?",
      "options": [
        "Run DFS/BFS from any vertex; the graph is connected iff every vertex gets visited",
        "Check that the edge count equals V-1",
        "Sort the adjacency lists",
        "Check that the matrix is symmetric"
      ],
      "answer": 0,
      "explanation": "If some vertex is unvisited, the graph has more than one component."
    },
    {
      "id": 216,
      "code": "SP-01",
      "section": 15,
      "type": "Concept",
      "difficulty": "easy",
      "question": "Dijkstra's algorithm is:",
      "options": [
        "Dynamic programming that supports negative cycles",
        "A greedy single-source algorithm that needs non-negative edge weights",
        "BFS only for unweighted graphs",
        "An all-pairs algorithm"
      ],
      "answer": 1,
      "explanation": "At each step it finalises the unvisited vertex with the smallest tentative distance."
    },
    {
      "id": 217,
      "code": "SP-02",
      "section": 15,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Directed graph: S->A 1, S->C 2, C->A 4, A->B 6, C->D 3, B->D 1, B->E 2, D->E 1. Shortest distance S to E?",
      "options": [
        "5",
        "6",
        "7",
        "9"
      ],
      "answer": 1,
      "explanation": "S->C->D->E = 2+3+1 = 6 (S->A->B->E = 9)."
    },
    {
      "id": 218,
      "code": "SP-03",
      "section": 15,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Same graph: shortest distance from S to B?",
      "options": [
        "5",
        "6",
        "7",
        "8"
      ],
      "answer": 2,
      "explanation": "S->A->B = 1+6 = 7 (via C->A it is 2+4+6 = 12)."
    },
    {
      "id": 219,
      "code": "SP-04",
      "section": 15,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Directed graph: a->c 6, a->b 8, c->e 9, c->d 15, b->d 10, d->e 14, d->f 4, e->f 13, e->g 17, f->g 7. Shortest distance a to g?",
      "options": [
        "32",
        "30",
        "27",
        "29"
      ],
      "answer": 3,
      "explanation": "a->b->d->f->g = 8+10+4+7 = 29; a->c->e->g = 32."
    },
    {
      "id": 220,
      "code": "SP-05",
      "section": 15,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Edges S->A 1, S->C 2, C->A -4. Why does Dijkstra fail?",
      "options": [
        "It loops forever",
        "A is finalised with distance 1 and the cheaper path via C (-2) is never reconsidered",
        "A becomes unreachable",
        "It still gives the right answer"
      ],
      "answer": 1,
      "explanation": "Dijkstra assumes a finalised vertex cannot be improved, which breaks with negative weights."
    },
    {
      "id": 221,
      "code": "SP-06",
      "section": 15,
      "type": "Concept",
      "difficulty": "medium",
      "question": "Dijkstra running time:",
      "options": [
        "O(V^3)",
        "O(E)",
        "O(V^2) with array scan for the minimum; O((V+E) log V) with a binary heap",
        "O(V log E) always"
      ],
      "answer": 2,
      "explanation": "The code in the notes scans the vertex list for the minimum each time: O(V^2)."
    },
    {
      "id": 222,
      "code": "SP-07",
      "section": 15,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Bellman-Ford on S->A 1, S->C 2, A->B 6, B->D 1, B->E -2, C->A -4, C->D 3, D->E 1. Shortest distance S to E?",
      "options": [
        "5",
        "4",
        "6",
        "2"
      ],
      "answer": 3,
      "explanation": "Path S->C->A->B->E = 2-4+6-2 = 2 (via D it would be 5)."
    },
    {
      "id": 223,
      "code": "SP-08",
      "section": 15,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Bellman-Ford with V vertices and E edges:",
      "options": [
        "V passes, O(V^2)",
        "V-1 relaxation passes over all edges, O(VE); if a V-th pass still improves a distance a negative cycle exists",
        "E-1 passes",
        "log V passes"
      ],
      "answer": 1,
      "explanation": "Shortest simple paths have at most V-1 edges."
    },
    {
      "id": 224,
      "code": "SP-09",
      "section": 15,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Edges C->D 2, D->E -5, E->C 1 form a cycle. Cycle weight and consequence?",
      "options": [
        "8, none",
        "-4, none",
        "-2: negative-weight cycle, shortest paths through it are undefined",
        "0, ties"
      ],
      "answer": 2,
      "explanation": "2-5+1 = -2; each loop reduces distance further."
    },
    {
      "id": 225,
      "code": "SP-10",
      "section": 15,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Graph: 0->2 (-2), 1->0 (4), 1->2 (3), 2->3 (2), 3->1 (-1). Floyd-Warshall shortest distance from 0 to 1?",
      "options": [
        "1",
        "-1",
        "infinity",
        "3"
      ],
      "answer": 1,
      "explanation": "0->2->3->1 = -2+2-1 = -1."
    },
    {
      "id": 226,
      "code": "SP-11",
      "section": 15,
      "type": "Concept",
      "difficulty": "medium",
      "question": "Floyd-Warshall loop structure and complexity:",
      "options": [
        "u outermost; O(V^2)",
        "v outermost; O(V^3)",
        "Order is irrelevant",
        "Intermediate vertex k outermost; O(V^3) time, O(V^2) space"
      ],
      "answer": 3,
      "explanation": "d[u][v] = min(d[u][v], d[u][k] + d[k][v]) must consider vertices k one at a time."
    },
    {
      "id": 227,
      "code": "SP-12",
      "section": 15,
      "type": "Scenario",
      "difficulty": "medium",
      "question": "Choose the algorithm: (i) currency arbitrage detection, (ii) GPS route with non-negative lengths from one source.",
      "options": [
        "(i) Dijkstra, (ii) BFS",
        "(i) BFS, (ii) Bellman-Ford",
        "(i) Bellman-Ford (negative cycle), (ii) Dijkstra",
        "(i) Kruskal, (ii) Prim"
      ],
      "answer": 2,
      "explanation": "Arbitrage corresponds to a negative cycle after log transformation."
    },
    {
      "id": 228,
      "code": "SP-13",
      "section": 15,
      "type": "Trap",
      "difficulty": "hard",
      "question": "In Java Dijkstra code, currentDistance[] is initialised to Integer.MAX_VALUE and we compute currentDistance[u] + adjMat[u][v]. Hidden risk?",
      "options": [
        "Integer overflow to a negative value for unreachable u, causing wrong relaxation",
        "None",
        "Array bounds",
        "Predecessor becomes 0"
      ],
      "answer": 0,
      "explanation": "MAX_VALUE + positive weight wraps around, so check u is reachable or use a safe INF value."
    },
    {
      "id": 229,
      "code": "SP-14",
      "section": 15,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Graph: S->A 1, S->C 2, C->A 4, A->B 6, C->D 3, B->D 1, B->E 2, D->E 1. In what order does Dijkstra (source S) remove vertices from the vertex list?",
      "options": [
        "S, A, C, D, E, B",
        "S, A, B, C, D, E",
        "S, C, D, E, A, B",
        "S, C, A, B, D, E"
      ],
      "answer": 0,
      "explanation": "Distances: S 0, A 1, C 2, D 5, E 6, B 7; the smallest remaining distance is taken each time."
    },
    {
      "id": 230,
      "code": "SP-15",
      "section": 15,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Label-setting vs label-correcting shortest-path algorithms:",
      "options": [
        "Bellman-Ford is label-setting",
        "All three are label-setting",
        "Dijkstra is label-correcting",
        "Dijkstra is label-setting (a vertex's distance is final once chosen); Bellman-Ford and Floyd-Warshall are label-correcting"
      ],
      "answer": 3,
      "explanation": "Label-correcting methods may update a distance several times, which is why they can handle negative edges."
    },
    {
      "id": 231,
      "code": "SP-16",
      "section": 15,
      "type": "Trap",
      "difficulty": "hard",
      "question": "In the notes' Java Dijkstra, predecessor[] is initialised to -1. If destVertex is unreachable, the path-printing loop 'while (currentVertex != startVertex) { print(predecessor[currentVertex]); currentVertex = predecessor[currentVertex]; }' will:",
      "options": [
        "Print the path normally",
        "Print infinity and stop",
        "Move currentVertex to -1 and throw ArrayIndexOutOfBoundsException",
        "Loop forever without exception"
      ],
      "answer": 2,
      "explanation": "predecessor[dest] is -1, so the next iteration indexes predecessor[-1]. Check currentDistance[dest] != MAX_VALUE first."
    },
    {
      "id": 232,
      "code": "SP-17",
      "section": 15,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Floyd-Warshall updates when d[u][v] > d[u][k] + d[k][v]. How is the path matrix updated?",
      "options": [
        "path[k][u] = v",
        "path[u][v] = k",
        "path[u][v] = path[k][v]",
        "path[u][v] = u"
      ],
      "answer": 2,
      "explanation": "The predecessor of v on the new path u->k->v is the predecessor of v on the k->v path."
    },
    {
      "id": 233,
      "code": "SP-18",
      "section": 15,
      "type": "Concept",
      "difficulty": "medium",
      "question": "Kruskal/Prim vs Dijkstra (all greedy):",
      "options": [
        "Prim uses distances from the source",
        "Dijkstra picks edges by weight only",
        "They are identical",
        "Dijkstra picks the vertex with the smallest distance from the source; Prim/Kruskal pick the minimum-weight edge"
      ],
      "answer": 3,
      "explanation": "The greedy choice differs: edge weight vs cumulative path distance."
    },
    {
      "id": 234,
      "code": "SP-19",
      "section": 15,
      "type": "Trap",
      "difficulty": "hard",
      "question": "How does Bellman-Ford detect a negative-weight cycle?",
      "options": [
        "Run one more (V-th) pass; if any distance still decreases, a negative cycle exists",
        "Check that the matrix is symmetric",
        "Count the edges",
        "Run Dijkstra first"
      ],
      "answer": 0,
      "explanation": "Without negative cycles distances settle after V-1 passes."
    },
    {
      "id": 235,
      "code": "MS-01",
      "section": 16,
      "type": "Concept",
      "difficulty": "easy",
      "question": "A spanning tree of a connected graph with 10 vertices has how many edges?",
      "options": [
        "8",
        "9",
        "10",
        "45"
      ],
      "answer": 1,
      "explanation": "|V| - 1 = 9."
    },
    {
      "id": 236,
      "code": "MS-02",
      "section": 16,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Graph (undirected): ab4, ah8, bc8, bh11, cd7, ci2, cf4, de9, df14, ef10, fg2, gh1, gi6, hi7. Weight of the MST?",
      "options": [
        "35",
        "39",
        "37",
        "41"
      ],
      "answer": 2,
      "explanation": "Edges used: gh1, ci2, fg2, ab4, cf4, cd7, ah8, de9 = 37."
    },
    {
      "id": 237,
      "code": "MS-03",
      "section": 16,
      "type": "Trap",
      "difficulty": "hard",
      "question": "In Kruskal on the same graph (edges sorted ascending), which is the FIRST edge rejected because it forms a cycle?",
      "options": [
        "c-f (4)",
        "g-i (6)",
        "a-b (4)",
        "f-g (2)"
      ],
      "answer": 1,
      "explanation": "gh1, ci2, fg2, ab4, cf4 are accepted; g and i are already connected via g-f-c-i."
    },
    {
      "id": 238,
      "code": "MS-04",
      "section": 16,
      "type": "Concept",
      "difficulty": "medium",
      "question": "Kruskal's algorithm complexity:",
      "options": [
        "O(E log E), which is O(E log V)",
        "O(V^3)",
        "O(E)",
        "O(V)"
      ],
      "answer": 0,
      "explanation": "Sorting the edges dominates; cycle checks use union-find."
    },
    {
      "id": 239,
      "code": "MS-05",
      "section": 16,
      "type": "Concept",
      "difficulty": "medium",
      "question": "Which algorithm suits which graph?",
      "options": [
        "Prim for sparse, Kruskal for dense",
        "Both only for dense",
        "Neither works on sparse graphs",
        "Kruskal for sparse, Prim for dense"
      ],
      "answer": 3,
      "explanation": "Kruskal depends on E (sorting edges); Prim with a matrix is O(V^2), ideal when E is near V^2."
    },
    {
      "id": 240,
      "code": "MS-06",
      "section": 16,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Quick-find with ids[] = 0..9. union(p,q) changes every entry equal to ids[p] to ids[q]. After union(3,4) then union(4,9), ids[] is:",
      "options": [
        "[0,1,2,9,9,5,6,7,8,9]",
        "[0,1,2,4,4,5,6,7,8,9]",
        "[0,1,2,3,9,5,6,7,8,9]",
        "[0,1,2,9,4,5,6,7,8,9]"
      ],
      "answer": 0,
      "explanation": "union(3,4): ids[3]=4. union(4,9): all entries equal to 4 (indices 3 and 4) become 9."
    },
    {
      "id": 241,
      "code": "MS-07",
      "section": 16,
      "type": "Concept",
      "difficulty": "medium",
      "question": "Quick-find complexities:",
      "options": [
        "find O(n), union O(1)",
        "both O(1)",
        "find O(1), union O(n)",
        "both O(log n)"
      ],
      "answer": 2,
      "explanation": "find compares two array entries; union scans the whole array."
    },
    {
      "id": 242,
      "code": "MS-08",
      "section": 16,
      "type": "Concept",
      "difficulty": "medium",
      "question": "Brute force vs greedy for MST:",
      "options": [
        "Greedy fails for MST",
        "Brute force is faster",
        "MST is NP-hard",
        "Enumerating all spanning trees is exponential; the greedy edge choices of Kruskal/Prim are provably optimal"
      ],
      "answer": 3,
      "explanation": "The cut/cycle properties guarantee the locally minimal edge is safe."
    },
    {
      "id": 243,
      "code": "MS-09",
      "section": 16,
      "type": "Trap",
      "difficulty": "hard",
      "question": "When a new edge (u,v) is added to a spanning tree:",
      "options": [
        "It breaks connectivity",
        "It creates exactly one cycle; removing the heaviest edge on that cycle gives the best spanning tree",
        "It creates two cycles",
        "Nothing happens"
      ],
      "answer": 1,
      "explanation": "A tree plus one edge has exactly one cycle."
    },
    {
      "id": 244,
      "code": "MS-10",
      "section": 16,
      "type": "Concept",
      "difficulty": "medium",
      "question": "Kruskal's algorithm on a disconnected graph produces:",
      "options": [
        "An error",
        "An infinite loop",
        "A minimum spanning forest",
        "A single tree"
      ],
      "answer": 2,
      "explanation": "It finishes with one tree per connected component."
    },
    {
      "id": 245,
      "code": "MS-11",
      "section": 16,
      "type": "Concept",
      "difficulty": "medium",
      "question": "Prim vs Kruskal:",
      "options": [
        "Prim sorts all edges first",
        "Kruskal needs a start vertex",
        "Both need negative edges",
        "Prim grows one tree from a start vertex; Kruskal sorts edges globally and merges components"
      ],
      "answer": 3,
      "explanation": "Prim repeatedly adds the cheapest edge connecting the tree to a new vertex."
    },
    {
      "id": 246,
      "code": "MS-12",
      "section": 16,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Kruskal's algorithm on a complete graph with V vertices (E about V^2/2) runs in:",
      "options": [
        "O(V^3)",
        "O(V log V)",
        "O(V^2 log V)",
        "O(V)"
      ],
      "answer": 2,
      "explanation": "O(E log E) with E ~ V^2 gives O(V^2 log V^2) = O(V^2 log V)."
    },
    {
      "id": 247,
      "code": "MS-13",
      "section": 16,
      "type": "Concept",
      "difficulty": "medium",
      "question": "Prim's algorithm with an adjacency matrix and linear scan to find the minimum edge has complexity:",
      "options": [
        "O(V log V)",
        "O(E)",
        "O(V^3)",
        "O(V^2)"
      ],
      "answer": 3,
      "explanation": "With a min-heap and adjacency list it becomes O(E log V)."
    },
    {
      "id": 248,
      "code": "MS-14",
      "section": 16,
      "type": "Concept",
      "difficulty": "medium",
      "question": "In Kruskal, 'edge (u,v) forms a cycle' is equivalent to:",
      "options": [
        "u and v are already connected in the forest built so far",
        "u has degree greater than 2",
        "The graph is directed",
        "The edge weight is the maximum"
      ],
      "answer": 0,
      "explanation": "Union-find (or a traversal) answers this question."
    },
    {
      "id": 249,
      "code": "MS-15",
      "section": 16,
      "type": "Concept",
      "difficulty": "medium",
      "question": "Prim's algorithm can start from any vertex. The resulting MST weight:",
      "options": [
        "Needs the start vertex to be vertex 0",
        "Changes with the start vertex",
        "Needs the minimum-degree vertex",
        "Is the same for every start vertex (tree may differ only when weights tie)"
      ],
      "answer": 3,
      "explanation": "The MST weight is unique even if several MSTs exist."
    },
    {
      "id": 250,
      "code": "AD-01",
      "section": 17,
      "type": "Concept",
      "difficulty": "easy",
      "question": "Dynamic programming applies when a problem has:",
      "options": [
        "Randomness and bounds",
        "Optimal substructure and overlapping subproblems",
        "Sorted input",
        "Negative weights only"
      ],
      "answer": 1,
      "explanation": "Subproblem solutions are reused instead of recomputed."
    },
    {
      "id": 251,
      "code": "AD-02",
      "section": 17,
      "type": "Concept",
      "difficulty": "medium",
      "question": "Memoization versus tabulation:",
      "options": [
        "Both are bottom-up",
        "Both are random",
        "Top-down recursion with a cache vs bottom-up iteration from base cases",
        "Memoization is bottom-up, tabulation top-down"
      ],
      "answer": 2,
      "explanation": "The notes' getNthTermTopDownDp is memoization; getNthTermBottomUpDp is tabulation."
    },
    {
      "id": 252,
      "code": "AD-03",
      "section": 17,
      "type": "Concept",
      "difficulty": "medium",
      "question": "Fibonacci complexities:",
      "options": [
        "Naive O(n); memo O(2^n)",
        "Naive O(2^n); memo O(n^2)",
        "Naive O(log n); memo O(n)",
        "Naive O(2^n); memoized/bottom-up O(n); optimised bottom-up O(1) space"
      ],
      "answer": 3,
      "explanation": "The optimised version keeps only the previous two terms."
    },
    {
      "id": 253,
      "code": "AD-04",
      "section": 17,
      "type": "Output",
      "difficulty": "medium",
      "question": "mem1=1; mem2=1; for(i=3;i<=n;i++){ result=mem1+mem2; mem1=mem2; mem2=result; } return result;\nFor n = 7 the returned value is:",
      "options": [
        "8",
        "13",
        "21",
        "11"
      ],
      "answer": 1,
      "explanation": "Sequence 1,1,2,3,5,8,13."
    },
    {
      "id": 254,
      "code": "AD-05",
      "section": 17,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Coins {1,3,4}, amount 6. Greedy (largest coin first) vs optimal?",
      "options": [
        "Greedy 2 coins, optimal 2",
        "Greedy 4 coins, optimal 3",
        "Greedy 3 coins (4+1+1), optimal 2 coins (3+3): greedy is not always optimal",
        "Greedy 2, optimal 3"
      ],
      "answer": 2,
      "explanation": "Locally best choices can miss the global optimum; DP solves it correctly."
    },
    {
      "id": 255,
      "code": "AD-06",
      "section": 17,
      "type": "Concept",
      "difficulty": "medium",
      "question": "Divide and conquer vs dynamic programming:",
      "options": [
        "D&C subproblems are independent; DP subproblems overlap",
        "D&C subproblems overlap",
        "They are the same",
        "DP never uses recursion"
      ],
      "answer": 0,
      "explanation": "Merge sort's halves are independent; Fibonacci's subproblems repeat."
    },
    {
      "id": 256,
      "code": "AD-07",
      "section": 17,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Find two numbers in an array that add up to a given sum. Best time complexity?",
      "options": [
        "O(n^2) brute force with nested loops",
        "O(n log n) with sort + binary search",
        "O(n) using a hash table (extra O(n) space)",
        "O(log n)"
      ],
      "answer": 2,
      "explanation": "For each b look up (sum - b) in the hash table in O(1)."
    },
    {
      "id": 257,
      "code": "AD-08",
      "section": 17,
      "type": "Concept",
      "difficulty": "medium",
      "question": "Branch and bound:",
      "options": [
        "Randomly guesses",
        "Always uses BFS",
        "Memoizes subproblems",
        "Uses a bounding function to discard subproblems that cannot contain the optimal solution"
      ],
      "answer": 3,
      "explanation": "Bounds prune the search tree for optimisation problems."
    },
    {
      "id": 258,
      "code": "AD-09",
      "section": 17,
      "type": "Concept",
      "difficulty": "medium",
      "question": "A stochastic algorithm:",
      "options": [
        "Is fully deterministic",
        "Uses randomness during execution, e.g. random pivot in quick sort",
        "Always returns the optimal answer",
        "Needs DP"
      ],
      "answer": 1,
      "explanation": "Its behaviour is non-deterministic."
    },
    {
      "id": 259,
      "code": "AD-10",
      "section": 17,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Substring search of an m-length pattern in an n-length text:",
      "options": [
        "Brute force O(n+m); Rabin-Karp O(n^2)",
        "Both O(n)",
        "Brute force O(n x m) worst; Rabin-Karp (rolling hash) average O(n+m)",
        "Both O(m)"
      ],
      "answer": 2,
      "explanation": "Rolling hash lets us compare hash values instead of whole substrings."
    },
    {
      "id": 260,
      "code": "AD-11",
      "section": 17,
      "type": "Scenario",
      "difficulty": "medium",
      "question": "Match application to data structure:",
      "options": [
        "Browser back button - queue; print jobs - stack",
        "Browser back button - stack; print jobs - queue; route finding - graph",
        "All use arrays only",
        "Route finding - stack"
      ],
      "answer": 1,
      "explanation": "Back/undo is LIFO; printing is FIFO; maps are graphs."
    },
    {
      "id": 261,
      "code": "AD-12",
      "section": 17,
      "type": "Concept",
      "difficulty": "medium",
      "question": "Asymptotic notation:",
      "options": [
        "Big-O lower bound, Omega upper bound",
        "All three mean average case",
        "Theta is only for best case",
        "Big-O is an upper bound, Omega a lower bound, Theta a tight bound"
      ],
      "answer": 3,
      "explanation": "Theta applies when upper and lower bounds match."
    },
    {
      "id": 262,
      "code": "AD-13",
      "section": 17,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Which technique is typical for 0/1 knapsack and for fractional knapsack?",
      "options": [
        "Both greedy",
        "Both DP",
        "0/1: dynamic programming; fractional: greedy by value/weight ratio",
        "0/1: greedy; fractional: DP"
      ],
      "answer": 2,
      "explanation": "Greedy by ratio is optimal only when items can be split."
    },
    {
      "id": 263,
      "code": "AD-14",
      "section": 17,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Total space complexity of recursive merge sort on an array of n elements (aux array + call stack)?",
      "options": [
        "O(1)",
        "O(n)",
        "O(n log n)",
        "O(log n)"
      ],
      "answer": 1,
      "explanation": "Auxiliary array O(n) plus O(log n) stack gives O(n)."
    },
    {
      "id": 264,
      "code": "AD-15",
      "section": 17,
      "type": "Scenario",
      "difficulty": "medium",
      "question": "Brute-force substring search: text length n = 10, pattern length m = 3. Worst-case character comparisons?",
      "options": [
        "30",
        "10",
        "24",
        "7"
      ],
      "answer": 2,
      "explanation": "(n - m + 1) x m = 8 x 3 = 24, i.e. O(n x m)."
    },
    {
      "id": 265,
      "code": "AD-16",
      "section": 17,
      "type": "Scenario",
      "difficulty": "medium",
      "question": "Brute-force two-sum on 100 numbers checks every pair. How many pairs?",
      "options": [
        "4950",
        "9900",
        "10000",
        "100"
      ],
      "answer": 0,
      "explanation": "n(n-1)/2 = 100 x 99 / 2 = 4950."
    },
    {
      "id": 266,
      "code": "AD-17",
      "section": 17,
      "type": "Trap",
      "difficulty": "hard",
      "question": "Backtracking vs branch and bound:",
      "options": [
        "Branch and bound is for feasibility only",
        "They are the same",
        "Backtracking uses cost bounds only",
        "Backtracking prunes invalid partial solutions (feasibility, all solutions); branch and bound prunes using a bound on the best achievable value (optimisation)"
      ],
      "answer": 3,
      "explanation": "N-Queens and Sudoku suit backtracking; TSP and knapsack optimisation suit branch and bound."
    },
    {
      "id": 267,
      "code": "AD-18",
      "section": 17,
      "type": "Concept",
      "difficulty": "medium",
      "question": "In the memoized Fibonacci code the mem[] array starts with 0 and 'mem[n] != 0' means 'already computed'. Why is that valid?",
      "options": [
        "It is needed for sorting",
        "Because fib(0) = 0",
        "Fibonacci terms for n >= 1 are never 0, so 0 can mark 'not computed'",
        "Java fills arrays with garbage"
      ],
      "answer": 2,
      "explanation": "The sentinel works only because stored results are non-zero (f(1) = f(2) = 1 ...)."
    },
    {
      "id": 268,
      "code": "AD-19",
      "section": 17,
      "type": "Trap",
      "difficulty": "hard",
      "question": "For naive f(n) (f(1)=f(2)=1), how many times is f(2) computed in the recursion tree of f(5)?",
      "options": [
        "3",
        "2",
        "4",
        "1"
      ],
      "answer": 0,
      "explanation": "f(5) -> f(4) -> f(3) -> f(2); f(4) -> f(2); f(5) -> f(3) -> f(2): three times, the overlapping subproblems that DP removes."
    }
  ]
};
