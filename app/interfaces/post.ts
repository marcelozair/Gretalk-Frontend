import { User } from './user';

export interface Post {
  id: string;
  user: User;
  likes: number;
  viewed: number;
  title: string;
  banner: string;
  category: string;
  description: string;
  publicationDate: string;
}