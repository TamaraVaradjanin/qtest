export type Post = {
  id: number;
  title: string;
  username: string;
  comments?: Comment[];
};

export type Comment = {
  id: number;
  body: string;
};
