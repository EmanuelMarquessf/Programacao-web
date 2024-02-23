import TextInput from "./components/TextInput";
import mdColors from "./hooks/material-design-colors.js";
import CardComment from "./components/CardComment/index.jsx";

import { useState } from "react";

export default function App() {
  const [nameInput, setNameInput] = useState("");
  const [commentInput, setCommentInput] = useState("");

  const [commentList, SetCommentList] = useState([]);
  let color = mdColors[Math.floor(Math.random() * 255)];

  const handleSubmit = (ev) => {
    ev.preventDefault();

    const newComment = {
      id: Math.floor(Math.random() * 1000000),
      nameInput: nameInput,
      commentInput: commentInput,
      color: color,
      createdAt: new Date(),
    };
    SetCommentList((state) => [newComment, ...state]);
    setNameInput("");
    setCommentInput("");
  };

  return (
    <main>
      <div className="container form">
        <h2>Digite seu comentario</h2>

        <form onSubmit={handleSubmit}>
          <div className="input">
            <label htmlFor="">Name</label>
            <input
              value={nameInput}
              type="text"
              onChange={(ev) => setNameInput(ev.target.value)}
              required
            />
          </div>
          <div className="input">
            <label htmlFor="coment">Comentario</label>
            <textarea
              value={commentInput}
              onChange={(ev) => setCommentInput(ev.target.value)}
              name="coment"
              id=""
              cols="30"
              rows="10"
              required
            ></textarea>
          </div>
          <button>Enviar comentario</button>
        </form>
      </div>
      <div className="container comments">
        {commentList.length > 0
          ?(
            <CardComment
              key={comment.id}
              name={comment.nameInput}
              comment={comment.commentInput}
              color={comment.color}
              createdAt={comment.createdAt}
            />
          ):(
            <h2 style={{textAlign: "center"}}>
              Nenhum comentario encontrado!
            </h2>
          )
        }
        {commentList.map((comment) => (
          <CardComment
            key={comment.id}
            name={comment.nameInput}
            comment={comment.commentInput}
            color={comment.color}
            createdAt={comment.createdAt}
          />
        ))}
      </div>
    </main>
  );
}
