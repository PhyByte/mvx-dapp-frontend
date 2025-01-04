import { Text, VStack } from '@chakra-ui/react';

import BaseModal from '@/components/Bases/BaseModal';
import useDappStore from '@/store';

import MultiversxLogin from './components/MultiversxLogin';

const LoginModal = () => {
  const [ authToken] = useDappStore((state) => [
    state.user.auth.authToken,
  ]);

  const [isOpen, setIsOpen] = useDappStore((state) => [
    state.ux.loginModal.loginModalIsOpen,
    state.ux.loginModal.setLoginModalIsOpen,
  ]);

  console.log('isOpen', isOpen);
  return (
    <>
    
    <BaseModal title={'Login'} isOpen={isOpen} setIsOpen={setIsOpen}>
      <VStack gap="4">
        <Text>Choose your Wallet login method:</Text>

        <MultiversxLogin
          token={authToken.value}
          callbackRoute={'/dashboard'}
          logoutRoute={'/unlock'}
        />
      </VStack>
    </BaseModal>
    </>
  );
};

export default LoginModal;
