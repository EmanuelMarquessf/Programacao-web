import { Link, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <header>
        <nav style={{ display: "flex", gap: "2rem" }}>
          <Link to="/">Início</Link>
        </nav>
      </header>
      <main>
        <p>Bem vindo Administrador!!</p>
        <p>Rotas funcionando</p>
        <hr />
        <Outlet />
      </main>
      <footer>
        <p>Feito com React Router DOM =D</p>
      </footer>
    </>
  )
}