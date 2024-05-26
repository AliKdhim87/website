import { gql } from './index.graphql';

export const GET_TOC_GROQ_QUERY = gql(`
*[_type == 'post' && slug.current == $slug] {
  "toc": body[length(style) == 2 && string::startsWith(style, "h")] {
   'level': style,
   'id': _key,
   'textContent': children[0].text
  }
}[0]
`);
