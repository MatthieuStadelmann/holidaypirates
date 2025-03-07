import styled, { css } from "styled-components";

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
}

const getVariantStyles = (variant: ButtonVariant = "primary") => {
  switch (variant) {
    case "primary":
      return css`
        background: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.white};
        border: none;

        &:hover {
          background: ${({ theme }) => theme.colors.primaryHover};
        }
      `;
  }
};

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: ${({ theme }) => `${theme.spacing.medium} ${theme.spacing.large}`};
  font-size: ${({ theme }) => theme.fontSize.medium};

  ${(props) => getVariantStyles(props.variant)}
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}
`;

const Button = ({ children, ...props }: ButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
