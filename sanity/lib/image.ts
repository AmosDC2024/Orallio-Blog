import { createImageUrlBuilder } from '@sanity/image-url';
import type { Image } from 'sanity';
import { dataset, projectId } from '../env';

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
});

export const urlForImage = (source: Image | string | null | undefined) => {
  if (!source) return null;
  try {
    return imageBuilder.image(source).auto('format').fit('max');
  } catch (error) {
    console.error('Failed to generate image URL:', error);
    return null;
  }
};

