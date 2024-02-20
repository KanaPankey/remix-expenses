import authStyles from '~/styles/auth.css';
import AuthForm from '~/components/auth/AuthForm';
import MainHeader from '~/components/navigation/MainHeader';

export default function Auth() {  
  return (
    <>
      <MainHeader />
      <AuthForm />
    </>
  );
}

export function links() {
  return [{rel: 'stylesheet', href: authStyles}];
}