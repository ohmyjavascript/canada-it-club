import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { Hero } from  'components';
export const RichText = ({ raw, references }) => {
  const map = {};
  references.forEach((reference) => {
    map[reference.contentful_id] = reference;
  });
  const options = {
    renderNode: {
     
      [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        
        const data = map[node.data.target.sys.id];
       
        switch (data.__typename) {
          case 'ContentfulHeroBanner':
            return (
              <Hero
                heading={data.heading}
                subHeading={data.subHeading}
                backgroundImage={data.backgroundImage.gatsbyImageData}
              />
            );
          default:
            return null;
        }
      },
    },
  };
  return <div>{documentToReactComponents(JSON.parse(raw), options)}</div>;
};
