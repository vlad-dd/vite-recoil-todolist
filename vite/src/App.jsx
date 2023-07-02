import {
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';
import { todoFilter, todoItemByID, todoList, todoSelector, todoTitleSelector } from './state';
import './App.css'
import InputText from './InputText';

function App() {
  const data = useRecoilValue(todoSelector);
  const title = useRecoilValue(todoTitleSelector);
  const changeFilter = useSetRecoilState(todoFilter);
  const setTodo = useSetRecoilState(todoList);
  const item = useRecoilValue(todoItemByID(5));

  const deleteItem = (deleteItemId) => {
    const filtered = data.filter(({ id }) => id !== deleteItemId);
    setTodo(filtered)
  };

  return (
    <>
      <h1>{title}</h1>
      <button onClick={() => changeFilter("Show All")}>
        Show All
      </button>
      <button onClick={() => changeFilter("Completed")}>
        Completed
      </button>
      <button onClick={() => changeFilter("Uncompleted")}>
        Uncompleted
      </button>
      <div>
        {data.map(({ id, text }) => (
          <div>
            {text}
            <button
              onClick={() => deleteItem(id)}
              style={{ margin: "15px" }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <InputText />
      {JSON.stringify(item)}
    </>
  )
}

export default App
