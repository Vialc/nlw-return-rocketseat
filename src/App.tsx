import { Widget } from "./components/Widget";
import { Dashboard } from "./pages/Dashboard";



export function App() {
  return (
    <>
      <Dashboard student_id="764eb50b-fec6-462b-b8c8-cd1be97a49b8" /*{import.meta.env.VITE_USER_TEST}*/ />
      <Widget />
    </>
  );
}
