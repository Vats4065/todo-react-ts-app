import { ReactNode, createContext, useContext, useState } from "react";

export type TodosProviderProp = {
  children: ReactNode;
};

export type TodosContext = {
  todos: Todo[];
  todo: string;
  upBtn: boolean;
  handleAddTodo: (task: string) => void;
  toggleTodoAsCompleted: (id: string) => void;
  handleDelete: (id: string) => void;
  handleEdit: (id: string) => void;
  handleUpdate:(task:string)=>void
  setTodo: (task: string) => void;
};

export type Todo = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};

export const todoContext = createContext<TodosContext | null>(null);

export const TodoProvider = ({ children }: TodosProviderProp) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todo, setTodo] = useState("");
  const [upBtn, setUpBtn] = useState(false);

  const handleAddTodo = (task: string) => {
    setTodos((prev) => {
      const newTodos: Todo[] = [
        {
          id: Math.random().toString(),
          task: task,
          completed: false,
          createdAt: new Date(),
        },
        ...prev,
      ];
      console.log("prev", prev);
      console.log(newTodos);

      return newTodos;
    });
  };

  const handleDelete = (id: string) => {
    setTodos((prev) => {
      let newTodos = prev.filter((filterTodo) => filterTodo.id != id);
      return newTodos;
    });
  };

  const handleEdit = (id: string) => {
    setTodos((prev) => {
      prev.map((item) => {
        if (item.id === id) {
          console.log(item);
          const { task } = item;

          console.log(task);
          setTodo(task);
          setUpBtn(true);
        }
        return todo;
      });
      return todos;
    });
  };

  const handleUpdate = ( id: string) => {
    setTodos((prev) => {
      prev.map((item) => {
        let newTodo = prev.map((todo) => {
          if (todo.id === id) {
            return { ...todo, task: todo.task };
          }
          return todo
        })
        return newTodo 
      });

      console.log("prev", prev);
      return prev;
    });
  };

  const toggleTodoAsCompleted = (id: string) => {
    setTodos((prev) => {
      let newTodo = prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      return newTodo;
    });
  };

  return (
    <todoContext.Provider
      value={{
        todos,
        handleAddTodo,
        toggleTodoAsCompleted,
        handleDelete,
        handleEdit,
        todo,
        setTodo,
        handleUpdate,

        upBtn,
      }}
    >
      {children}
    </todoContext.Provider>
  );
};

export const useTodo = () => {
  const todosConsumer = useContext(todoContext);
  if (!todosConsumer) {
    throw new Error("useTodos used outside of provider");
  }
  return todosConsumer;
};
