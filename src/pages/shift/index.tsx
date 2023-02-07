import Backup from '@/components/shift/backup';
import ShiftFooter from '@/components/shift/footer';

export default function Shift() {
  return (
    <div className='min-h-screen bg-black'>
      <div className='container mx-auto pt-7'>
        <div className='grid grid-cols-2'>
          <div className='bg-black'>
            <p className='pb-4 font-orbitron text-sm text-aka'>
              ON1VERSE // Systems.
            </p>
            <div className='grid grid-cols-1'>
              <div className='bg-black'>
                <div className='text-aka'>
                  <div className='pb-3 font-inconsolata text-xs'>
                    <div>[MainFrame] ssh login detected user: UNKN0WN</div>
                    <div>[MainFrame] BEGIN TRACING USER UNKN0WN</div>
                    <div>[MainFrame] UNKN0WN: ps aux | grep 'm33kasa'</div>
                    <div>[MainFrame] UNKN0WN: kill -9 7777</div>
                    <div>
                      [MainFrame]{' '}
                      <div className='inline text-kiiro'>[WARNING]</div>: pid
                      7777 has exited; attempting restart
                    </div>
                    <div>
                      [MainFrame] UNKN0WN: scp -v shift.sh UNKN0WN@8.8.8.8:Z10N
                      | sudo ./shift.sh
                    </div>
                    <div>[MainFrame] executing /bin/sh /shift.sh</div>
                    <div>
                      [MainFrame]{' '}
                      <div className='inline text-kiiro'>[WARNING]</div>{' '}
                      DETECTED malicious activities
                    </div>
                    <div>
                      [MainFrame]{' '}
                      <div className='inline text-kiiro'>[WARNING]</div>{' '}
                      attempting to kill pid 1111: failed
                    </div>
                    <div>[MainFrame] [ERR0R] ACTIVATING DEFENSE PROTOCOL</div>
                  </div>
                </div>
              </div>
            </div>
            <div className=''>
              <p className='pt-8 font-orbitron text-[32px] font-semibold text-aka'>
                SYST3M CORRUPTED
              </p>
            </div>
          </div>
          <div className='bg-black'>
            <Backup />
          </div>
        </div>
      </div>
      <ShiftFooter />
    </div>
  );
}
