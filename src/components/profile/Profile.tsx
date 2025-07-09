/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

import s from "./Profile.module.scss";

import Typography from "../typography/Typography";

import profilePic from "./profile_pic.webp";
import infiniLogo from "./infinilogo.webp";
import valhallaLogo from "./valhalla_logo.webp";
import classNames from "classnames";

const BlueSection = dynamic(
  () => import("@/components/profile/blueSection/BlueSection"),
  {
    ssr: false,
  }
);

const BlueSection2 = dynamic(
  () => import("@/components/profile/blueSection2/BlueSection2"),
  {
    ssr: false,
  }
);

const GreenSection = dynamic(
  () => import("@/components/profile/greenSection/GreenSection"),
  {
    ssr: false,
  }
);

const GreenSection2 = dynamic(
  () => import("@/components/profile/greenSection2/GreenSection2"),
  {
    ssr: false,
  }
);

const Profile = () => {
  const [showExperience, setShowExperience] = useState(false);
  //   const [showExperience2, setShowExperience2] = useState(false);

  useEffect(() => {
    if (!showExperience) {
      setTimeout(() => {
        setShowExperience(true);
      }, 4000);
    }
  }, []);

  return (
    <div className={s.container}>
      <div className={s.content}>
        <Image src={profilePic} alt="profile pic" className={s.profile_pic} />
        <Typography variant="h2" font="primary" className={s.welcome}>
          Welcome!
        </Typography>
        <div className={s.intro_text}>
          <Typography variant="h4" font="primary" className={s.intro}>
            One thing to know about me:
          </Typography>
          <Typography variant="h4" font="primary" className={s.goal}>
            My goal is to either become a top UI developer <br /> or a full
            stack developer.
          </Typography>
          <div className={s.dots}>
            <DotsSVG />
          </div>
          <Typography variant="h2" font="primary" className={s.experience}>
            Experience
          </Typography>
          <div className={s.logos}>
            <button
              className={s.infini_button}
              onClick={() =>
                window.open("https://www.infinigods.com", "_blank")
              }
            >
              <Image src={infiniLogo} alt="infinilogo" className={s.infini} />
            </button>
            <button
              className={s.infini_button}
              onClick={() =>
                window.open("https://www.valhallafoundation.xyz", "_blank")
              }
            >
              <Image
                src={valhallaLogo}
                alt="valhallaLogo"
                className={s.valhalla}
              />
            </button>
          </div>
          <Typography variant="h4" font="primary" className={s.role}>
            While working for InfiniGods, by far the biggest project I worked on
            was their Valhalla Foundation site (
            <a href="https://www.valhallafoundation.xyz" target="_blank">
              https://www.valhallafoundation.xyz
            </a>
            ). I Architected the front-end codebase structure for Valhalla
            Foundations, and was the primary UI developer for the project. I
            created and used my own custom scss functions to make all pages and
            content work for all screen sizes. I implemented the popup
            component, including functionality for having popups on top of
            popups {"(used for staking UI)"}, and added a zoom animation to make
            popups open and close more smoothly. The result was a UI/UX that
            greatly stood out from competitors and that drew the community in
            with excitement {"(the site had tens of thousands of users)."}
          </Typography>
        </div>
        <div className={s.experience_sections}>
          {/* <div className={s.experience_sections_bg} /> */}
          {showExperience && (
            <React.Fragment>
              <BlueSection
                title="STAKING"
                link="https://www.valhallafoundation.xyz/stake"
                text={`
            • Built highly complex UI/UX for user NFT staking (web3 development).\n
            • https://www.valhallafoundation.xyz/stake\n
            • Implemented individual vault staking, multi-vault staking, and max-staking algorithms.\n
            • Engineered dynamic animations based on user's actions (leveling up vault, overclocking vault, deactivating vault).\n
            • Built business logic for user staking stats and created dynamic animations for displaying them.\n
            • Created live staking bonus countdown UI with animations.
            • 70% of $GOD Coin was staked on this UI after token launch.`}
                sectionNumber={1}
              />

              <GreenSection
                title="TOKENOMICS"
                link="https://www.valhallafoundation.xyz/tokenomics"
                text={`• Fully implemented this page from scratch, followed mocks 1:1 and worked with design team to create polished, fluid animations to elevate the user experience.\n
                • https://www.valhallafoundation.xyz/tokenomics\n
                • Line animations, cascading animations, number tick animations, graph animations, and more.\n
                • Updated page as needed before token launch to keep token information up to date.`}
                sectionNumber={1}
              />
              <div className={s.blue_gap}>
                <BlueSection
                  title="COLLECTION"
                  link="https://www.valhallafoundation.xyz/collection"
                  text={`• Fully implemented dynamic, responsive UI, followed mocks 1:1, and polished animations.\n
                • Implemented key business logic for determining user NFT sets (for front end).
                  • https://www.valhallafoundation.xyz/collection\n
                  • Created custom animation for page header.
                  • Added custom animation for image shuffling for when user switches between pass types (see video).
                  • Created custom sticky footer for claiming rewards.
                  • Coded API call for determining claim status of Elder Gods reward.
                  \n`}
                  sectionNumber={2}
                />
              </div>
              <GreenSection
                title="MISSIONS"
                link="https://www.valhallafoundation.xyz/missions"
                text={`
                • Created dynamic, responsive UI for sign in page, multi-wallet connection, all leaderboards, and all tabs.\n
                • https://www.valhallafoundation.xyz/missions.\n
                • Assisted with mission task UI.\n
                • Implemented custom tab buttons.\n
                • Updated missions section UI for end of season claim.\n
                 • Worked in harmony with web team to end up with fully functioning tabs, missions, and reward claim.\n
                `}
                sectionNumber={2}
              />
              <div className={classNames(s.blue_gap, s.experience_break)}>
                <BlueSection
                  title={"HOMEPAGE"}
                  link={"https://www.valhallafoundation.xyz"}
                  text={`
                • Fully implemented this page from scratch, followed mocks 1:1, and added polished animations.\n
                • https://www.valhallafoundation.xyz\n
                • Designed and built a custom video UI that allows users to play/pause a promotional video, with smooth video size and background transitions.\n
                • Implemented an animated vertical carousel for mobile, letting users seamlessly switch focus between stacked content panels with front-to-back transitions.
                \n`}
                  sectionNumber={3}
                />
                <GreenSection
                  title="Legal"
                  link={"https://www.valhallafoundation.xyz/terms-of-service"}
                  text={`
            • Fully implemented these pages from scratch, following mocks 1:1, and accounted for all screen sizes.\n
            • https://www.valhallafoundation.xyz/terms-of-service\n
            • https://www.valhallafoundation.xyz/privacy-policy\n
            • https://www.valhallafoundation.xyz/dao-constitution\n
            • https://www.valhallafoundation.xyz/airdrop-terms\n
            • https://www.valhallafoundation.xyz/airdrop-disclaimer\n
            `}
                  sectionNumber={3}
                />
              </div>
            </React.Fragment>
          )}
        </div>
        <div className={s.logos}>
          <button
            className={s.infini_button}
            onClick={() => window.open("https://www.infinigods.com", "_blank")}
          >
            <Image src={infiniLogo} alt="infinilogo" className={s.infini} />
          </button>
        </div>
        <Typography variant="h4" font="primary" className={s.role}>
          I also did a substantial amount of UI/UX work on InfiniGods&apos;
          corporate website (
          <a href="https://www.infinigods.com" target="_blank">
            https://www.infinigods.com
          </a>
          ). I built their webstore UI, their leaderboard UI, their God Vaults
          UI, and updated the UI on just about every page on their King of
          Destiny mobile marketplace.
        </Typography>
        <div className={s.experience_sections}>
          {showExperience && (
            <React.Fragment>
              <div className={s.first_section}>
                <GreenSection2
                  title="Webstore"
                  link="https://www.infinigods.com/webstore"
                  text={`
                • Built fully dynamic UI for InfiniGods' webstore from scratch, following mocks 1:1.\n
                • https://www.infinigods.com/webstore\n
                • Created dynamic, paginating popup for displaying Destiny Pack information for all pack types listed on store.\n
                • Created dynamic pack opening sequence UI for Destiny Packs (coworker did roulette wheel animation) which accommodated multiple pack types and reward sizes/types.\n
                • Worked with third party component for products while still meeting major UI goals.\n
           `}
                  sectionNumber={1}
                />
              </div>
              <BlueSection2
                title="KOD Leaderboard"
                link="https://www.infinigods.com/kod-leaderboard"
                text={`
                • Built fully dynamic UI for InfiniGods' King of Destiny leaderboard from scratch, following mocks 1:1.\n
                • https://www.infinigods.com/kod-leaderboard\n
                • Leaderboard represented top players from King of Destiny.\n
                • Added gold border animations to informational popups in V2.\n
                • Implemented a dynamic leaderboard UI capable of adapting to varying table schemas across different events.\n
                • Created horizontally scrollable leaderboard for mobile.\n
                 `}
                sectionNumber={2}
              />
              <GreenSection2
                title="God Vaults"
                link="https://www.infinigods.com/vault/claim"
                text={`
                • Built fully dynamic UI for InfiniGods' God Vaults page from scratch, following mocks 1:1.\n
                • https://www.infinigods.com/vault/claim\n
                • Created custom animation for image shuffling for when user switches between pass types (see video).\n
                • Added many polished animations to this page.
                • Implemented user friendly vault claim UI.
                • Added ability to share claim results on twitter with an image from InfiniGods that loads automatically.\n
                \n
                `}
                sectionNumber={2}
              />
              <BlueSection2
                title="KOD Marketplace"
                link="https://www.infinigods.com/kod-marketplace"
                text={`
                • Updated and assisted on UI work for just about every page on King Of Destiny mobile marketplace, following mocks 1:1.\n
                • https://www.infinigods.com/kod-marketplace\n
                • Implemented custom typography with highly accurate strokes and text shadows following mocks.\n
                • Overhauled the marketplace UI to fully adopt $GOD coin as the primary currency, replacing all $USDC references.
                • Implemented back button logic so history stored in url takes users back the way they came to a page.
                `}
                sectionNumber={3}
              />
              <GreenSection2
                title="Mount Olympus"
                link=""
                text={`
                • Built fully dynamic UI for InfiniGods' Mount Olympus page from scratch with polished animations, following mocks 1:1.\n
                • NOTE: page never officially released.\n
                • Achieved containers that horizontally slide rather than scale during certain screen widths (see 1:58 in video). This was preferable for this page.\n
                • Engineered custom image carousel with auto and manual pagination (see 0:45 in video).\n
              `}
                sectionNumber={3}
              />
              <BlueSection2
                title="Swap"
                link=""
                text={`
                    • Customized third party swap UI to match mocks as much as possible.\n
                    • Debugged third party component and worked with web team leader to patch it.\n
                    • Component was fully functional and could swap crypto currencies.\n
                    • NOTE: page never officially released.\n
                    `}
                sectionNumber={4}
              />
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;

const DotsSVG = () => {
  return (
    <svg
      width="59"
      height="6"
      viewBox="0 0 59 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="3.50728" cy="3.21248" r="2.79354" fill="#C6C6C6" />
      <circle cx="55.653" cy="3.21248" r="2.79354" fill="#C6C6C6" />
      <circle cx="12.1983" cy="3.21248" r="2.79354" fill="#C6C6C6" />
      <circle cx="46.9621" cy="3.21248" r="2.79354" fill="#C6C6C6" />
      <circle cx="38.271" cy="3.21248" r="2.79354" fill="#C6C6C6" />
      <circle cx="29.5802" cy="3.21248" r="2.79354" fill="#C6C6C6" />
      <circle cx="20.8892" cy="3.21248" r="2.79354" fill="#C6C6C6" />
    </svg>
  );
};
