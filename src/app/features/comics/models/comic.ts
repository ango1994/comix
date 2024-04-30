export interface Comic {
  backdrop: string;
  poster: string;
  title: string;
  year: number;
  watched: number;
  appearsInLists: number;
  liked: number;
  ratings: [{ user: string; rating: number }];
  writers: { writerName: string }[];
  reviews: { user: string; review: string }[];
}
