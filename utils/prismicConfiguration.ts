// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc: { type: string; uid: any; }) => {
  if (doc.type === 'page') {
    return `/${doc.uid}`;
  }
  return '/';
};

// -- Route Resolver rules
// Manages the url links to internal Prismic documents two levels deep (optionals)
export const Router: any = {
  routes: [
    {
      type: 'page',
      path: '/:uid',
    },
  ],
};
