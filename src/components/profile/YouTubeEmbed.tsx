type Props = {
  title: string;
  url: string;
};

const getYouTubeId = (url: string) => {
  const parsedUrl = new URL(url);

  if (parsedUrl.hostname === "youtu.be") {
    return parsedUrl.pathname.slice(1);
  }

  return parsedUrl.searchParams.get("v");
};

const YouTubeEmbed = ({ title, url }: Props) => {
  const videoId = getYouTubeId(url);

  if (!videoId) return null;

  return (
    <iframe
      title={title}
      src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`}
      width="100%"
      height="100%"
      allow="accelerometer; autoplay; clipboard-write; compute-pressure; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      referrerPolicy="strict-origin-when-cross-origin"
    />
  );
};

export default YouTubeEmbed;
