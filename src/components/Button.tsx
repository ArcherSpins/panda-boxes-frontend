import clsx from "clsx";

interface ButtonProps {
  className?: string;
  label?: string;
  size?: "m" | "s";
}

export const Button = ({
  className = "bg-black hover:bg-gray-300 text-white",
  label = "Button",
  size = "m",
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        "rounded-xl px-5 font-bold",
        size === "m" ? "py-3" : "py-2",
        className
      )}
    >
      {label}
    </button>
  );
};
