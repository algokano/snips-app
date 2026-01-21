export interface FeedResponse {
  feedTitles: FeedTitle[];
  total: number;
  currentPage: number;
  totalPages: number;
  nextPage: number | null;
}

export interface FeedTitle {
  id: string;
  name_en: string;
  captions_en: string;
  video_playback_url: string;
  poster_url: string;
  link: string;
  rank: number;
}
