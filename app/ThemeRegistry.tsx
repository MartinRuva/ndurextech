'use client';

import * as React from 'react';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { useServerInsertedHTML } from 'next/navigation';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';

const cache = createCache({ key: 'css', prepend: true });

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [emotionCache] = React.useState(cache);

  useServerInsertedHTML(() => (
    <style
      data-emotion={`${emotionCache.key} ${Object.keys(
        emotionCache.inserted
      ).join(' ')}`}
      dangerouslySetInnerHTML={{
        __html: Object.values(emotionCache.inserted).join(' '),
      }}
    />
  ));

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}