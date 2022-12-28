import { Typography } from '@mui/material';
import { DocsThemeConfig } from 'nextra-theme-docs';
import React from 'react';

import { config } from './lib/config';

const docsConfig: DocsThemeConfig = {
  logo: (
    <>
      <img src={`${config.HOST}/images/logo.svg`} alt="Tarrasque Logo" width={50} />
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
};

export default docsConfig;
