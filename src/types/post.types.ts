export type Post = {
  id: number;
  title: string;
  userId: number;
  body: string;
  comments: Comment[];
  user: User;
};

export type Comment = {
  id: number;
  name: string;
  body: string;
  email: string;
};

export type User = {
  id: number;
  name: string;
};
