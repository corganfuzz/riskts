import React from 'react';
import { Nav, INavLinkGroup } from '@fluentui/react';
import { iconStylex, navStyles } from './Sidenav.css';

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
