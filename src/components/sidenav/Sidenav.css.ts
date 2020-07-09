import { INavStyles } from '@fluentui/react';

export const iconStylex = {
  root: {
    color: 'white',
    fontSize: 25,
  },
  //   rootHovered: {
  //     color: 'darkRed',
  //     selectors: {
  //       ':hover': {
  //         selectors: {
  //           '.ms-Button-icon': { color: 'darkRed' },
  //         },
  //       },
  //     },
  //   },
};

export const navStyles: Partial<INavStyles> = {
  root: {
    width: 208,
    height: '100vh',
    backgroundColor: '#3b3a39',
    boxSizing: 'border-box',
  },
  link: {
    color: 'white',
    selectors: {
      ':hover': {
        color: '#0078d4',
      },
    },
  },
  linkText: {
    // selectors: {
    //   ':active': {
    //     color: 'white',
    //   },
    // },
  },
};
