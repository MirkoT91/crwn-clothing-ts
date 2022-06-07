import { useNavigate } from 'react-router-dom';
import SignInForm from '../../components/sign-in-form/sign-in-form.component.tsx';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component.tsx';

import { AlreadyAccount, AuthenticationContainer } from './authentication.styles';

const Authentication = () => {

  const navigate = useNavigate();


  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;