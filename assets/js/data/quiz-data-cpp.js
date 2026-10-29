const QUIZ_DATA_CPP = {
  "title": "C++ MCQ Practice Bank – CDAC PGCP-AC",
  "description": "MCQs covering C++ fundamentals, OOP, STL, pointers, and advanced features",
  "sections": [
    { "id": 1, "title": "C++ Basics, Data Types, Operators, Control Flow", "range": "Q1–Q5" },
    { "id": 2, "title": "Pointers, References, Memory Management", "range": "Q6–Q10" },
    { "id": 3, "title": "OOP: Classes, Inheritance, Polymorphism", "range": "Q11–Q15" },
    { "id": 4, "title": "Templates, STL, Exception Handling", "range": "Q16–Q20" }
  ],
  "questions": [
    {
      "id": 1, "section": 1, "type": "Output",
      "question": "What is the output of the following code?\n\nint x = 5;\ncout << x++ << \" \" << ++x;",
      "options": ["5 7", "5 6", "6 7", "Undefined behavior"],
      "answer": 3,
      "explanation": "Modifying a variable more than once between sequence points leads to undefined behavior in C++."
    },
    {
      "id": 2, "section": 1, "type": "Concept",
      "question": "What is the size of an empty class in C++?",
      "options": ["0 bytes", "1 byte", "4 bytes", "Depends on compiler"],
      "answer": 1,
      "explanation": "C++ guarantees that an empty class has a size of at least 1 byte so each object has a unique address."
    },
    {
      "id": 3, "section": 1, "type": "Trap",
      "question": "What is the difference between 'const int* p' and 'int* const p'?",
      "options": [
        "Both are the same",
        "const int* p: pointer to const int; int* const p: const pointer to int",
        "const int* p: const pointer to int; int* const p: pointer to const int",
        "Neither can be modified"
      ],
      "answer": 1,
      "explanation": "Read right-to-left: 'const int* p' — pointer to const int (can't change value). 'int* const p' — const pointer to int (can't change address)."
    },
    {
      "id": 4, "section": 1, "type": "Output",
      "question": "What is the output of the following code?\n\nint a = 10;\nint &ref = a;\nref = 20;\ncout << a;",
      "options": ["10", "20", "Compile error", "Undefined"],
      "answer": 1,
      "explanation": "ref is a reference to a. Modifying ref changes a directly."
    },
    {
      "id": 5, "section": 1, "type": "Concept",
      "question": "Which of the following is NOT a valid C++ storage class?",
      "options": ["auto", "register", "volatile", "extern"],
      "answer": 2,
      "explanation": "volatile is a type qualifier, not a storage class. Storage classes include auto, register, static, extern, and mutable."
    },
    {
      "id": 6, "section": 2, "type": "Output",
      "question": "What is the output of the following code?\n\nint arr[] = {10, 20, 30};\nint *p = arr;\ncout << *(p + 2);",
      "options": ["10", "20", "30", "Compile error"],
      "answer": 2,
      "explanation": "p + 2 points to the third element of the array, which is 30."
    },
    {
      "id": 7, "section": 2, "type": "Trap",
      "question": "What happens when you delete a pointer twice in C++?",
      "options": [
        "Nothing, it's safe",
        "Undefined behavior",
        "Compile-time error",
        "The pointer becomes null automatically"
      ],
      "answer": 1,
      "explanation": "Double deletion leads to undefined behavior. Always set pointer to nullptr after deletion."
    },
    {
      "id": 8, "section": 2, "type": "Concept",
      "question": "What is a dangling pointer?",
      "options": [
        "A pointer pointing to null",
        "A pointer pointing to deallocated memory",
        "A pointer declared but not initialized",
        "A pointer to a const variable"
      ],
      "answer": 1,
      "explanation": "A dangling pointer points to memory that has been freed or gone out of scope."
    },
    {
      "id": 9, "section": 2, "type": "Output",
      "question": "What is the output of the following code?\n\nint x = 5;\nint *p = &x;\nint **pp = &p;\ncout << **pp;",
      "options": ["Address of x", "Address of p", "5", "Compile error"],
      "answer": 2,
      "explanation": "pp is a pointer to pointer. *pp gives p, **pp gives *p which is x = 5."
    },
    {
      "id": 10, "section": 2, "type": "Concept",
      "question": "Which smart pointer allows shared ownership of an object in C++11?",
      "options": ["unique_ptr", "shared_ptr", "weak_ptr", "auto_ptr"],
      "answer": 1,
      "explanation": "shared_ptr uses reference counting to allow multiple pointers to share ownership of the same object."
    },
    {
      "id": 11, "section": 3, "type": "Trap",
      "question": "What is the output of the following code?\n\nclass Base {\npublic:\n  virtual void show() { cout << \"Base\"; }\n};\nclass Derived : public Base {\npublic:\n  void show() { cout << \"Derived\"; }\n};\nBase *p = new Derived();\np->show();",
      "options": ["Base", "Derived", "Compile error", "Runtime error"],
      "answer": 1,
      "explanation": "show() is virtual in Base, so dynamic dispatch calls Derived::show()."
    },
    {
      "id": 12, "section": 3, "type": "Concept",
      "question": "What is the diamond problem in C++?",
      "options": [
        "When a class inherits from two classes that share a common base class",
        "When a virtual function has no implementation",
        "When a destructor is not virtual",
        "When constructors are ambiguous"
      ],
      "answer": 0,
      "explanation": "The diamond problem occurs with multiple inheritance when two parent classes share a common grandparent, leading to ambiguity. Virtual inheritance resolves this."
    },
    {
      "id": 13, "section": 3, "type": "Output",
      "question": "What is the output?\n\nclass A {\npublic:\n  A() { cout << \"A\"; }\n  ~A() { cout << \"~A\"; }\n};\nclass B : public A {\npublic:\n  B() { cout << \"B\"; }\n  ~B() { cout << \"~B\"; }\n};\n{ B obj; }",
      "options": ["AB~A~B", "AB~B~A", "BA~A~B", "BA~B~A"],
      "answer": 1,
      "explanation": "Constructors run base-first (A then B). Destructors run in reverse order (~B then ~A)."
    },
    {
      "id": 14, "section": 3, "type": "Concept",
      "question": "A pure virtual function in C++ is declared as:",
      "options": [
        "virtual void f() {}",
        "virtual void f() = 0;",
        "void f() = 0;",
        "abstract void f();"
      ],
      "answer": 1,
      "explanation": "A pure virtual function is declared with = 0 and makes the class abstract."
    },
    {
      "id": 15, "section": 3, "type": "Trap",
      "question": "What is object slicing in C++?",
      "options": [
        "Dividing an object into multiple parts",
        "When a derived class object is assigned to a base class object, losing derived-class data",
        "Splitting a class into header and implementation files",
        "Removing unused members from a class"
      ],
      "answer": 1,
      "explanation": "Object slicing occurs when a derived object is copied into a base object — the derived-specific members are 'sliced off'."
    },
    {
      "id": 16, "section": 4, "type": "Output",
      "question": "What is the output of the following code?\n\ntemplate<typename T>\nT add(T a, T b) { return a + b; }\ncout << add(3, 4) << \" \" << add(1.5, 2.5);",
      "options": ["7 4.0", "7 4", "3 1.5", "Compile error"],
      "answer": 0,
      "explanation": "Template deduces T as int for add(3,4)=7 and double for add(1.5,2.5)=4.0."
    },
    {
      "id": 17, "section": 4, "type": "Concept",
      "question": "Which STL container provides O(1) average access by key?",
      "options": ["std::map", "std::set", "std::unordered_map", "std::list"],
      "answer": 2,
      "explanation": "unordered_map uses hashing for O(1) average-case lookup. map uses a balanced BST with O(log n)."
    },
    {
      "id": 18, "section": 4, "type": "Trap",
      "question": "What happens when an exception is thrown but not caught in C++?",
      "options": [
        "The program continues normally",
        "std::terminate() is called",
        "The exception is silently ignored",
        "A compile-time error occurs"
      ],
      "answer": 1,
      "explanation": "An uncaught exception causes std::terminate() to be called, which by default calls std::abort()."
    },
    {
      "id": 19, "section": 4, "type": "Output",
      "question": "What is the output?\n\nvector<int> v = {1, 2, 3, 4, 5};\nv.erase(v.begin() + 1, v.begin() + 3);\nfor(int x : v) cout << x << \" \";",
      "options": ["1 4 5", "2 3", "1 2 3", "1 3 5"],
      "answer": 0,
      "explanation": "erase(begin+1, begin+3) removes elements at indices 1 and 2 (values 2 and 3), leaving {1, 4, 5}."
    },
    {
      "id": 20, "section": 4, "type": "Concept",
      "question": "What is RAII in C++?",
      "options": [
        "A design pattern for database access",
        "Resource Acquisition Is Initialization – tying resource lifetime to object lifetime",
        "A runtime type checking mechanism",
        "A method of array initialization"
      ],
      "answer": 1,
      "explanation": "RAII ensures resources (memory, files, locks) are acquired in constructors and released in destructors, preventing leaks."
    }
  ]
};
if (typeof window !== 'undefined') window.QUIZ_DATA_CPP = QUIZ_DATA_CPP;
