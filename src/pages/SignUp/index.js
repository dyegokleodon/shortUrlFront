import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signUpRequest } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('Campo obrigatório'),
  email: Yup.string().email('Insira um email válido').required('Campo obrigatório'),
  password: Yup.string().min(6, 'Senha com no minimo 6 caracteres').required('Campo obrigatório'),
});

export default function SignUp() {
  const dispatch = useDispatch();
  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="seu email" />
        <Input name="password" type="password" placeholder="sua senha" />

        <button type="submit">Criar conta</button>
        <Link to="/">Página de Login</Link>
      </Form>
    </>
  );
}
