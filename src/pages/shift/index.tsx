import Image from 'next/image';
import React from 'react';

import styles from './index.module.css';

import Backup from '@/components/shift/backup';
import ShiftFooter from '@/components/shift/footer';
import SystemCorrupted from '@/components/shift/systemCorrupted';

export default function Shift() {
  const [isTypingDone, setIsTypingDown] = React.useState(false);
  const [isSystemsTypingDone, setSystemsTypingDone] = React.useState(false);

  return (
    <div className='min-h-screen w-fit bg-black md:w-full lg:w-full xl:w-full 2xl:w-full'>
      {isTypingDone ? <Backup /> : <div></div>}
      <div className='container mx-auto pt-7 pl-3'>
        <div className='grid grid-cols-1'>
          <div className='bg-black'>
            <p
              className={`pb-4 font-orbitron text-sm text-aka ${styles.text_glitch}`}
            >
              <Image
                src='/images/0n1_logo_red.png'
                width='24'
                height='24'
                alt=''
                className='float-left pr-1'
              />
              ON1VERSE // Systems.
            </p>
            <div className='grid grid-cols-1'>
              <div className='bg-black'>
                <div className='text-aka'>
                  <div className='pb-3 font-inconsolata text-xs'>
                    <div className={`${styles.line_1}`}>
                      [MainFrame] ssh login detected user: UNKN0WN
                    </div>
                    <div className={`${styles.line_2}`}>
                      [MainFrame] BEGIN TRACING USER UNKN0WN
                    </div>
                    <div className={`${styles.line_3}`}>
                      [MainFrame] UNKN0WN: ps aux | grep "m33kasa"
                    </div>
                    <div className={`${styles.line_4}`}>
                      [MainFrame]
                      <div className='inline text-kiiro'> [WARNING]</div>: pid
                      7777 has exited; attempting restart
                    </div>
                    <div className={`${styles.line_5}`}>
                      [MainFrame] UNKN0WN: scp -v shift.sh UNKN0WN@8.8.8.8:Z10N
                      | sudo ./shift.sh
                    </div>
                    <div className={`${styles.line_6}`}>
                      [MainFrame] executing /bin/sh /shift.sh
                    </div>
                    <div className={`${styles.line_7}`}>
                      [MainFrame]
                      <div className='inline text-kiiro'> [WARNING]</div>{' '}
                      DETECTED malicious activities
                    </div>
                    <div className={`${styles.line_8}`}>
                      [MainFrame]
                      <div className='inline text-kiiro'> [WARNING]</div>{' '}
                      attempting to kill pid 1111: failed
                    </div>
                    <div
                      className={`${styles.line_9}`}
                      onAnimationEnd={() => setSystemsTypingDone(true)}
                    >
                      [MainFrame][ERR0R] ACTIVATING DEFENSE PROTOCOL
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=''>
              {isSystemsTypingDone ? (
                <SystemCorrupted setIsTypingDone={setIsTypingDown} />
              ) : (
                <div></div>
              )}
              {/* <DefenseProtocol /> */}
            </div>
          </div>
        </div>
      </div>
      <ShiftFooter />
    </div>
  );
}
