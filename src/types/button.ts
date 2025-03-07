export type ButtonVariant = "primary" | "secondary";
export interface ButtonProps {
  $variant: ButtonVariant;
}

export interface ExtendedButtonProps
  extends ButtonProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {}
