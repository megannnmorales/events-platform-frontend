import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import Header from "./Header";

export function Layout() {
  return (
    <>
      <Header />
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
