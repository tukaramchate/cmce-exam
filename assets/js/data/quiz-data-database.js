const QUIZ_DATA_DATABASE = {
  "title": "Database (DBMS) MCQ Practice Bank – CDAC PGCP-AC",
  "description": "MCQs covering SQL, DBMS concepts, Normalization, Transactions, and more",
  "sections": [
    { "id": 1, "title": "DBMS Fundamentals, ER Model, Relational Model", "range": "Q1–Q5" },
    { "id": 2, "title": "SQL Queries, Joins, Subqueries", "range": "Q6–Q10" },
    { "id": 3, "title": "Normalization, Functional Dependencies", "range": "Q11–Q15" },
    { "id": 4, "title": "Transactions, Concurrency, Recovery", "range": "Q16–Q20" }
  ],
  "questions": [
    {
      "id": 1, "section": 1, "type": "Concept",
      "question": "Which of the following is NOT a property of ACID transactions?",
      "options": ["Atomicity", "Consistency", "Isolation", "Dependency"],
      "answer": 3,
      "explanation": "ACID stands for Atomicity, Consistency, Isolation, and Durability. There is no 'Dependency' property."
    },
    {
      "id": 2, "section": 1, "type": "Concept",
      "question": "A foreign key in a relational database is used to:",
      "options": [
        "Uniquely identify a record in the same table",
        "Establish a link between data in two tables",
        "Index the table for faster queries",
        "Encrypt sensitive data columns"
      ],
      "answer": 1,
      "explanation": "A foreign key creates a referential integrity constraint linking a column in one table to the primary key of another."
    },
    {
      "id": 3, "section": 1, "type": "Trap",
      "question": "In an ER diagram, a weak entity set is represented by:",
      "options": [
        "A single rectangle",
        "A double rectangle",
        "A diamond",
        "A dashed rectangle"
      ],
      "answer": 1,
      "explanation": "Weak entities are depicted with a double (bold) rectangle in ER diagrams."
    },
    {
      "id": 4, "section": 1, "type": "Concept",
      "question": "Which normal form eliminates transitive dependencies?",
      "options": ["1NF", "2NF", "3NF", "BCNF"],
      "answer": 2,
      "explanation": "Third Normal Form (3NF) removes transitive dependencies on the primary key."
    },
    {
      "id": 5, "section": 1, "type": "Concept",
      "question": "The candidate key of a relation is:",
      "options": [
        "Any attribute in the relation",
        "A minimal superkey that uniquely identifies each tuple",
        "The first column of every table",
        "Always a single attribute"
      ],
      "answer": 1,
      "explanation": "A candidate key is a minimal set of attributes that can uniquely identify every tuple in a relation."
    },
    {
      "id": 6, "section": 2, "type": "Output",
      "question": "What is the output of the following SQL?\n\nSELECT COUNT(*) FROM employees WHERE salary > 50000 AND department = 'IT';\n\nGiven: 3 employees in IT with salaries 60000, 45000, 70000.",
      "options": ["3", "2", "1", "0"],
      "answer": 1,
      "explanation": "Only 2 employees (60000 and 70000) have salary > 50000 in the IT department."
    },
    {
      "id": 7, "section": 2, "type": "Trap",
      "question": "What does the following SQL return?\n\nSELECT NULL = NULL;",
      "options": ["TRUE", "FALSE", "NULL", "Error"],
      "answer": 2,
      "explanation": "In SQL, comparing NULL with anything (including NULL) yields NULL, not TRUE or FALSE."
    },
    {
      "id": 8, "section": 2, "type": "Concept",
      "question": "Which type of JOIN returns all rows from both tables, matching where possible?",
      "options": ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"],
      "answer": 3,
      "explanation": "FULL OUTER JOIN returns all rows from both tables, with NULLs where there's no match."
    },
    {
      "id": 9, "section": 2, "type": "Output",
      "question": "What is the result of the following query?\n\nSELECT DISTINCT department FROM employees ORDER BY department DESC;",
      "options": [
        "All departments with duplicates, sorted ascending",
        "Unique departments sorted in descending order",
        "Error: cannot use DISTINCT with ORDER BY",
        "All departments sorted descending"
      ],
      "answer": 1,
      "explanation": "DISTINCT removes duplicates; ORDER BY DESC sorts in descending order. Both can be used together."
    },
    {
      "id": 10, "section": 2, "type": "Trap",
      "question": "Which SQL clause is used to filter groups created by GROUP BY?",
      "options": ["WHERE", "HAVING", "FILTER", "GROUP FILTER"],
      "answer": 1,
      "explanation": "HAVING filters groups after GROUP BY. WHERE filters rows before grouping."
    },
    {
      "id": 11, "section": 3, "type": "Concept",
      "question": "A relation is in BCNF if:",
      "options": [
        "It has no multi-valued dependencies",
        "Every determinant is a candidate key",
        "It has no partial dependencies",
        "All attributes are atomic"
      ],
      "answer": 1,
      "explanation": "Boyce-Codd Normal Form requires that every determinant (LHS of a functional dependency) must be a candidate key."
    },
    {
      "id": 12, "section": 3, "type": "Trap",
      "question": "A table has columns (StudentID, CourseID, Instructor). StudentID, CourseID → Instructor and CourseID → Instructor. What is the highest normal form?",
      "options": ["1NF", "2NF", "3NF", "BCNF"],
      "answer": 1,
      "explanation": "CourseID → Instructor is a partial dependency (CourseID is part of the composite key), so it's in 1NF but not 2NF."
    },
    {
      "id": 13, "section": 3, "type": "Concept",
      "question": "Lossless join decomposition ensures that:",
      "options": [
        "No data is lost when a relation is decomposed and rejoined",
        "Queries run faster after decomposition",
        "All functional dependencies are preserved",
        "The decomposition uses fewer tables"
      ],
      "answer": 0,
      "explanation": "A lossless join guarantees the natural join of decomposed relations reproduces the original relation exactly."
    },
    {
      "id": 14, "section": 3, "type": "Concept",
      "question": "Which of the following is a closure of attribute set {A} given FDs: A→B, B→C, C→D?",
      "options": ["{A}", "{A, B}", "{A, B, C}", "{A, B, C, D}"],
      "answer": 3,
      "explanation": "Starting with A, we can derive B (A→B), then C (B→C), then D (C→D). So A+ = {A, B, C, D}."
    },
    {
      "id": 15, "section": 3, "type": "Trap",
      "question": "Denormalization is used when:",
      "options": [
        "We want to reduce redundancy",
        "We want to improve read performance at the cost of redundancy",
        "The database is already in BCNF",
        "We need to add more constraints"
      ],
      "answer": 1,
      "explanation": "Denormalization deliberately introduces redundancy to speed up read queries, trading off write complexity."
    },
    {
      "id": 16, "section": 4, "type": "Concept",
      "question": "In a database, a 'dirty read' occurs when:",
      "options": [
        "A transaction reads data written by a committed transaction",
        "A transaction reads data written by an uncommitted transaction",
        "Two transactions read the same data simultaneously",
        "A transaction fails to read any data"
      ],
      "answer": 1,
      "explanation": "A dirty read happens when a transaction reads data that has been modified by another transaction that has not yet committed."
    },
    {
      "id": 17, "section": 4, "type": "Concept",
      "question": "Which isolation level prevents dirty reads but allows non-repeatable reads?",
      "options": ["READ UNCOMMITTED", "READ COMMITTED", "REPEATABLE READ", "SERIALIZABLE"],
      "answer": 1,
      "explanation": "READ COMMITTED prevents dirty reads by only allowing reads of committed data, but a value read once may change if re-read."
    },
    {
      "id": 18, "section": 4, "type": "Trap",
      "question": "Deadlock in a database system occurs when:",
      "options": [
        "A single transaction takes too long to execute",
        "Two or more transactions are waiting for each other to release locks",
        "The database runs out of storage",
        "A transaction is rolled back"
      ],
      "answer": 1,
      "explanation": "Deadlock is a circular wait condition where two or more transactions hold locks needed by each other."
    },
    {
      "id": 19, "section": 4, "type": "Concept",
      "question": "The Write-Ahead Logging (WAL) protocol requires:",
      "options": [
        "Log records are written after the data is written to disk",
        "Log records must be written to stable storage before the corresponding data modifications are written to disk",
        "Data is written to disk before the transaction starts",
        "Logs are optional for committed transactions"
      ],
      "answer": 1,
      "explanation": "WAL ensures that log entries are flushed to disk before the actual data changes, enabling crash recovery."
    },
    {
      "id": 20, "section": 4, "type": "Scenario",
      "question": "Transaction T1 holds a shared lock on row R. Transaction T2 requests an exclusive lock on the same row R. What happens?",
      "options": [
        "T2 gets the lock immediately",
        "T2 waits until T1 releases its lock",
        "Both transactions are aborted",
        "T1's lock is automatically upgraded to exclusive"
      ],
      "answer": 1,
      "explanation": "Exclusive locks conflict with shared locks. T2 must wait until T1 releases its shared lock on R."
    }
  ]
};
if (typeof window !== 'undefined') window.QUIZ_DATA_DATABASE = QUIZ_DATA_DATABASE;
