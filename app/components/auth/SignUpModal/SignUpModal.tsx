import React from 'react';
import './SignUpModal.scss';
import { useForm } from 'react-hook-form';
import { GoogleButton } from '../GoogleButton';
import { Modal } from '../../common/Modal/Modal';
import { SignUpForm } from '@/app/interfaces/auth';
import { Button } from '../../common/Button/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import InputGroup from '../../form/InputGroup/InputGroup';
import InputError from '../../form/InputError/InputError';
import { ModalTitle } from '../../common/Modal/ModalTitle';
import { TextField } from '../../form/TextField/TextField';
import { SignUpSchema } from '@/app/schema/auth/SignUpSchema';
import PasswordField from '../../form/PasswordField/PasswordField';

interface SignUpModalProps {
  show: boolean;
  onClose: () => void;
}

export const SignUpModal: React.FC<SignUpModalProps> = ({ show, onClose }) => {

  const { register, handleSubmit, formState: { errors } } = useForm<SignUpForm>({
    mode: 'onChange',
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
    resolver: yupResolver(SignUpSchema),
  })

  const onSubmitSignUp = (values: SignUpForm) => {
    console.log('values', values);
  }


  return (
    <Modal show={show} onClose={onClose}>
      <ModalTitle>Register your account</ModalTitle>
      <form onSubmit={handleSubmit(onSubmitSignUp)}>
        <div className="signup-form__container">
          <InputGroup label="Nick name" htmlFor="username">
            <TextField
              id="username"
              placeholder="Jhon Due"
              hasError={!!errors.username?.message}
              {...register('username')}
            />
            <InputError error={errors.username?.message} />
          </InputGroup>
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
          Create account
        </Button>

        <GoogleButton />

        <p className="text-sm mt-8 text-center">
          Have an account? <a href="/" className="text-primary">Sign In</a>
        </p>
      </form>
    </Modal>
  );
}