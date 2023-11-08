import Actions from "../features/actionTypes/components/ActionTypeList";
import Header from "./Header";
import Queue from "../features/queue/components/Queue";
import Copyrights from "./Copyrights";
import ExecutionTime from "../features/times/components/ExecutionTime";
import CalculationTime from "../features/times/components/CalculationTime";

export default function App() {
  return (
    <div className="flex flex-col relative">
      <Header />
      <Queue />
      <Actions />
      <div className="flex flex-wrap justify-evenly my-16 gap-4">
        <ExecutionTime />
        <CalculationTime />
      </div>
      <Copyrights />
    </div>
  );
}
