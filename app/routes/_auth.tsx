// pathless route file for the auth route

import authStyles from '~/styles/auth.css';
import ExpensesHeader from '~/components/navigation/ExpensesHeader';
import { Outlet } from '@remix-run/react';

export default function Auth() {  
  return (
    <>
      <ExpensesHeader />
      <Outlet />
    </>
  );
}