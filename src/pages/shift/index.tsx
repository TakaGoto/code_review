import Image from 'next/image';
import React from 'react';
import Typewriter from 'typewriter-effect';

import Backup from '@/components/shift/backup';
import ShiftFooter from '@/components/shift/footer';
import SystemCorrupted from '@/components/shift/systemCorrupted';

export default function Shift() {
  const [isTypingDone, setIsTypingDown] = React.useState(false);
  const [isSystemsTypingDone, setSystemsTypingDone] = React.useState(false);

  return (
    <div className='min-h-screen bg-black'>
      {isTypingDone ? <Backup /> : <div></div>}
      <div className='container mx-auto pt-7'>
        <div className='grid grid-cols-1'>
          <div className='bg-black'>
            <p className='pb-4 font-orbitron text-sm text-aka'>
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
                    <Typewriter
                      onInit={(typewriter) => {
                        typewriter
                          .changeDelay(1)
                          .callFunction((state) => {
                            state.elements.cursor.style.display = 'none';
                          })
                          .typeString(
                            '[MainFrame] ssh login detected user: UNKN0WN'
                          )
                          .typeString('<br>')
                          .typeString('[MainFrame] BEGIN TRACING USER UNKN0WN')
                          .typeString('<br>')
                          .typeString(
                            '[MainFrame] UNKN0WN: ps aux | grep "m33kasa"'
                          )
                          .typeString('<br>')
                          .typeString('[MainFrame] UNKN0WN: kill -9 7777')
                          .typeString('<br>')
                          .typeString(
                            '[MainFrame]<div class="text-kiiro inline">[WARNING]</div>: pid 7777 has exited; attempting restart'
                          )
                          .typeString('<br>')
                          .typeString(
                            '[MainFrame] UNKN0WN: scp -v shift.sh UNKN0WN@8.8.8.8:Z10N | sudo ./shift.sh'
                          )
                          .typeString('<br>')
                          .typeString('[MainFrame] executing /bin/sh /shift.sh')
                          .typeString('<br>')
                          .typeString(
                            '[MainFrame]<div class="text-kiiro inline">[WARNING]</div> DETECTED malicious activities'
                          )
                          .typeString('<br>')
                          .typeString(
                            '[MainFrame]<div class="text-kiiro inline">[WARNING]</div> attempting to kill pid 1111: failed'
                          )
                          .typeString('<br>')
                          .typeString(
                            '[MainFrame][ERR0R] ACTIVATING DEFENSE PROTOCOL'
                          )
                          .callFunction(() => {
                            setSystemsTypingDone(true);
                          })
                          .start();
                      }}
                    />
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
