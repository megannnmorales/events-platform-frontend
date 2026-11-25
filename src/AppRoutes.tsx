import { Route, Routes } from "react-router";
import EventsListPage from "./pages/EventsListPage";
import HomePage from "./pages/HomePage";
import EventPage from "./pages/EventPage";
import NotFoundPage from "./pages/NotFoundPage";
import { Layout } from "./components/Layout";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsListPage />} />
        <Route path="/events/:id" element={<EventPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
