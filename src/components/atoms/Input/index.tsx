import React from 'react';
import clsx from 'clsx';
import styles from './index.module.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return <input ref={ref} className={clsx(styles.input, className)} {...props} />;
});

export { Input };
