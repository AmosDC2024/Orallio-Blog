import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './sanity/schemas';
import { apiVersion, dataset, projectId } from './sanity/env';

export default defineConfig({
  basePath: '/studio',
  name: 'Orallio_Studio',
  title: 'Orallio Group Content Studio',
  projectId,
  dataset,
  schema: {
    types: schemaTypes,
  },
  plugins: [structureTool()],
});
