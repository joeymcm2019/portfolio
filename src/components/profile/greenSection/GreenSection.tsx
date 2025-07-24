import React, { useState } from "react";
import Image from "next/image";
import ReactPlayer from "react-player";
import { useMediaQuery } from "react-responsive";

import s from "./GreenSection.module.scss";

import Typography from "@/components/typography/Typography";
import { DirectionalFade } from "@/components/animation/DirectionalFade";

import infiniLogo from "../infinigods.webp";
import vhLogo from "../valhalla_logo.webp";
import classNames from "classnames";

type Props = {
  title: string;
  text: string;
  sectionNumber: number;
  link: string;
};

const GreenSection = ({ title, text, link, sectionNumber }: Props) => {
  const [animationStarted, setAnimationStarted] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 1033.98px)" });

  const video_urls = [
    "https://www.youtube.com/watch?v=BGaHxgRMxXU",
    "https://www.youtube.com/watch?v=1lOWRM9vcNY",
    "https://www.youtube.com/watch?v=yZuaAxJMrms",
  ];

  return (
    <DirectionalFade up onStart={() => setAnimationStarted(true)}>
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.blue_container}>
            <div className={s.blue_background}>
              {isMobile ? <MobileBG /> : <UltraWideBG />}
            </div>
            <div
              className={classNames(
                s.gold_line,
                animationStarted && s.gold_line_active
              )}
            >
              {isMobile ? <GoldMobile /> : <GoldLineUW />}
            </div>

            <div className={s.video_and_text}>
              <div className={s.left}>
                <div className={s.top}>
                  <button onClick={() => window.open(link, "_blank")}>
                    <Image
                      src={infiniLogo}
                      alt="infinilogo"
                      className={s.infini}
                    />
                    <Image
                      src={vhLogo}
                      alt="valhalla logo"
                      className={s.valhalla}
                    />
                    <Typography
                      variant="h2"
                      font="tertiary"
                      className={s.title}
                    >
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
              <div className={s.right}>
                <div className={s.normal}>
                  <ReactPlayer
                    url={video_urls[sectionNumber - 1]}
                    controls
                    width="100%"
                    height="100%"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DirectionalFade>
  );
};

export default GreenSection;

const UltraWideBG = () => {
  return (
    <svg
      width="1916"
      height="924"
      viewBox="0 0 1916 924"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1915.95 10.3874C1915.98 -1.85383 1916 -3.75805 1916 7.261C1916 8.30478 1915.98 9.3472 1915.95 10.3874C1915.75 86.9917 1915.01 568.406 1915.01 820.879H969.917L926.859 805.906H91.6317C33.0082 810.551 0.0606939 877.403 0.0210877 921.33C-0.0269021 974.553 0.0220239 214.434 0.0220535 213.974H108.98L144.262 202.623H602.94L631.166 213.974H789.939L969.917 157.137H1715.63C1814.2 157.137 1913.38 89.0504 1915.95 10.3874Z"
        fill="#023A00"
      />
    </svg>
  );
};

const GoldLineUW = () => {
  return (
    <svg
      width="1916"
      height="924"
      viewBox="0 0 1916 924"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1915.95 10.3874C1915.98 -1.85383 1916 -3.75805 1916 7.261C1916 8.30478 1915.98 9.3472 1915.95 10.3874C1915.75 86.9917 1915.01 568.406 1915.01 820.879H969.917L926.859 805.906H91.6317C33.0082 810.551 0.0606939 877.403 0.0210877 921.33C-0.0269021 974.553 0.0220239 214.434 0.0220535 213.974H108.98L144.262 202.623H602.94L631.166 213.974H789.939L969.917 157.137H1715.63C1814.2 157.137 1913.38 89.0504 1915.95 10.3874Z"
        fill="url(#paint0_linear_266_16)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_266_16"
          x1="111.725"
          y1="924"
          x2="1810.83"
          y2="924"
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

const GoldMobile = () => {
  return (
    <svg
      width="1033"
      height="1462"
      viewBox="0 0 1033 1462"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1033 0C1032.93 45.8475 1032.77 194.507 1032.64 387.214C1032.59 494.927 1032.63 1263.03 1032.64 1370.18L923.024 1402H49.5989C18.0095 1406.64 0.255608 1417.09 0.234266 1461C0.22082 1488.66 0.0377721 656.109 0.00586631 442.889H6.93961e-06C0.000391912 425.997 0.000578319 408.823 0.000983502 391.634C0.000887934 387.161 -9.14801e-05 382.757 6.93961e-06 378.427H0.00196006C0.00514775 244.162 0.00781362 113.157 0.00781944 112.989H58.7535L77.7765 101.642H325.077L340.295 112.989H425.9L522.937 96.131H924.994C978.142 96.131 1031.61 78.6389 1033 0Z"
        fill="url(#paint0_linear_388_64)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_388_64"
          x1="60.236"
          y1="1461.67"
          x2="976.3"
          y2="1461.67"
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
      width="1033"
      height="1462"
      viewBox="0 0 1033 1462"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1033 0C1032.93 45.8475 1032.77 194.507 1032.64 387.214C1032.59 494.927 1032.63 1263.03 1032.64 1370.18L923.024 1402H49.5989C18.0095 1406.64 0.255608 1417.09 0.234266 1461C0.22082 1488.66 0.0377721 656.109 0.00586631 442.889H6.93961e-06C0.000391912 425.997 0.000578319 408.823 0.000983502 391.634C0.000887934 387.161 -9.14801e-05 382.757 6.93961e-06 378.427H0.00196006C0.00514775 244.162 0.00781362 113.157 0.00781944 112.989H58.7535L77.7765 101.642H325.077L340.295 112.989H425.9L522.937 96.131H924.994C978.142 96.131 1031.61 78.6389 1033 0Z"
        fill="#003B06"
      />
    </svg>
  );
};
