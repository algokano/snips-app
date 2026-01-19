export interface HomeResponse {
  userUuid: string;
  country: string;
  data: HomeData;
}

export interface HomeData {
  components: HomeComponent[];
  settings: {
    search: boolean;
  };
  pageType: 'Home';
}

export type HomeComponentType =
  | 'LARGE_COVERS'
  | 'REGULAR_COVERS'
  | 'MORE_TITLES';

export interface HomeComponent {
  id: string;
  componentType: HomeComponentType;
  sectionTitle: string;
  titles: HomeTitle[];
  link: string;
}

export interface HomeTitle {
  id: string;
  nameEn: string;
  tags: string[];
  posterUrl: string;
  thumbnailUrl?: string;
  duration: number;
  releaseDate: string;
  genres: string[];
  snipsCount: number;
  badges: unknown[];

  // optional media fields
  playbackUrl?: string;
  videoPlaybackUrl?: string;
  heroCoverUrl?: string;
  trailerUrl?: string;
}
