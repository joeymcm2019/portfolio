import React, { useMemo } from "react";
import Image from "next/image";

import s from "./Topnavbar.module.scss";

import Typography from "../typography/Typography";
import { DirectionalFade } from "../animation/DirectionalFade";

import linkedIN from "./linked.png";

const TopNavBar = () => {
  const isSafari = useMemo(() => {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  }, []);

  return (
    <div className={s.container}>
      <DirectionalFade up delay={isSafari ? 3 : 2} className={s.outer}>
        <div className={s.buttons_container}>
          <button className={s.left_link}>
            <Typography variant="h2" font="primary">
              <a href="/mcmahon_resume.pdf" download="McMahon_resume">
                Resume
              </a>
            </Typography>
          </button>

          <button
            className={s.right_link}
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/joseph-mcmahon-950836149/",
                "_blank"
              );
            }}
          >
            <Image src={linkedIN} alt="linkedIn" />
          </button>
        </div>
      </DirectionalFade>
      <div className={s.circle} />
      <div className={s.block_layer} />
    </div>
  );
};

export default TopNavBar;
