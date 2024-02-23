export default function CardComment({ id, name, comment, color, createdAt }) {
  return (
    <div key={id} className="commentCard">
      <div className="imgCard" style={{ backgroundColor: color }}>
        {name[0]}
      </div>
      <div style={{ width: "100%" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            color: "#595e66",
            fontFamily: "sans-serif",
            fontWeight: "600",
          }}
        >
          <span>{name}</span>
          <span style={{ fontSize: "10px" }}>{createdAt.toLocaleString()}</span>
        </div>
        <hr style={{ borderColor: "#595e66" }} />
        <p style={{ textAlign: "justify" }}>{comment}</p>
      </div>
    </div>
  );
}
