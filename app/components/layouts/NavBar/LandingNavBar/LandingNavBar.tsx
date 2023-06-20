'use client';

import './LandingNavBar.scss';
import { Logo } from '../Logo/Logo';
import { useRef, useState } from 'react';
import { Container } from '../../Container/Container';
import { Button } from '@/app/components/common/Button/Button';

const navigation = [
  {
    name: 'Popular',
    href: '/',
  },
  {
    name: 'Write',
    href: '/new-post',
  },
]

export const LandingNavBar = () => {
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [stickyHeader, setStickyHeader] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  return (
    <>
      <header ref={headerRef} className="header">
        <Container>
          <div className="flex items-center justify-between">
            <Logo isDark={stickyHeader} />
            <nav className="flex items-center gap-5">
              {navigation.map(({ name, href }) => {
                return (
                  <a href={href} key={name} className={stickyHeader ? 'text-black' : 'text-white'}>
                    {name}
                  </a>
                )
              })}
              <button
                onClick={() => setShowSignInModal(true)}
                className={stickyHeader ? 'text-black' : 'text-white'}
              >
                Sign in
              </button>
              <Button
                style={stickyHeader ? 'dark' : 'normal'}
                onClick={() => setShowSignUpModal(true)}
              >
                Get started
              </Button>
            </nav>
          </div>
        </Container>
      </header>
    </>
  )
}