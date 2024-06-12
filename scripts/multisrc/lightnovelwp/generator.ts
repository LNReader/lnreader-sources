import { ScrpitGeneratorFunction } from '../generate';
import { LightNovelWPMetadata } from './template';
import list from './sources.json';
import { readFileSync } from 'fs';
import path from 'path';

export const generateAll: ScrpitGeneratorFunction = function (name) {
  return list.map((source: LightNovelWPMetadata) => {
    let filters: any = {};
    try {
      filters = require(`./filters/${source.id}`);
      source.filters = filters.filters;
    } catch (e) {}
    console.log(
      `[${name}]`,
      'Generating:',
      source.id.padEnd(20),
      source.options?.down
        ? '🔽site is down🔽'
        : source.filters
          ? '🔎with filters🔍'
          : '🚫 no filters 🚫',
      source.options?.downSince ? `since: ${source.options?.downSince}` : '',
    );
    return generator(source);
  });
};

const generator = function generator(source: LightNovelWPMetadata) {
  const LightNovelWPTemplate = readFileSync(
    path.join(__dirname, 'template.ts'),
    {
      encoding: 'utf-8',
    },
  );

  const pluginScript = `
${LightNovelWPTemplate.replace(
  '// CustomJS HERE',
  source.options?.customJs || '',
)}
const plugin = new LightNovelWPPlugin(${JSON.stringify(source)});
export default plugin;
    `.trim();

  return {
    lang: source.options?.lang || 'English',
    filename: source.sourceName,
    pluginScript,
    down: source.options?.down || false,
  };
};
