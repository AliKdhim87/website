import wretch from 'wretch';

import { Container, Grid } from '@/components/reusable';
import { NotfoundSVG } from '@/components/reusable/assets/404';
import { PageHeader } from '@/components/slices';
import { uuidv4 } from '@/utils';
import { GetNotFoundPageQuery } from 'generated/graphql';
import { GET_NOT_FOUND_PAGE } from 'queries/index.graphql';

const fetchData = async () => {
  try {
    const response = await wretch(process.env.SCHEMA_URL).post({
      query: GET_NOT_FOUND_PAGE,
      variables: { slug: 'page-not-found' },
    });
    const { data } = await response.json<{ data: GetNotFoundPageQuery }>();
    return { page: data.allRoute[0].page };
  } catch (error) {
    throw new Error('Error fetching site settings');
  }
};

const Custom404 = async () => {
  const { page } = await fetchData();
  return (
    <Container>
      <Grid container justifyContent="center">
        <Grid sm={12} md={8} xs={12} className="text-color">
          <NotfoundSVG />
        </Grid>
      </Grid>
      {page?.content?.map((component) => {
        if (component?.__typename === 'PageHeader') {
          // TODO make this nicer
          return (
            <PageHeader
              title={component.title}
              body={component.body}
              cta={component.cta}
              backgroundColor="transparent"
              titleDistancedBottom
              key={uuidv4()}
            />
          );
        }
        return null;
      })}
    </Container>
  );
};
export default Custom404;
