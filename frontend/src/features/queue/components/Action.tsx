interface ActionProps {
  type: string;
  index: number;
}

export default function Action({ type, index }: ActionProps) {
  return (
    <li
      key={type}
      className={`bg-blue-300 p-2 rounded shadow-sm border-solid border-2 ${
        index === 0 ? "border-black" : "border-transparent"
      }`}
    >
      <h3 className="font-bold text-3xl">{type}</h3>
    </li>
  );
}
