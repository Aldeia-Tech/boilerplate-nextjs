import path from 'path';

const config = {
  '*.{js,jsx,ts,tsx}': [
    (filenames) =>
      `next lint --fix --file ${filenames
        .map((f) => path.relative(process.cwd(), f))
        .join(' --file ')}`,
    'prettier --write',
    'vitest related --run --passWithNoTests',
  ],

  '*.{md,json,css}': 'prettier --write',
};

export default config;
