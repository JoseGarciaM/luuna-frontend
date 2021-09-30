import sanityClient from '@sanity/client';

const options = {
  dataset: process.env.SANITY_DATASET_NAME,
  projectId: process.env.SANITY_PROJECT_ID,
  apiVersion: '2021-08-31',
  useCdn: process.env.NODE_ENV === 'production',
};

export default sanityClient(options);