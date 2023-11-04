interface ActionProps {
  type: string;
}

export default function Action({ type }: ActionProps) {
  return (
    <li key={type}>
      <h3>{type}</h3>
    </li>
  );
}
