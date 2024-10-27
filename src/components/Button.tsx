import clsx from "clsx";

interface ButtonProps {
  className?: string;
  label?: string;
}

export const Button = ({
  className = "bg-black hover:bg-gray-300 text-white",
  label = "Button",
}: ButtonProps) => {
  return (
    <button className={clsx("rounded-xl px-5 py-3 font-bold", className)}>
      {label}
    </button>
  );
};
