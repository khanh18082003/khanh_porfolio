import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

interface BaseButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

interface ButtonAsButtonProps
  extends
    BaseButtonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {
  as?: "button";
}

interface ButtonAsAnchorProps
  extends
    BaseButtonProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> {
  as: "a";
}

type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 focus-visible:outline-blue-600 dark:bg-blue-500 dark:hover:bg-blue-600",
  secondary:
    "border border-slate-200 bg-white/80 text-slate-700 hover:border-blue-400 hover:text-blue-600 focus-visible:outline-blue-600 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-300 dark:hover:border-blue-500 dark:hover:text-blue-400",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

function Button(props: ButtonProps) {
  const { children, className = "", variant = "primary" } = props;
  const classes =
    `${baseClasses} ${variantClasses[variant]} ${className}`.trim();

  if (props.as === "a") {
    const { as, ...anchorProps } = props;
    return (
      <a {...anchorProps} className={classes}>
        {children}
      </a>
    );
  }

  const { as, type = "button", ...buttonProps } = props;

  return (
    <button {...buttonProps} className={classes} type={type}>
      {children}
    </button>
  );
}

export default Button;
