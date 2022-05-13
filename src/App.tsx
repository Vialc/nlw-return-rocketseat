import { Widget } from "./components/Widget";
import { Dashboard } from "./pages/Dashboard";

export function App() {
  return (
    <>
      <Dashboard student_id={import.meta.env.USER_TEST} />
      <Widget />
    </>
  );
}
