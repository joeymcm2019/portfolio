import React, { useMemo } from "react";

import s from "./Typography.module.scss";
import classNames from "classnames";

type Props = {
  variant: "h1Large" | "h1" | "h2" | "h3" | "h4" | "h5";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
  font: "primary" | "secondary" | "tertiary" | "fourth";
  className?: string;
};

const Typography = ({
  variant,
  children,
  font = "primary",
  className,
}: Props) => {
  const fontClass = useMemo(() => {
    switch (font) {
      case "primary":
        return s.primary_font;
      case "secondary":
        return s.secondary_font;
      case "tertiary":
        return s.tertiary_font;
      case "fourth":
        return s.fourth_font;
      default:
        return s.primary_font;
    }
  }, [font]);

  const classes = classNames(s[variant], fontClass, className);

  switch (variant) {
    case "h1Large":
      return <h1 className={classNames(classes, s.h1_Large)}>{children}</h1>;
    case "h1":
      return <h1 className={classes}>{children}</h1>;
    case "h2":
      return <h2 className={classes}>{children}</h2>;
    case "h3":
      return <h3 className={classes}>{children}</h3>;
    case "h4":
      return <h4 className={classes}>{children}</h4>;
    case "h5":
      return <h5 className={classes}>{children}</h5>;
  }
};

export default Typography;
