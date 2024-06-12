import { FilterTypes, Filters } from '../../../libs/filterInputs';
import { ScrpitGeneratorFunction } from '../generate';
import list from './sources.json';
import { MadaraMetadata } from './template';
import { readFileSync } from 'fs';
import path from 'path';

export const generateAll: ScrpitGeneratorFunction = function (name) {
  return list.map((metadata: MadaraMetadata) => {
    let filters: any = {};
    try {
      filters = require(`./filters/${metadata.id}`);
      metadata.filters = filters.filters;
    } catch (e) {}
    console.log(
      `[${name}]`,
      'Generating:',
      metadata.id.padEnd(20),
      metadata.options?.down
        ? '🔽site is down🔽'
        : metadata.filters
          ? '🔎with filters🔍'
          : '🚫 no filters 🚫',
      metadata.options?.downSince
        ? `since: ${metadata.options?.downSince}`
        : '',
    );
    return generator(metadata);
  });
};

const generator = function generator(metadata: MadaraMetadata) {
  const madaraTemplate = readFileSync(path.join(__dirname, 'template.ts'), {
    encoding: 'utf-8',
  });

  const pluginScript = `
${madaraTemplate}
const plugin = new MadaraPlugin(${JSON.stringify(metadata)});
export default plugin;
    `.trim();
  return {
    lang: metadata.options?.lang || 'English',
    filename: metadata.sourceName,
    pluginScript,
    down: metadata.options?.down,
  };
};
