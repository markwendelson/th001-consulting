import React from 'react';

import { Icon } from '@chakra-ui/react';
import {
  // MdBarChart,
  // MdPerson,
  MdHome,
  MdPeople,
  MdSettings,
  MdOutlineSupportAgent,
  MdDataset,
  // MdLock,
  // MdOutlineShoppingCart,
} from 'react-icons/md';

// Admin Imports
import MainDashboard from 'views/admin/default';
import Transactions from 'views/admin/transactions';
import Agents from 'views/admin/agents';
// import NFTMarketplace from 'views/admin/marketplace';
// import Profile from 'views/admin/profile';
// import DataTables from 'views/admin/dataTables';

// Auth Imports
// import SignInCentered from 'views/auth/signIn';

const routes = [
  {
    name: 'Dashboard',
    layout: '/admin',
    path: '/dashboard',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <MainDashboard />,
  },
  {
    name: 'Transactions',
    layout: '/admin',
    path: '/transactions',
    icon: <Icon as={MdDataset} width="20px" height="20px" color="inherit" />,
    component: <Transactions />,
  },
  {
    name: 'Agents',
    layout: '/admin',
    path: '/agents',
    icon: <Icon as={MdOutlineSupportAgent} width="20px" height="20px" color="inherit" />,
    component: <Agents />,
  },
  // {
  //   name: 'Users',
  //   layout: '/admin',
  //   path: '/users',
  //   icon: <Icon as={MdPeople} width="20px" height="20px" color="inherit" />,
  //   component: <MainDashboard />,
  // },
  // {
  //   name: 'Settings',
  //   layout: '/admin',
  //   path: '/settings',
  //   icon: <Icon as={MdSettings} width="20px" height="20px" color="inherit" />,
  //   component: <MainDashboard />,
  // },
  // {
  //   name: 'NFT Marketplace',
  //   layout: '/admin',
  //   path: '/nft-marketplace',
  //   icon: (
  //     <Icon
  //       as={MdOutlineShoppingCart}
  //       width="20px"
  //       height="20px"
  //       color="inherit"
  //     />
  //   ),
  //   component: <NFTMarketplace />,
  //   secondary: true,
  // },
  // {
  //   name: 'Data Tables',
  //   layout: '/admin',
  //   icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
  //   path: '/data-tables',
  //   component: <DataTables />,
  // },
  // {
  //   name: 'Profile',
  //   layout: '/admin',
  //   path: '/profile',
  //   icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
  //   component: <Profile />,
  // },
  // {
  //   name: 'Sign In',
  //   layout: '/auth',
  //   path: '/sign-in',
  //   icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
  //   component: <SignInCentered />,
  // },
];

export default routes;
