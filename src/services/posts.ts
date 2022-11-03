import Client from '../clients/client';
import { GET_POSTS } from '../clients/urlConstants';
import { ApiResponse } from '../types/client.types';
import { Post } from '../types/post.types';

async function getPosts(): Promise<ApiResponse<Post[]>> {
  return await Client.get<Post[]>(GET_POSTS);
}

export default {
  getPosts
};
