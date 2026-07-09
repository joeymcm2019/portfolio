import { useState } from "react";

import s from "./YouTubeEmbed.module.scss";

type Props = {
  title: string;
  url: string;
};

const getYouTubeId = (url: string) => {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?/]+)/);
  return match?.[1] ?? "";
};

export const YouTubeEmbed = ({ title, url }: Props) => {
  const [loaded, setLoaded] = useState(false);
  const videoId = getYouTubeId(url);
  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  if (!videoId) return null;

  if (!loaded) {
    return (
      <button
        type="button"
        onClick={() => setLoaded(true)}
        aria-label={`Play ${title}`}
        className={`${s.placeholder} youtube-embed-surface`}
      >
        <img src={thumbnail} alt={title} loading="lazy" />
        <span className={s.playButton}>▶</span>
      </button>
    );
  }

  return (
    <iframe
      title={title}
      src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
      width="100%"
      height="100%"
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; compute-pressure; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className={`${s.frame} youtube-embed-surface`}
      referrerPolicy="strict-origin-when-cross-origin"
    />
  );
};

export default YouTubeEmbed;
