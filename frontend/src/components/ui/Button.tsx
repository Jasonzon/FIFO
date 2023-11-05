import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled: boolean;
}

export default function Button({ disabled, ...props }: ButtonProps) {
  return (
    <button
      className={`p-3 ${
        disabled
          ? "bg-gray-400 hover:bg-gray-500"
          : "bg-blue-500 hover:bg-blue-700"
      } text-white rounded shadow mx-2 my-2`}
      {...props}
    />
  );
}
