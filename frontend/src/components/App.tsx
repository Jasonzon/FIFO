import Actions from "./ActionList";
import Header from "./Header";
import Queue from "./Queue";

export default function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <Queue />
      <Actions />
    </div>
  );
}
