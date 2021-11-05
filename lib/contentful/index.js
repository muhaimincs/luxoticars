import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

const previewClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  host: 'preview.contentful.com',
});

const getClient = (preview) => (preview ? previewClient : client)

function parsePost({ fields }) {
  return {
    slug: fields.slug,
    photos: fields.photos,
    interiorPhotos: fields.interiorPhotos
  };
}

function parsePostEntries(entries, cb = parsePost) {
  return entries?.items?.map(cb);
}

export async function getCarPhotos(slug, preview) {
  const entry = await getClient(preview).getEntries({
    content_type: 'car',
    limit: 1,
    'fields.slug[in]': slug,
  });

  return parsePostEntries(entry);
}
