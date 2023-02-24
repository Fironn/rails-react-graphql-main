import {
  useTodosQuery,
  useCreateTodoMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} from "./graphql/generated";
import { useState } from "react";
import "./App.css";

function App() {
  const { data: { todos = [] } = {} } = useTodosQuery();
  const [createTodo] = useCreateTodoMutation({ refetchQueries: ["todos"] });
  const [title, setTitle] = useState("");
  const [deleteTodo] = useDeleteTodoMutation({ refetchQueries: ["todos"] });
  const [updateTodo] = useUpdateTodoMutation();

  return (
    <div style={{ width: "600px", margin: "50px auto" }}>
      <h1>TODOリスト</h1>
      <div
        style={{
          display: "flex",
          gap: "8px",
          marginBottom: "18px",
        }}
      >
        <textarea
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="買い物にいく"
        ></textarea>
        <button
          onClick={() => {
            createTodo({
              variables: { params: { title: title } },
            });
            setTitle("");
          }}
          style={{
            color: "white",
            backgroundColor: "#5B8F5D",
          }}
        >
          追加
        </button>
      </div>
      {todos.map((todo) => (
        <div
          key={todo.id}
          style={{
            display: "flex",
            gap: "8px",
            marginBottom: "18px",
            flexDirection: "column",
          }}
        >
          <p
            style={{
              fontSize: "12px",
              margin: "0 8px",
            }}
          >
            {getStringFromDate(todo.updatedAt)}
          </p>
          <div
            style={{
              display: "flex",
              gap: "8px",
            }}
          >
            <input
              value={todo.title || ""}
              onChange={(e) =>
                updateTodo({
                  variables: {
                    id: todo.id,
                    params: { title: e.target.value },
                  },
                })
              }
            />
            <button
              style={{
                color: "red",
                background: "none",
                boxShadow: "none",
              }}
              onClick={() => deleteTodo({ variables: { id: todo.id } })}
            >
              削除
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;

const getStringFromDate = (str: string) => {
  let date = new Date(str);
  let year_str = date.getFullYear();
  let month_str = 1 + date.getMonth();
  let day_str = date.getDate();
  let hour_str = date.getHours();
  let minute_str = date.getMinutes();
  let second_str = date.getSeconds();

  let format_str = "YYYY-MM-DD hh:mm:ss";
  format_str = format_str.replace(/YYYY/g, year_str.toString());
  format_str = format_str.replace(/MM/g, month_str.toString());
  format_str = format_str.replace(/DD/g, day_str.toString());
  format_str = format_str.replace(/hh/g, hour_str.toString());
  format_str = format_str.replace(/mm/g, minute_str.toString());
  format_str = format_str.replace(/ss/g, second_str.toString());

  return format_str;
};
