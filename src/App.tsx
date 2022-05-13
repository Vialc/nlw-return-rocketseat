import { Widget } from "./components/Widget";
import { Dashboard } from "./pages/Dashboard";

const studentId: string = import.meta.env.VITE_USER_TEST

export function App() {
  return (
    <>
      <Dashboard student_id={studentId} />
      <Widget />
    </>
  );
}
