export const TODO_LIST = [
    {
      id: 1,
      text: "Buy groceries",
      isCompleted: false
    },
    {
      id: 2,
      text: "Finish homework",
      isCompleted: true
    },
    {
      id: 3,
      text: "Go for a run",
      isCompleted: false
    },
    {
      id: 4,
      text: "Call her",
      isCompleted: false
    },
    {
      id: 5,
      text: "Clean the house",
      isCompleted: true
    },
    {
      id: 6,
      text: "Read a book",
      isCompleted: false
    }
  ];

export const fetchData = () => new Promise((resolve) => setTimeout(() => resolve("Todo App"), 1500))

  