import React from 'react';
import { Text } from 'react-native';

// import { Container } from './styles';

import Background from '~/components/Background';
import TIput from '~/components/Input';
import Button from '~/components/Button';

export default function SignIn() {
  return (
    <Background>
      <TIput
        style={{ marginTop: 30 }}
        icon="call"
        placeholder="Digite seu nome"
      />
      <Button>Entrar</Button>
    </Background>
  );
}
