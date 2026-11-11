import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import s from "./Topnavbar.module.scss";

import Typography from "../typography/Typography";
import { DirectionalFade } from "../animation/DirectionalFade";

import linkedIN from "./linked.png";

const TopNavBar = () => {
  const [workOpen, setWorkOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const workRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const closeWork = () => {
    setWorkOpen(false);
    setProjectsOpen(false);
  };

  useEffect(() => {
    const handlePointer = (event: PointerEvent) => {
      if (!workRef.current?.contains(event.target as Node)) closeWork();
    };
    document.addEventListener("pointerdown", handlePointer);
    return () => document.removeEventListener("pointerdown", handlePointer);
  }, []);

  const chevron = (open: boolean) => (
    <svg
      className={`${s.chevron} ${open ? s.chevron_open : ""}`}
      width="16" height="16" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
    >
      <path d="m6 15 6-6 6 6" />
    </svg>
  );

  return (
    <div className={s.container}>
      <DirectionalFade
        up
        startOnMount
        delay={3}
        className={s.outer}
      >
        <div className={s.buttons_container}>
          <div
            className={s.work_menu}
            ref={workRef}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) closeWork();
            }}
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                event.preventDefault();
                if (projectsOpen) {
                  setProjectsOpen(false);
                  document.getElementById("personal-projects-trigger")?.focus();
                } else {
                  closeWork();
                  triggerRef.current?.focus();
                }
              }
            }}
          >
            <button
              ref={triggerRef}
              type="button"
              className={s.left_link}
              aria-expanded={workOpen}
              aria-controls="my-work-links"
              onClick={() => {
                setWorkOpen(!workOpen);
                setProjectsOpen(false);
              }}
            >
              <Typography variant="h2" font="primary">My Work</Typography>
              {chevron(workOpen)}
            </button>
            <div
              id="my-work-links"
              className={`${s.dropdown} ${workOpen ? s.expanded : ""}`}
              inert={!workOpen}
              aria-hidden={!workOpen}
            >
              <div className={s.dropdown_clip}>
                <div className={s.dropdown_panel}>
                  <a href="/mcmahon_resume.pdf" download="McMahon_resume" onClick={closeWork}>
                    Resume
                  </a>
                  <a href="https://github.com/joeymcm2019" target="_blank" rel="noopener noreferrer" onClick={closeWork}>
                    GitHub
                  </a>
                  <button
                    id="personal-projects-trigger"
                    type="button"
                    aria-expanded={projectsOpen}
                    aria-controls="personal-project-links"
                    onClick={() => setProjectsOpen(!projectsOpen)}
                  >
                    Personal Projects {chevron(projectsOpen)}
                  </button>
                  <div
                    id="personal-project-links"
                    className={`${s.project_links} ${projectsOpen ? s.expanded : ""}`}
                    inert={!projectsOpen}
                    aria-hidden={!projectsOpen}
                  >
                    <div className={s.dropdown_clip}>
                      <a href="https://satellite-communications-gateway.vercel.app/" target="_blank" rel="noopener noreferrer" onClick={closeWork}>
                        Satellite Communications Gateway
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            className={s.right_link}
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/joseph-mcmahon-950836149/",
                "_blank",
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
