import { useState } from 'react';
import { useAuth } from '@lib/context/auth-context';
import { NextImage } from '@components/ui/next-image';
import { CustomIcon } from '@components/ui/custom-icon';
import { Button } from '@components/ui/button';
import { useModal } from '@lib/hooks/useModal';
import { Modal } from '@components/modal/modal';
import { SignInUpModal } from '@components/modal/sign-in-up-modal';

export function LoginMain(): JSX.Element {
  const { signInWithGoogle, signUpWithEmailPassword, signInWithEmailPassword, error } = useAuth();
  const { open, openModal, closeModal } = useModal();

  return (
    <main className='grid lg:grid-cols-[1fr,45vw]'>
      <div className='relative hidden items-center justify-center  lg:flex'>
        <NextImage
          imgClassName='object-cover'
          blurClassName='bg-accent-blue'
          src='/assets/nuke.png'
          alt='Cramer Twitter banner'
          layout='fill'
          useSkeleton
        />
        <i className='absolute'>
          <CustomIcon className='h-96 w-96 text-white' iconName='TwitterIcon' />
        </i>
      </div>
      <div className='flex flex-col items-center justify-between gap-6 p-8 lg:items-start lg:justify-center'>
        <i className='mb-0 self-center lg:mb-10 lg:self-auto'>
          <CustomIcon
            className='-mt-4 h-6 w-6 text-accent-blue lg:h-12 lg:w-12 dark:lg:text-twitter-icon'
            iconName='TwitterIcon'
          />
        </i>
        <div className='flex max-w-xs flex-col gap-4 font-twitter-chirp-extended lg:max-w-none lg:gap-16'>
          <span style={{marginBottom: '-50px', fontSize:'24px'}}>CRAMER TWITTER</span>
          <h1
            className='text-3xl before:content-[""] 
                       lg:text-6xl lg:before:content-["∞_CRYPTO"]'
          />
          <h2 className='hidden text-xl lg:block lg:text-3xl'>
            Join <span style={{color: 'rgb(64, 228, 84)'}}>CT</span> today.
          </h2>
        </div>
        <div className='flex max-w-xs flex-col gap-6 [&_button]:py-2'>
          <div className='grid gap-3 font-bold'>
            <Button
              className='flex justify-center gap-2 border border-light-line-reply font-bold text-light-primary transition
                         hover:bg-[#e6e6e6] focus-visible:bg-[#e6e6e6] active:bg-[#cccccc] dark:border-0 dark:bg-white
                         dark:hover:brightness-90 dark:focus-visible:brightness-90 dark:active:brightness-75'
              onClick={signInWithGoogle}
            >
              <CustomIcon iconName='GoogleIcon' /> Sign in with Google
            </Button>
            {/* <p
              className='inner:custom-underline inner:custom-underline text-center text-xs
                         text-light-secondary inner:text-accent-blue dark:text-dark-secondary'
            >
              By signing up, you agree to the{' '}
              <a
                href='https://twitter.com/tos'
                target='_blank'
                rel='noreferrer'
              >
                Terms of Service
              </a>{' '}
              and{' '}
              <a
                href='https://twitter.com/privacy'
                target='_blank'
                rel='noreferrer'
              >
                Privacy Policy
              </a>
              , including{' '}
              <a
                href='https://help.twitter.com/rules-and-policies/twitter-cookies'
                target='_blank'
                rel='noreferrer'
              >
                Cookie Use
              </a>
              .
            </p> */}
          </div>
          <div className='flex flex-col gap-3'>
            {/* <p className='font-bold'>Already have an account? </p> */}
            {/* <Button
              className='border border-light-line-reply font-bold text-accent-blue hover:bg-accent-blue/10
                         focus-visible:bg-accent-blue/10 focus-visible:!ring-accent-blue/80 active:bg-accent-blue/20
                         dark:border-light-secondary'
              onClick={signInWithGoogle}
            >
              Sign in
            </Button> */}
            <div className='grid w-full grid-cols-[1fr,auto,1fr] items-center gap-2'>
              <i className='border-b border-light-border dark:border-dark-border' />
              <p>or</p>
              <i className='border-b border-light-border dark:border-dark-border' />
            </div>
            <div></div>
            {/* <Button
              onClick={openModal}
              className='bg-accent-green text-white transition hover:brightness-90
                         focus-visible:!ring-accent-blue/80 focus-visible:brightness-90 active:brightness-75'
            >
              Sign in with Email
            </Button> */}
            {/* <Modal
                modalClassName='flex flex-col gap-6 max-w-xl bg-main-background w-full p-8 rounded-2xl h-[270px] max-w-[300px]'
                open={open}
                closeModal={closeModal}
              > */}
              <SignInUpModal 
                signInWithEmailPassword={signInWithEmailPassword} 
                signUpWithEmailPassword={signUpWithEmailPassword}
              />
            {/* </Modal> */}
          </div>
        </div>
      </div>
    </main>
  );
}
