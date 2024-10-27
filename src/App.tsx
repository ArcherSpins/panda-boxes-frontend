import { Button } from "./components/Button";

function App() {
  return (
    <div className="p-5 bg-slate-400">
      <Button />
      <Button className="bg-white text-black" label="Ivan" />
      <Button className="bg-gray-300 text-black" label="JS" />
    </div>
  );
}

export default App;
