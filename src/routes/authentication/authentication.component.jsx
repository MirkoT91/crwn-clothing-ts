import { useNavigate } from 'react-router-dom';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

import { AlreadyAccount, AuthenticationContainer } from './authentication.styles';

const Authentication = () => {

  const navigate = useNavigate();

  const goToSignUpForm = () => {
    navigate('/sign-up-form');
  }

  return (
    <AuthenticationContainer>
      <SignInForm />
      <AlreadyAccount onClick={goToSignUpForm}>Don't have an account?</AlreadyAccount>
    </AuthenticationContainer>
  );
};

export default Authentication;