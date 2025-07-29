import "./App.css";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import UserListUpdateDelete from "./components/UserListUpdateDelete";
// import UserListAxios from "./components/UserListAxios";

function App() {
  return (
    <div className="flex h-screen items-stretch justify-around">
      {/* <UserList /> */}
      {/* <UserListAxios /> */}
      {/* <UserForm /> */}
      <UserListUpdateDelete />
    </div>
  );
}

export default App;
