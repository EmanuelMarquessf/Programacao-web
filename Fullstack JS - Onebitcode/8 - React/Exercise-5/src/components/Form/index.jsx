export default function Form(name, setName, comment, setComment) {
  function AddComment({ name, comment }) {
    const comment = { name, comment, color };
    SetCommentList((state) => [...state, comment]);
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    AddComment({ name, comment, color });
    setName("");
    setComment("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="input">
        <label htmlFor="">Name</label>
        <input
          value={name}
          type="text"
          onChange={(ev) => setName(ev.target.value)}
          required
        />
      </div>
      <div className="input">
        <label htmlFor="coment">Comentario</label>
        <textarea
          value={comment}
          onChange={(ev) => setComment(ev.target.value)}
          name="coment"
          id=""
          cols="30"
          rows="10"
          required
        ></textarea>
      </div>
      <button>Enviar comentario</button>
    </form>
  );
}
