# ReactM3 Theme

> This project is an extension from the original repository created by [ZakAlbert](https://github.com/ZakAlbert)

This project has an [npm library](https://www.npmjs.com/package/@react-m3/m3) for [Material 3](https://m3.material.io/) theme, so you can add to your project and play-around this theme
created on the top of `@mui/material`.

```shell
npm i @react-m3/m3
```

## Apply this custom theme in your project

```typescript jsx
import { useMemo } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { getPalette, getTheme } from '@react-m3/m3';

const color = "#6750a4";

export const MyCustomTheme = () => {
  
  const m3Theme = useMemo(() => {
    const palette = getPalette(color);
    return getTheme('light', palette);
  }, [color]);

  return (
    <ThemeProvider theme={m3Theme}>
      <CssBaseline enableColorScheme/>
      {/* Call your app component here */}
      <MyApp/>
    </ThemeProvider>
  );
}
```

> [!NOTE]  
> Open the next [StackBlitz Example.](https://stackblitz.com/edit/react-m3-theme?file=src%2FApp.tsx)


