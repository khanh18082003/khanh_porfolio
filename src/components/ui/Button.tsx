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
    "bg-emerald-600 text-white hover:scale-105 hover:bg-emerald-700 hover:shadow-xl focus-visible:outline-emerald-600",
  secondary:
    "border border-slate-300 bg-white text-slate-700 hover:scale-105 hover:shadow-xl hover:border-emerald-600 focus-visible:outline-emerald-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-emerald-500",
};

const baseClasses =
  "inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

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
