import Header from "./Components/Header";
import UserInfo from "./Components/UserInfo";
import UserContext from "./contexts/UserContext";

export default function App(){
  const user = {
    name: 'João',
    email: 'joao@example.com',
  };

  return(
    <UserContext.Provider value={user}>
      <div>
        <Header />
        <h1>Aplicação</h1>
        <UserInfo />
      </div>
    </UserContext.Provider>
  );
};