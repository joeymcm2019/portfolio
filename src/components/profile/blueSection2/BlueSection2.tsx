import React, { useState, useEffect } from "react";
import Image from "next/image";
import ReactPlayer from "react-player";
import { useMediaQuery } from "react-responsive";

import s from "./BlueSection2.module.scss";

import Typography from "@/components/typography/Typography";
import { DirectionalFade } from "@/components/animation/DirectionalFade";

import infiniLogo from "../infinigods.webp";
import classNames from "classnames";

type Props = {
  title: string;
  text: string;
  sectionNumber: number;
  link: string;
};

const BlueSection = ({ title, text, link, sectionNumber }: Props) => {
  const [animationStarted, setAnimationStarted] = useState(false);
  const [toggle, setToggle] = useState(0);
  const [startSwapAnimation, setStartSwapAnimation] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 1033.98px)" });

  const youtubeUrls = [
    "https://www.youtube.com/watch?v=ZfbNIOu7edE",
    "https://www.youtube.com/watch?v=tFuCbIRczBo",
    "https://www.youtube.com/watch?v=gSPoLkdCbHw",
  ];

  useEffect(() => {
    if (startSwapAnimation) {
      setTimeout(() => {
        setStartSwapAnimation(false);
      }, 175);
    }
  }, [startSwapAnimation]);

  return (
    <DirectionalFade up onStart={() => setAnimationStarted(true)}>
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.blue_container}>
            <div className={s.blue_background}>
              {isMobile ? <MobileBG /> : <UltraWideBG />}
            </div>
            <div className={s.shadow}>
              {isMobile ? <MobileBG /> : <UltraWideBG />}
            </div>
            <div
              className={classNames(
                s.gold_line,
                animationStarted && s.gold_line_active
              )}
            >
              {isMobile ? <MobileGold /> : <GoldLineUW />}
            </div>

            <div
              className={classNames(
                s.video_and_text,
                sectionNumber === 1 && s.video_and_text_adjust
              )}
            >
              <div className={s.left}>
                {sectionNumber === 1 ? (
                  <div className={s.top}>
                    <div
                      className={classNames(
                        !startSwapAnimation &&
                          (toggle === 0 ? s.front_video : s.back_video),
                        startSwapAnimation &&
                          toggle === 1 &&
                          s.front_video_midpoint,
                        startSwapAnimation &&
                          toggle === 0 &&
                          s.back_video_midpoint
                      )}
                    >
                      <ReactPlayer
                        url={"https://youtu.be/I_di5XDw1fU"}
                        controls
                        width="100%"
                        height="100%"
                      />
                    </div>
                    <div
                      className={classNames(
                        !startSwapAnimation &&
                          (toggle === 1 ? s.front_video : s.back_video),
                        startSwapAnimation &&
                          toggle === 1 &&
                          s.back_video_midpoint,
                        startSwapAnimation &&
                          toggle === 0 &&
                          s.front_video_midpoint
                      )}
                    >
                      <ReactPlayer
                        url={"https://www.youtube.com/watch?v=RB1OTPWRNzs"}
                        controls
                        width="100%"
                        height="100%"
                      />
                    </div>
                  </div>
                ) : (
                  <div className={s.normal}>
                    <ReactPlayer
                      url={`${youtubeUrls[sectionNumber - 2]}`}
                      controls
                      width="100%"
                      height="100%"
                    />
                  </div>
                )}
                {sectionNumber === 1 && (
                  <div className={s.buttons}>
                    <button
                      className={toggle === 0 ? s.active : s.unselected}
                      onClick={() => {
                        setStartSwapAnimation(true);
                        setToggle(0);
                      }}
                    >
                      <Typography font="primary" variant="h4">
                        Max Staking
                      </Typography>
                    </button>
                    <button
                      className={toggle === 1 ? s.active : s.unselected}
                      onClick={() => {
                        setStartSwapAnimation(true);
                        setToggle(1);
                      }}
                    >
                      <Typography font="primary" variant="h4">
                        Manual Staking
                      </Typography>
                    </button>
                  </div>
                )}
              </div>

              <div className={s.right}>
                <div className={s.top}>
                  <button
                    onClick={() => {
                      if (link) {
                        window.open(link, "_blank");
                      }
                    }}
                    disabled={!link}
                  >
                    <Image
                      src={infiniLogo}
                      alt="infinilogo"
                      className={s.infini}
                    />
                    <Typography variant="h2" font="fourth" className={s.title}>
                      {title}
                    </Typography>
                  </button>
                </div>
                <div className={s.bottom}>
                  <Typography variant="h5" font="primary" className={s.text}>
                    {text.split("\n").map((line, index) =>
                      line.includes("https://") ? (
                        <a
                          href={line.replace("            • ", "")}
                          target="_blank"
                          key={index}
                        >
                          {line}
                        </a>
                      ) : (
                        <p key={index}>{line}</p>
                      )
                    )}
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DirectionalFade>
  );
};

export default BlueSection;

const UltraWideBG = () => {
  return (
    <svg
      width="1917"
      height="1038"
      viewBox="0 0 1917 1038"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.657988 2.44807C0.691078 62.7085 29.0697 187.569 90.4185 186.517C167.149 185.201 933.124 186.517 946.125 186.517C956.526 186.517 980.176 199.982 990.701 206.715H1800.49C1800.49 206.715 1916.66 202.981 1916.66 259.034V810.667H1049.46L946.125 841.564H90.4185C11.0017 841.564 0.657959 972.146 0.657959 1037.98V2.34261C0.65797 0.464376 0.657979 0.553176 0.657988 2.44807Z"
        fill="#00213A"
      />
    </svg>
  );
};

const GoldLineUW = () => {
  return (
    <svg
      width="1916"
      height="1037"
      viewBox="0 0 1916 1037"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.89723e-05 1.46858C0.0331189 61.729 28.4118 186.589 89.7605 185.537C166.491 184.222 932.466 185.537 945.468 185.537C955.869 185.537 979.518 199.003 990.043 205.736H1799.84C1799.84 205.736 1916 202.002 1916 258.054V809.688H1048.8L945.468 840.585H89.7605C10.3437 840.585 0 971.166 0 1037V1.36312C1.06564e-05 -0.515116 2.02899e-05 -0.426316 2.89723e-05 1.46858Z"
        fill="url(#paint0_linear_259_8)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_259_8"
          x1="111.725"
          y1="1040.31"
          x2="1810.83"
          y2="1040.31"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#7D6629" />
          <stop offset="0.15" stop-color="#E9BB45" />
          <stop offset="0.5" stop-color="#7D6629" />
          <stop offset="0.85" stop-color="#E9BB45" />
          <stop offset="1" stop-color="#7D6629" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const MobileBG = () => {
  return (
    <svg
      width="1034"
      height="1463"
      viewBox="0 0 1034 1463"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.0200195 0C0.0200195 58 14.571 82 47.7643 82H509.114C514.721 82 528.12 85.8553 533.795 93.3447H970.389C970.51 93.3368 1033.02 89.2511 1033.02 151.544V442H1032.6L1032.6 1344.98L1009.72 1352.63L910.238 1387H86.4198C22.4772 1387 8.5957 1396.48 0.00270807 1462.48C-0.00305634 1455.48 0.00250777 1449.98 0.00270807 1462.48L-0.000488281 432.5H0.0200195V0Z"
        fill="#00213A"
      />
    </svg>
  );
};

const MobileGold = () => {
  return (
    <svg
      width="1034"
      height="1463"
      viewBox="0 0 1034 1463"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.0205078 0C0.0205078 58 14.5715 82 47.7647 82H509.114C514.722 82 528.121 85.8553 533.795 93.3447H970.39C970.51 93.3368 1033.02 89.2511 1033.02 151.544V442H1032.6L1032.6 1344.98L1009.72 1352.63L910.239 1387H86.4203C22.4776 1387 8.59619 1396.48 0.00319635 1462.48C-0.00256806 1455.48 0.00299606 1449.98 0.00319635 1462.48L0 432.5H0.0205078V0Z"
        fill="url(#paint0_linear_387_62)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_387_62"
          x1="60.237"
          y1="1462.48"
          x2="976.317"
          y2="1462.48"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#7D6629" />
          <stop offset="0.15" stop-color="#E9BB45" />
          <stop offset="0.5" stop-color="#7D6629" />
          <stop offset="0.85" stop-color="#E9BB45" />
          <stop offset="1" stop-color="#7D6629" />
        </linearGradient>
      </defs>
    </svg>
  );
};
