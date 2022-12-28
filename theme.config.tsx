import { Typography } from '@mui/material';
import Image from 'next/image';
import { DocsThemeConfig } from 'nextra-theme-docs';
import React from 'react';

import { Color } from './lib/colors';

const docsConfig: DocsThemeConfig = {
  logo: (
    <>
      <Image src="https://tarrasque.app/images/logo.svg" alt="Tarrasque Logo" width={50} height={50} />
      <Typography variant="h5" color="inherit" align="center" sx={{ ml: 1 }}>
        Tarrasque App
      </Typography>
    </>
  ),
  footer: {
    text: <>&copy; 2020-{new Date().getFullYear()} Tronite Ltd. All rights reserved.</>,
  },
  project: {
    link: 'https://github.com/tarrasqueapp/tarrasqueapp',
  },
  chat: {
    link: 'https://tarrasque.app/discord',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s - Tarrasque App Documentation',
    };
  },
  docsRepositoryBase: 'https://github.com/tarrasqueapp/docs',
  head: (
    <>
      {/* Must */}
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

      <meta name="description" content="Tarrasque App" />
      <meta name="keywords" content="Tarrasque App" />

      {/* Don't index on staging environment */}
      {/* {!EnvironmentUtils.isProduction() && <meta name="robots" content="noindex,nofollow" />} */}
      {/* TODO: Change on launch */}
      <meta name="robots" content="noindex,nofollow" />

      {/* Android */}
      <meta name="theme-color" content={Color.Brown} />
      <meta name="mobile-web-app-capable" content="yes" />

      {/* iOS */}
      <meta name="apple-mobile-web-app-title" content="Tarrasque App" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      {/* Manifest */}
      <link href="/manifest.json" rel="manifest" crossOrigin="use-credentials" />

      {/* Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://tarrasque.app/docs" />
      <meta property="og:title" content="Tarrasque App Documentation" />
      <meta property="og:description" content="Tarrasque App Documentation" />
      <meta property="og:image" content="https://tarrasque.app/images/icons/apple-splash-1334-750.jpg" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://tarrasque.app/docs" />
      <meta property="twitter:title" content="Tarrasque App Documentation" />
      <meta property="twitter:description" content="Tarrasque App Documentation" />
      <meta property="twitter:image" content="https://tarrasque.app/images/icons/apple-splash-1334-750.jpg" />

      {/* Favicon */}
      <link rel="icon" type="image/png" sizes="196x196" href="https://tarrasque.app/images/icons/favicon-196.png" />
      <link rel="apple-touch-icon" href="https://tarrasque.app/images/icons/apple-icon-180.png" />

      {/* Splash */}
      <link
        rel="apple-touch-startup-image"
        href="https://tarrasque.app/images/icons/apple-splash-2048-2732.jpg"
        media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href="https://tarrasque.app/images/icons/apple-splash-2732-2048.jpg"
        media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href="https://tarrasque.app/images/icons/apple-splash-1668-2388.jpg"
        media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href="https://tarrasque.app/images/icons/apple-splash-2388-1668.jpg"
        media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href="https://tarrasque.app/images/icons/apple-splash-1536-2048.jpg"
        media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href="https://tarrasque.app/images/icons/apple-splash-2048-1536.jpg"
        media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href="https://tarrasque.app/images/icons/apple-splash-1668-2224.jpg"
        media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href="https://tarrasque.app/images/icons/apple-splash-2224-1668.jpg"
        media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href="https://tarrasque.app/images/icons/apple-splash-1620-2160.jpg"
        media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href="https://tarrasque.app/images/icons/apple-splash-2160-1620.jpg"
        media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href="https://tarrasque.app/images/icons/apple-splash-1290-2796.jpg"
        media="(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href="https://tarrasque.app/images/icons/apple-splash-2796-1290.jpg"
        media="(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href="https://tarrasque.app/images/icons/apple-splash-1179-2556.jpg"
        media="(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href="https://tarrasque.app/images/icons/apple-splash-2556-1179.jpg"
        media="(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href="https://tarrasque.app/images/icons/apple-splash-1284-2778.jpg"
        media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href="https://tarrasque.app/images/icons/apple-splash-2778-1284.jpg"
        media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href="https://tarrasque.app/images/icons/apple-splash-1170-2532.jpg"
        media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href="https://tarrasque.app/images/icons/apple-splash-2532-1170.jpg"
        media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href="https://tarrasque.app/images/icons/apple-splash-1125-2436.jpg"
        media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href="https://tarrasque.app/images/icons/apple-splash-2436-1125.jpg"
        media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href="https://tarrasque.app/images/icons/apple-splash-1242-2688.jpg"
        media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href="https://tarrasque.app/images/icons/apple-splash-2688-1242.jpg"
        media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href="https://tarrasque.app/images/icons/apple-splash-828-1792.jpg"
        media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href="https://tarrasque.app/images/icons/apple-splash-1792-828.jpg"
        media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href="https://tarrasque.app/images/icons/apple-splash-1242-2208.jpg"
        media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href="https://tarrasque.app/images/icons/apple-splash-2208-1242.jpg"
        media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href="https://tarrasque.app/images/icons/apple-splash-750-1334.jpg"
        media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href="https://tarrasque.app/images/icons/apple-splash-1334-750.jpg"
        media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href="https://tarrasque.app/images/icons/apple-splash-640-1136.jpg"
        media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href="https://tarrasque.app/images/icons/apple-splash-1136-640.jpg"
        media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
      />
    </>
  ),
};

export default docsConfig;
