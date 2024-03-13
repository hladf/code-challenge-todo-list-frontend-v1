import React from 'react';
import * as S from 'style';
const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ ...props }, ref) => {
  return <S.Button ref={ref} {...props} />;
});

Button.displayName = 'Button';

export default Button;
