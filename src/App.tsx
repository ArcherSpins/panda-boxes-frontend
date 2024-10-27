import { Button } from "./components/Button";

function App() {
  return (
    <div className="p-5 bg-slate-400">
      <Button />
      <Button className="bg-white text-black" label="Ivan" />
      <Button className="bg-gray text-black" label="JS" />
      <Button className="bg-award-1 text-black" size="s" label="JS" />
    </div>
  );
}

export default App;
