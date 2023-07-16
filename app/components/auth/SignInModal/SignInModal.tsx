'use client'

import React from 'react';
import './SignInModal.scss';
import { GoogleButton } from '../GoogleButton';
import { useForm } from 'react-hook-form';
import { Modal } from '../../common/Modal/Modal';
import { SignInForm } from '@/app/interfaces/auth';
import { Button } from '../../common/Button/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import InputError from '../../form/InputError/InputError';
import InputGroup from '../../form/InputGroup/InputGroup';
import { ModalTitle } from '../../common/Modal/ModalTitle';
import { TextField } from '../../form/TextField/TextField';
import { SignInSchema } from '@/app/schema/auth/SignInSchema';
import PasswordField from '../../form/PasswordField/PasswordField';

interface SignInModalProps {
  show: boolean;
  onClose: () => void;
}

export const SignInModal: React.FC<SignInModalProps> = ({ show, onClose }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<SignInForm>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(SignInSchema),
  })

  const onSubmitSignIn = (values: SignInForm) => {
    console.log('values', values);
  }

  return (
    <Modal show={show} onClose={onClose}>
      <ModalTitle>Welcome back!</ModalTitle>
      <form onSubmit={handleSubmit(onSubmitSignIn)}>
        <div className="signin-form__container">
          <InputGroup label="Email" htmlFor="email">
            <TextField
              id="email"
              placeholder="example@example.com"
              hasError={!!errors.email?.message}
              {...register('email')}
            />
            <InputError error={errors.email?.message} />
          </InputGroup>
          <InputGroup label="Password" htmlFor="password">
            <PasswordField
              id="password"
              type="password"
              hasError={!!errors.password?.message}
              placeholder="hFg4093%67%m"
              {...register('password')}
            />
            <InputError error={errors.password?.message} />
          </InputGroup>
        </div>

        <Button type="submit" className="w-full mt-4">
          Sign In
        </Button>

        <GoogleButton />

        <p className="text-sm mt-8 text-center">
          No have an account? <a href="/" className="text-primary">Sign up</a>
        </p>
      </form>
    </Modal>
  );
}
