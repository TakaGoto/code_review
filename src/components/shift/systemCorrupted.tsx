import styles from './systemCorrupted.module.css';

interface SystemsProps {
  // eslint-disable-next-line @typescript-eslint/ban-types
  setIsTypingDone: Function;
}

export default function SystemCorrupted(props: SystemsProps) {
  return (
    <div className='font-inconsolata text-aka'>
      <div className={`${styles.line_1}`}>
        <div className='pt-8 font-orbitron text-[32px] font-semibold'>
          SYST3M CORRUPTED
        </div>
      </div>
      <div className={`pt-6 ${styles.line_2}`}>
        Content access has now been restricted by an unknown operator.
      </div>
      <div className={`${styles.line_4}`}>
        -----------------------------------------------------------------
      </div>
      <div className={`${styles.line_6}`}>
        [MainFrame] M0R1A: executing /bin/sh /sh1n_w0rld.sh
      </div>
      <div className={`${styles.line_7}`}>
        [DATABASE] ENCLAVE_PROD corrupted. attempting repair: FAILED
      </div>
      <div className={`${styles.line_8}`}>
        [DATABASE] ENCLAVE_PROD corrupted. retrieving back: FAILED
      </div>
      <div className={`${styles.line_9}`}>
        [DATABASE] ENCLAVE_PROD corrupted. retrieving shard: FAILED
      </div>
      <div className={`${styles.line_10}`}>
        [ENCLAVE] process corrupted. attempting restart: FAILED
      </div>
      <div
        className={`${styles.line_11}`}
        onAnimationEnd={() => props.setIsTypingDone(true)}
      >
        REBOOT PROTOCOL FAILED. RETRYING.......
      </div>
    </div>
  );
}
