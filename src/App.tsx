import { Button } from "./components/Button";

function App() {
  return (
    <div className="p-5 bg-slate-400">
      <Button />
      <Button color="white" label="Ivan" />
      <Button color="gray" label="JS" />
    </div>
  );
}

export default App;
