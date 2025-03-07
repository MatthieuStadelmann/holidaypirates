import styled, { css } from "styled-components";
import type { ButtonVariant, ExtendedButtonProps } from "../types/button";

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

const StyledButton = styled.button<{ $variant: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: ${({ theme }) => `${theme.spacing.medium} ${theme.spacing.large}`};
  font-size: ${({ theme }) => theme.fontSize.medium};

  ${(props) => getVariantStyles(props.$variant as ButtonVariant)}
`;

const Button = ({ $variant, ...props }: ExtendedButtonProps) => {
  return <StyledButton $variant={$variant} {...props} />;
};

export default Button;
