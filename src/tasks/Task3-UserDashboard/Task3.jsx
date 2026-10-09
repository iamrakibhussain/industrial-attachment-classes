import { useContext } from "react";
import { UserProvider, UserContext } from "./components/UserContext";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

function Task3() {
  return (
    <UserProvider>
      <UserDashboard />
    </UserProvider>
  );
}

function UserDashboard() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Login />;
  }

  return (
    <section className="space-y-8">
      <Navbar />
      <Dashboard />
    </section>
  );
}

export default Task3;
