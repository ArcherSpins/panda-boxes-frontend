interface ButtonProps {
  color?: "black" | "white" | "gray";
  label?: string;
}

export const Button = ({ color = "black", label = "Button" }: ButtonProps) => {
  const colors = {
    black: "bg-black hover:bg-gray-300 text-white",
    white: "bg-white text-black",
    gray: "bg-gray-300 text-black",
  };

  return (
    <button className={`rounded-xl px-5 py-3 font-bold ${colors[color]}`}>
      {label}
    </button>
  );
};
