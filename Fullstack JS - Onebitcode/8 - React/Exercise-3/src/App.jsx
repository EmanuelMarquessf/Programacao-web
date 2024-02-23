import Card from "./Components/Card";

export default function App() {
  return (
    <div className="container">
      <Card
        className="card"
        name="Maria"
        img="https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        bio="Full-stack javascript developer at Acme Inc."
        phone="+55 1299871-3131"
        email="maria@email.com"
        git="https://github.com/"
        linkedin="https://www.linkedin.com/feed/"
        twitter="https://twitter.com"
      />
    </div>
  );
}
