export type Difficulty = 'Beginner-Friendly' | 'Intermediate' | 'Advanced';

export interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: Difficulty;
  badge: string;
}