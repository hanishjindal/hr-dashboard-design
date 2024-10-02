import "./App.css";
import Dashboard from "./components/dashboard";
import JobSection from "./components/jobSection";

function App() {
  return (
    <div>
      <Dashboard />

      <hr style={{ minWidth: "1200px" }} />

      <JobSection />
    </div>
  );
}

export default App;
