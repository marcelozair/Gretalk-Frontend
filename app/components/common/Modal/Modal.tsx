'use client'

import { createPortal } from 'react-dom';
import React, { ReactNode, useEffect, useRef } from 'react';

interface ModalProps {
  children: ReactNode;
  show: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ children, show, onClose }) => {

  const modalRef = useRef<HTMLDivElement>(null);

  const clickOutSite = (e: Event) => {
    if (!modalRef?.current?.contains(e.target as Node | null)) {
      onClose();
    }
  };

  useEffect(() => {
    if (show) document.addEventListener('click', clickOutSite);
    else document.removeEventListener('click', clickOutSite);

    if (show) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }

    return () => document.removeEventListener('click', clickOutSite);
  })

  return (
    show ? (
      createPortal(
        <div
          className="fixed top-0 left-0 w-screen h-screen backdrop-blur-sm bg-gray-200/[0.4] z-50 flex items-center justify-center"
        >
          <div
            ref={modalRef}
            className="bg-white p-6 shadow-md rounded-md relative w-[500px] h-auto z-[60] px-16 py-14"
          >
            <button onClick={onClose}>
              <img src="images/icons/xmark-solid.svg" className="absolute top-3 right-3 w-5 h-5" />
            </button>
            {children}
          </div>
        </div>,
        document.querySelector('main') || document.body,
      )
    ) : null
  );
}