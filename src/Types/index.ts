export interface TReview {
  id?: number;
  name: string;
  location: string;
  image: string; // URL or local path
  review: string;
  rating: number; // e.g., 4.5, 5
}

export interface TWhyChooseUs {
  id: number;
  title: string;
  description: string;
  icon: string; // emoji or icon class name
}