import React from 'react';
import { Nav, INavStyles, INavLinkGroup } from '@fluentui/react';

const navStyles: Partial<INavStyles> = {
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

const iconStylex = {
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

const navLinkGroups: INavLinkGroup[] = [
  {
    links: [
      {
        name: 'Home',
        url: 'http://example.com',
        key: 'key1',
        color: 'white',
        iconProps: {
          iconName: 'HomeSolid',
          styles: iconStylex,
        },
      },
      {
        name: 'Search documents',
        url: 'http://example.com',
        key: 'key3',
        iconProps: {
          iconName: 'DocumentSearch',
          styles: iconStylex,
        },
      },
      {
        name: 'EPT Form',
        url: 'http://msn.com',
        key: 'key4',
        iconProps: {
          iconName: 'MailSchedule',
          styles: iconStylex,
        },
      },
      {
        name: 'Server Request',
        url: 'http://msn.com',
        key: 'key5',
        iconProps: {
          iconName: 'ShopServer',
          styles: iconStylex,
        },
      },
    ],
  },
];

const Sidenav = () => {
  return (
    <Nav
      selectedKey='key1'
      ariaLabel='Nav basic example'
      styles={navStyles}
      groups={navLinkGroups}
    />
  );
};

export default Sidenav;
