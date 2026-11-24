import { Route, Routes } from "react-router";
import EventsListPage from "./pages/EventsListPage";
import HomePage from "./pages/HomePage";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/events" element={<EventsListPage />} />
    </Routes>
  );
}
