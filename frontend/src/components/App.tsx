import Actions from "../features/actionTypes/components/ActionTypeList";
import Header from "./Header";
import Queue from "../features/queue/components/Queue";
import Copyrights from "./Copyrights";

export default function App() {
  return (
    <div className="flex flex-col relative">
      <Header />
      <Queue />
      <Actions />
      <Copyrights />
    </div>
  );
}
