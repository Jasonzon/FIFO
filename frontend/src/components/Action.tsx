interface ActionProps {
  type: string;
  index: number;
}

export default function Action({ type, index }: ActionProps) {
  return (
    <li
      key={type}
      className={`bg-gray-200 p-2 rounded shadow-sm ${
        index === 0 ? "border-black border-solid border-2" : "border-none"
      }`}
    >
      <h3 className="font-bold text-3xl">{type}</h3>
    </li>
  );
}
