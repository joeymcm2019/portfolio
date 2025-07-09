import React from "react";

import s from "./Topnavbar.module.scss";

const TopNavBar = () => {
  return (
    <div className={s.container}>
      <div className={s.circle} />
      <div className={s.block_layer} />
    </div>
  );
};

export default TopNavBar;
