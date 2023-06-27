import React, { ButtonHTMLAttributes } from "react";
import s from "./Style.module.css";
import { cn } from "../functions";

interface ButtonPropss extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "secondary";
  sizes?: "sm" | "md" | "lg";
  Component?: React.ElementType;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonPropss>(
  (props, ref) => {
    const {
      variant = "primary",
      sizes = "md",
      Component = "button",
      ...rest
    } = props;

    const rootClassName = cn(
      s.buttonRoot,
      variant === "primary" && s.primary,
      variant === "secondary" && s.secondary,
      variant === "ghost" && s.ghost,
      sizes === "md" && s.md,
      props.className || ""
    );

    return (
      <Component ref={ref} {...rest} className={rootClassName}>
        {props.children}
      </Component>
    );
  }
);

Button.displayName = "Button";

export default Button;
