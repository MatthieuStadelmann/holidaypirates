export interface ButtonProps {
  variant: "primary" | "secondary";
}

export interface ExtendedButtonProps
  extends ButtonProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {}
