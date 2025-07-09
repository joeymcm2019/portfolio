/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { type Variants, motion } from "framer-motion";
//import { useMediaQuery } from 'react-responsive';

export const fadeContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

export const fadeItem: Variants = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0 },
};

export const HighlightsAnim = {
  LeftSlide: {
    hidden: {
      opacity: 0,
      x: -50,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.75, // Adjust the duration to your preference
      },
    },
  },
  RightSlide: {
    hidden: {
      opacity: 0,
      x: 50,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.75, // Adjust the duration to your preference
      },
    },
  },
};

export const BetterExperienceUp: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05,
      duration: 1, // Adjust the duration to your preference
    },
  },
};

export const dirs = ({
  up,
  down,
  left,
  right,
  still,
  delay,
  duration,
}: any) => {
  switch (true) {
    case up:
      return {
        hidden: {
          opacity: 0,
          y: 50,
        },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            delay,
            duration, // Adjust the duration to your preference
          },
        },
      };
    case down:
      return {
        hidden: { opacity: 0, y: 50 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            delay,
            duration, // Adjust the duration to your preference
          },
        },
      };
    case left:
      return {
        hidden: { opacity: 0, x: 50 },
        show: {
          opacity: 1,
          x: 0,
          transition: {
            delay,
            duration, // Adjust the duration to your preference
          },
        },
      };
    case right:
      return {
        hidden: { opacity: 0, x: -50 },
        show: {
          opacity: 1,
          x: 0,
          transition: {
            delay,
            duration, // Adjust the duration to your preference
          },
        },
      };
    case still:
      return {
        hidden: {
          opacity: 0,
        },
        show: {
          opacity: 1,
          transition: {
            delay,
            duration,
          },
        },
      };
    default:
      return {
        hidden: {
          opacity: 1,
        },
        show: {
          opacity: 1,
        },
      };
  }
};

type Props = {
  className?: string;
  up?: boolean;
  down?: boolean;
  left?: boolean;
  right?: boolean;
  still?: boolean;
  sm_up?: boolean;
  sm_down?: boolean;
  sm_left?: boolean;
  sm_right?: boolean;
  //sm_none?: boolean;
  delay?: number;
  instant?: boolean;
  onStart?: () => void;
  start?: boolean;
  duration?: number;
  children?: any;
  onEnd?: () => void;
  variant?: {
    hidden: { opacity: number; x?: number; y?: number };
    show: {
      opacity: number;
      x?: number | string;
      y?: number | string;
      transition?: { duration: number };
    };
  } | null;
};

export const DirectionalFade = (props: Props) => {
  const {
    className = "",
    //sm_none,
    delay = 0,
    duration = 1,
    instant = false,
    onStart,
    start,
    children,
    onEnd,
    variant,
  } = props;

  // const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const checkDir = (dir: "up" | "down" | "left" | "right" | "still") => {
    // if (isMobile) {
    //     if (sm_none == true) return false;
    //     return props[`sm_${dir}`] || props[dir];
    // }
    return props[dir];
  };

  const direction = React.useMemo(() => {
    return dirs({
      up: checkDir("up"),
      down: checkDir("down"),
      left: checkDir("left"),
      right: checkDir("right"),
      still: checkDir("still"),
      delay,
      duration,
    });
  }, []);

  return (
    <motion.div
      variants={variant ? variant : direction}
      initial={"hidden"}
      whileInView="show"
      onAnimationStart={onStart}
      onAnimationComplete={() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        onEnd && onEnd();
      }}
      {...(start && { animate: "show" })}
      viewport={{ once: true, amount: instant ? 0 : 0.5 }}
      {...{ className }}
    >
      {children}
    </motion.div>
  );
};
