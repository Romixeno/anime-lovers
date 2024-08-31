import Image from "next/image";
import { MotionDiv } from "@/components/MotionDiv";

type ImageObject = {
  jpg: {
    image_url: string;
    small_image_url: string;
    large_image_url: string;
  };
  webp: {
    image_url: string;
    small_image_url: string;
    large_image_url: string;
  };
};

type TrailerObject = {
  youtube_id: string;
  url: string;
  embed_url: string;
};

type Title = {
  type: string;
  title: string;
};

type AiredObject = {
  from: string;
  to: string | null;
  prop: {
    from: {
      day: number | null;
      month: number | null;
      year: number | null;
    };
    to: {
      day: number | null;
      month: number | null;
      year: number | null;
    };
  };
  string: string;
};

export type AnimeProps = {
  mal_id: number;
  url: string;
  images: ImageObject;
  trailer: TrailerObject;
  approved: boolean;
  titles: Title[];
  title: string;
  title_english: string | null;
  title_japanese: string;
  title_synonyms: string[];
  type: "TV" | "Movie" | "OVA" | "ONA" | "Special" | "Music";
  source: string;
  episodes: number;
  status: "Finished Airing" | "Currently Airing" | "Not Yet Aired";
  airing: boolean;
  aired: AiredObject;
  score: number;
};

interface Prop {
  anime: AnimeProps;
  index: number;
}

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function AnimeCard({ anime, index }: Prop) {
  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: index * 0.25,
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="max-w-sm rounded relative w-full"
    >
      <div className="relative w-full h-[37vh]">
        <Image
          src={anime.images?.jpg.image_url}
          alt={anime.title}
          fill
          className="rounded-xl"
        />
      </div>
      <div className="py-4 flex flex-col gap-3">
        <div className="flex justify-between items-center gap-1">
          <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
            {anime.title}
          </h2>
          <div className="py-1 px-2 bg-[#161921] rounded-sm">
            <p className="text-white text-sm font-bold capitalize">
              {anime.type}
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="./episodes.svg"
              alt="episodes"
              width={20}
              height={20}
              className="object-contain"
            />
            <p className="text-base text-white font-bold">
              {anime.episodes || anime.aired.from}
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="./star.svg"
              alt="star"
              width={18}
              height={18}
              className="object-contain"
            />
            <p className="text-base font-bold text-[#FFAD49]">{anime.score}</p>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}

export default AnimeCard;
