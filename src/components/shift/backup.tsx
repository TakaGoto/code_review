/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';

import styles from './backup.module.css';

import Seo from '@/components/Seo';

export default function Backup() {
  return (
    <div className='fixed inset-0 h-full w-full overflow-y-auto bg-black bg-opacity-50 sm:bg-opacity-50 md:bg-opacity-50 lg:bg-opacity-0'>
      <Seo />
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-in slide-in-from-top sm:top-1/2 sm:left-1/2 sm:-translate-y-1/2 sm:-translate-x-1/2 md:top-[92px] md:right-[168px] md:translate-y-0 md:translate-x-0 lg:top-[92px] lg:right-[168px] lg:translate-y-0 lg:translate-y-0 lg:translate-x-0 lg:translate-x-0 xl:top-[92px] xl:right-[168px] xl:translate-y-0 xl:translate-x-0 2xl:top-[92px] 2xl:right-[168px] 2xl:translate-y-0 2xl:translate-x-0'>
        <div className='relative float-right h-[270px] w-[326px] bg-[#003332] sm:h-[270] sm:w-[326] md:h-[372px] md:w-[456px] lg:h-[372px] lg:w-[456px] xl:h-[372px] xl:w-[456px] 2xl:h-[372px] 2xl:w-[456px]'>
          <div className='invisible absolute -top-4 -right-9 sm:invisible md:visible lg:visible xl:visible 2xl:visible'>
            <Image
              alt='left_arrow'
              width='17'
              height='17'
              src='/svg/left_arrow.svg'
              className=''
            />
          </div>
          <img
            alt='top_left_backup'
            width='120'
            height='120'
            src='/images/top_left_backup.png'
            className='absolute -top-14 -left-14'
          />
          <img
            alt='bot_right_backup'
            width='120'
            height='120'
            src='/images/bot_right_backup.png'
            className='absolute top-1/3 -right-14 sm:top-1/3 md:top-1/2 lg:top-1/2 xl:top-1/2 2xl:top-1/2'
          />
          <img
            alt='top_right_backup'
            width='120'
            height='120'
            src='/images/top_right_backup.png'
            className='absolute -top-14 -right-14'
          />
          <img
            alt='bot_left_backup'
            width='120'
            height='120'
            src='/images/bot_left_backup.png'
            className='absolute top-1/3 -left-14 sm:top-1/2 md:top-1/2 lg:top-1/2 xl:top-1/2 2xl:top-1/2'
          />
          <div></div>
          <div className='absolute -bottom-9 left-0'>
            <a
              className='font-inconsolata text-[#03BDB8]'
              href='https://twitter.com/0n1Force'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                alt='twitter'
                width='120'
                height='19'
                src='/svg/twitter.svg'
                className='h-[19px] w-[80px] sm:h-[19px] sm:w-[80px] md:h-[19px] md:w-[120px] lg:h-[19px] lg:w-[120px] xl:h-[19px] xl:w-[120px] 2xl:h-[19px] 2xl:w-[120px]'
              />
            </a>
          </div>
          <div className='absolute left-[38%] -bottom-9'>
            <a
              className='font-inconsolata text-[#03BDB8]'
              href='https://discord.gg/NrQpDrdsqB'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                alt='discord'
                width='120'
                height='19'
                src='/svg/discord.svg'
                className='h-[19px] w-[80px] sm:h-[19px] sm:w-[80px] md:h-[19px] md:w-[120px] lg:h-[19px] lg:w-[120px] xl:h-[19px] xl:w-[120px] 2xl:h-[19px] 2xl:w-[120px]'
              />
            </a>
          </div>
          <div className='absolute -bottom-9 right-0'>
            <a
              className='font-inconsolata text-[#03BDB8]'
              href='https://opensea.io/collection/0n1-force'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                alt='opensea'
                src='/svg/opensea.svg'
                className='h-[19px] w-[80px] sm:h-[19px] sm:w-[80px] md:h-[19px] md:w-[120px] lg:h-[19px] lg:w-[120px] xl:h-[19px] xl:w-[120px] 2xl:h-[19px] 2xl:w-[120px]'
              />
            </a>
          </div>
          <div className='mx-auto'>
            <div className='pt-6 pl-6'>
              <div className='invisible sm:invisible md:visible lg:visible xl:visible 2xl:visible'>
                <div className='font-inconsolata text-xs text-aka'>
                  [REBOOT_PROTOCOL] ATTEMPT 77 of 77 FAILED
                </div>
                <div className='font-inconsolata text-xs text-aka'>
                  [REBOOT_PROTOCOL] STARTING EMERGENCY BACKUP
                </div>
                <div className='font-inconsolata text-xs text-aka'>
                  [REBOOT_PROTOCOL] ENCLAVE ACCESS TERMINATED
                </div>
                <div className='font-inconsolata text-xs text-aka'>
                  [REBOOT_PROTOCOL] SETUP COMPLETE
                </div>
              </div>
              <div
                className={`pt-0 font-orbitron text-[25px] text-ao sm:pt-0 md:pt-4 lg:pt-4 xl:pt-4 2xl:pt-4 ${styles.text_glitch}`}
              >
                EMERGENCY BACKUP ACTIVATED
              </div>
              <div className='font-inconsolata text-ao'>
                Our collection and communication systems are secured and online
              </div>
              <div className='invisible sm:invisible md:visible lg:visible xl:visible 2xl:visible'>
                <div className='font-inconsolata text-xs text-ao'>
                  [REBOOT_PROTOCOL] ACTIVATE FRAME PROTOCOL
                </div>
                <div className='font-inconsolata text-xs text-ao'>
                  [REBOOT_PROTOCOL] REBOOT INITIATING.......
                </div>
              </div>
            </div>
            <a
              href='https://nanohub.0n1force.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <svg
                width='259'
                height='64'
                viewBox='0 0 259 64'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='absolute bottom-4 -right-9 animate-pulse'
              >
                <path d='M16 0L0 15.7538V64H16V0Z' fill='#03BDB8' />
                <rect
                  width='219'
                  height='64'
                  transform='translate(16)'
                  fill='#03BDB8'
                />
                <path
                  d='M39.428 38V28.64C39.428 28.2453 39.524 27.8827 39.716 27.552C39.908 27.2213 40.1693 26.96 40.5 26.768C40.8307 26.576 41.1933 26.48 41.588 26.48H48.788C49.1827 26.48 49.54 26.576 49.86 26.768C50.1907 26.96 50.452 27.2213 50.644 27.552C50.8467 27.8827 50.948 28.2453 50.948 28.64V38H49.012V34.048H41.348V38H39.428ZM41.348 32.128H49.012V28.704C49.012 28.6187 48.98 28.5493 48.916 28.496C48.8627 28.4427 48.7987 28.416 48.724 28.416H41.636C41.5613 28.416 41.492 28.4427 41.428 28.496C41.3747 28.5493 41.348 28.6187 41.348 28.704V32.128ZM55.571 38C55.1763 38 54.8137 37.904 54.483 37.712C54.1523 37.52 53.891 37.2587 53.699 36.928C53.507 36.5973 53.411 36.2347 53.411 35.84V28.64C53.411 28.2453 53.507 27.8827 53.699 27.552C53.891 27.2213 54.1523 26.96 54.483 26.768C54.8137 26.576 55.1763 26.48 55.571 26.48H64.899V28.416H55.907C55.7363 28.416 55.5977 28.4693 55.491 28.576C55.3843 28.672 55.331 28.8053 55.331 28.976V35.504C55.331 35.6747 55.3843 35.8133 55.491 35.92C55.5977 36.016 55.7363 36.064 55.907 36.064H64.899V38H55.571ZM71.4313 38V28.416H66.6313V26.48H78.1513V28.416H73.3513V38H71.4313ZM79.8599 38V26.48H81.7639V38H79.8599ZM90.3858 38L83.7138 26.48H85.9538L91.2818 35.744L96.6258 26.48H98.8498L92.1778 38H90.3858ZM100.394 38V28.64C100.394 28.2453 100.49 27.8827 100.682 27.552C100.874 27.2213 101.135 26.96 101.466 26.768C101.796 26.576 102.159 26.48 102.554 26.48H109.754C110.148 26.48 110.506 26.576 110.826 26.768C111.156 26.96 111.418 27.2213 111.61 27.552C111.812 27.8827 111.914 28.2453 111.914 28.64V38H109.978V34.048H102.314V38H100.394ZM102.314 32.128H109.978V28.704C109.978 28.6187 109.946 28.5493 109.882 28.496C109.828 28.4427 109.764 28.416 109.69 28.416H102.602C102.527 28.416 102.458 28.4427 102.394 28.496C102.34 28.5493 102.314 28.6187 102.314 28.704V32.128ZM118.601 38V28.416H113.801V26.48H125.321V28.416H120.521V38H118.601ZM127.189 38V26.48H137.765V28.416H129.125V31.28H136.085V33.2H129.125V36.064H137.765V38H127.189ZM145.485 38V26.48H156.061V28.416H147.421V31.28H154.381V33.2H147.421V38H145.485ZM166.999 38L163.463 33.776H165.975L169.159 37.552V38H166.999ZM157.687 38V26.496H167.047C167.441 26.496 167.799 26.5973 168.119 26.8C168.449 26.992 168.711 27.2533 168.903 27.584C169.105 27.904 169.207 28.2613 169.207 28.656V31.824C169.207 32.208 169.105 32.5653 168.903 32.896C168.711 33.2267 168.449 33.488 168.119 33.68C167.799 33.872 167.441 33.968 167.047 33.968L159.607 33.984V38H157.687ZM159.895 32.032H166.983C167.057 32.032 167.121 32.0053 167.175 31.952C167.239 31.8987 167.271 31.8293 167.271 31.744V28.704C167.271 28.6293 167.239 28.5653 167.175 28.512C167.121 28.448 167.057 28.416 166.983 28.416H159.895C159.82 28.416 159.751 28.448 159.687 28.512C159.633 28.5653 159.607 28.6293 159.607 28.704V31.744C159.607 31.8293 159.633 31.8987 159.687 31.952C159.751 32.0053 159.82 32.032 159.895 32.032ZM171.562 38V28.64C171.562 28.2453 171.658 27.8827 171.85 27.552C172.042 27.2213 172.303 26.96 172.634 26.768C172.964 26.576 173.327 26.48 173.722 26.48H180.922C181.316 26.48 181.674 26.576 181.994 26.768C182.324 26.96 182.586 27.2213 182.778 27.552C182.98 27.8827 183.082 28.2453 183.082 28.64V38H181.146V34.048H173.482V38H171.562ZM173.482 32.128H181.146V28.704C181.146 28.6187 181.114 28.5493 181.05 28.496C180.996 28.4427 180.932 28.416 180.858 28.416H173.77C173.695 28.416 173.626 28.4427 173.562 28.496C173.508 28.5493 173.482 28.6187 173.482 28.704V32.128ZM185.545 38V26.48H187.737L192.057 31.632L196.361 26.48H198.569V38H196.633V29.168L192.057 34.624L187.465 29.184V38H185.545ZM201.061 38V26.48H211.637V28.416H202.997V31.28H209.957V33.2H202.997V36.064H211.637V38H201.061Z'
                  fill='white'
                />
                <path d='M235 64L251 48.2462V0H235V64Z' fill='#03BDB8' />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
