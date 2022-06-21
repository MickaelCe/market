import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'fbw64gmk',
    dataset: 'production',
    apiVersion: '2022-06-18',
    useCdn: true,
    token: process.env.SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);