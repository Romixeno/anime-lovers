"use server";

import AnimeCard, { AnimeProps } from "@/components/AnimeCard";

export const fetchOneAnime = async (id: string) => {
  try {
    const response = await fetch(`https://shikimori.one/api/animes/${id}`);

    const data = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getTopAnime = async (page: number) => {
  try {
    const response = await fetch(
      `https://api.jikan.moe/v4/top/anime?page=${page}&limit=8`
    );

    const data = await response.json();

    return data.data.map((anime: AnimeProps, index: number) => (
      <AnimeCard anime={anime} index={index} key={index} />
    ));
  } catch (error) {
    console.log(error);
  }
};
