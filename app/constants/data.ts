import { Post } from "../interfaces/post";
import { User } from "../interfaces/user";

const users: User[] = [
  {
    id: "1",
    username: "Antony D.",
    profesion: "Writter",
    bio: "Be better every day",
    email: "hello@antony.com",
    picture: "images/data/user-1.jpg",
  },
  {
    id: "2",
    username: "Don Gato",
    profesion: "Tech Eginnering",
    bio: "Be better every day",
    email: "hello@dongato.com",
    picture: "images/data/user-2.png",
  },
];

export const fakePosts: Post[] = [
  {
    title: "Hyundai Motor Company, often abbreviated to Hyundai Motors",
    description: `In 1998, Hyundai began to overhaul its image in an attempt to establish itself as a world-class brand. Chung Ju Yung transferred leadership of Hyundai Motor to his son, Chung Mong Koo, in 1999.[20] Hyundai's parent company, Hyundai ...`,
    banner: "images/data/user-2.png",
    id: "1",
    viewed: 0,
    likes: 12300,
    publicationDate: "May 01",
    user: users[1],
    category: 'Tech cars',
  },
  {
    title: "Starting your business is easy with Mailchimp",
    description: `Finding the right audience is easier with the right tools. Start with a custom domain, then build a free website to get your business online quickly.`,
    banner: "images/data/user-2.png",
    id: "2",
    likes: 12300,
    publicationDate: "Oct 28",
    viewed: 0,
    user: users[0],
    category: 'Tech cars',
  },
  {
    title: "Help spay & neuter 2000 stray animals in Peru",
    description: `As we mentioned in a previous report we wanted to enter the Acopampa district in the province of Carhuaz, Department of Ancash in Peru. Acopampa is a town in the Andes with a population of roughly 3000 people who live below the poverty.`,
    banner: "images/data/user-2.png",
    id: "3",
    likes: 12300,
    publicationDate: "Jun 06",
    user: users[1],
    viewed: 0,
    category: 'Tech cars',
  },
  {
    title: "18 Best Places to Visit in the World",
    description: `In 1998, Hyundai began to overhaul its image in an attempt to establish itself as a world-class brand. Chung Ju Yung transferred leadership of Hyundai Motor to his son, Chung Mong Koo, in 1999.[20] Hyundai's parent company, Hyundai.`,
    banner: "images/data/user-2.png",
    id: "4",
    likes: 12300,
    publicationDate: "Nov 17",
    viewed: 0,
    user: users[1],
    category: 'Tech cars',
  },
  {
    title: "How To Become a Better Programmer (With Skills To Develop)",
    description: `Programmers use their educational background in writing code to create applications and software programs. Technology is a crucial part of many industries, so having programming.`,
    banner: "images/data/user-2.png",
    viewed: 0,
    id: "5",
    likes: 12300,
    publicationDate: "Feb 23",
    user: users[0],
    category: 'Tech cars',
  },
];
