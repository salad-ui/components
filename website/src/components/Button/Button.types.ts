export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonVariant = 'default' | 'primary';

export interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
  isBlock?: boolean;
  href?: string;
  size: ButtonSize;
  rel?: string;
  target?: string;
  to?: string;
  variant?: ButtonVariant;
}

export interface ButtonBaseProps {
  size: ButtonSize;
  variant: ButtonVariant;
}
