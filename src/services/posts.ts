import Client from '../clients/client';
import { GET_POSTS, QUERY_PARAMS } from '../clients/urlConstants';
import { ApiResponse } from '../types/client.types';
import { Post } from '../types/post.types';

async function getPosts(): Promise<ApiResponse<Post[]>> {
  return await Client.get<Post[]>(`${GET_POSTS}${QUERY_PARAMS}`);
}

async function getPost(id: string): Promise<ApiResponse<Post>> {
  return await Client.get<Post>(`${GET_POSTS}/${id}${QUERY_PARAMS}`);
}

export default {
  getPosts,
  getPost
};
