import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import TaskManagerPage from "./pages/TaskManagerPage";
import ApiDataPage from "./pages/ApiDataPage";

const HomePage = () => (
  <div className="text-center">
    <h1 className="text-3xl font-bold">Welcome to the React Front-End Master</h1>
    <p className="mt-4">
      Use the navigation bar to visit the Task Manager and API Data pages.
    </p>
  </div>
);

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="tasks" element={<TaskManagerPage />} />
        <Route path="data" element={<ApiDataPage />} />
        <Route
          path="*"
          element={
            <div className="text-center">
              <h2>404 - Page Not Found!</h2>
            </div>
          }
        />
      </Route>
    </Routes>
  );
}
