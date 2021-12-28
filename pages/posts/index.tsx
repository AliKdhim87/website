import { GET_ALL_POSTS } from '../../queries/index.graphql';
import { client } from '../../utils/apollo-client';
import { RichText } from 'prismic-reactjs';
import {
  GetAllPostsQuery,
  PostConnectionConnection,
} from '../../generated/graphql';

const Heading: React.FC = ({ children }) => {
  return <h1 className="heading">{children}</h1>;
};

interface PostsProps {
  allPosts?: PostConnectionConnection;
}

const Posts = ({ allPosts }: PostsProps) => {
  if (allPosts?.edges && allPosts?.edges.length > 0) {
    return allPosts?.edges.map((edge) => (
      <div key={edge?.node._meta.uid}>
        <RichText render={edge?.node.title} Component={Heading} />
      </div>
    ));
  } else {
    return <h1>Sorry, currently there is no posts</h1>;
  }
};
export default Posts;

export const getStaticProps = async () => {
  const { data } = await client.query<GetAllPostsQuery>({
    query: GET_ALL_POSTS,
  });

  return {
    props: data,
  };
};
