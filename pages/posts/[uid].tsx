import { GetStaticProps } from 'next';
import Image from 'next/image';
import { GetPostQuery, Post } from '../../generated/graphql';
import { GET_ALL_POSTS_UID, GET_POST } from '../../queries/index.graphql';
import { client } from '../../utils/apollo-client';

interface PostProps {
  post: Post;
}

const Post = ({ post }: PostProps) => {
  return (
    <div>
      Blog post
      <Image
        src={post.image.url}
        alt=""
        width={post.image.dimensions.width}
        height={post.image.dimensions.height}
      />
    </div>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const { data } = await client.query({ query: GET_ALL_POSTS_UID });
  const paths = data.allPosts.edges.map(
    (post: { node: { _meta: { uid: string } } }) => ({
      params: { uid: post.node._meta.uid },
    })
  );

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { uid: string };
}) => {
  const { data } = await client.query<GetPostQuery>({
    query: GET_POST,
    variables: { uid: params.uid },
  });

  return { props: data };
};
