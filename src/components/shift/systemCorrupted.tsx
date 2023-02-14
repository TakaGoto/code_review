import styles from './systemCorrupted.module.css';

interface SystemsProps {
  // eslint-disable-next-line @typescript-eslint/ban-types
  setIsTypingDone: Function;
}

export default function SystemCorrupted(props: SystemsProps) {
  return (
    <div className='text-aka'>
      <div className={`${styles.line_1}`}>
        <div className='pt-8 font-orbitron text-[32px] font-semibold'>
          SYST3M CORRUPTED
        </div>
      </div>
      <div className={`pt-6 font-inconsolata text-aka ${styles.line_2}`}>
        Content access has now been restricted by an unknown operator.
      </div>
      <div className={`font-inconsolata ${styles.line_2}`}>
        Access codes listed under Shift have been revoked.
      </div>
      <div className={`${styles.line_3}`}>
        -----------------------------------------------------------------
      </div>
      <div className={`font-inconsolata ${styles.line_4}`}>
        [MainFrame] ssh login detected user: 0N1#8879
      </div>
      <div className={`font-inconsolata ${styles.line_5}`}>
        [MainFrame] executing /bin/sh /breach_protocol.sh
      </div>
      <div className={`font-inconsolata ${styles.line_6}`}>
        [DATABASE] ENCLAVE_PROD corrupted. attempting repair: FAILED
      </div>
      <div className={`font-inconsolata ${styles.line_7}`}>
        [DATABASE] ENCLAVE_PROD corrupted. retrieving back: FAILED
      </div>
      <div className={`font-inconsolata ${styles.line_8}`}>
        [DATABASE] ENCLAVE_PROD corrupted. retrieving shard: FAILED
      </div>
      <div className={`font-inconsolata ${styles.line_9}`}>
        [ENCLAVE] process corrupted. attempting restart: FAILED
      </div>
      <div
        className={`font-inconsolata ${styles.line_10}`}
        onAnimationEnd={() => props.setIsTypingDone(true)}
      >
        BREACH PROTOCOL FAILED. RETRYING.......
      </div>
      {/* <Typewriter
        options={{ skipAddStyles: true }}
        onInit={(typewriter) => {
          typewriter
            .callFunction((state) => {
              state.elements.cursor.style.display = 'none';
            })
            .changeDelay(1)
            .typeString(
              `<div class="pt-8 font-orbitron text-[32px] font-semibold text-aka">SYST3M CORRUPTED</div>`
            )
            .typeString(
              '<p class="pt-6 font-inconsolata text-aka"> Content access has now been restricted by an unknown operator.</p>'
            )
            .typeString(
              '<p class="font-inconsolata text-aka"> Access codes listed under Shift have been revoked.</p>'
            )
            .typeString(
              '-----------------------------------------------------------------'
            )
            .typeString(
              '<div class="font-inconsolata">[MainFrame] ssh login detected user: 0N1#8879</div>'
            )
            .typeString(
              '<div class="font-inconsolata">[MainFrame] executing /bin/sh /breach_protocol.sh</div>'
            )
            .typeString(
              '<div class="font-inconsolata">[DATABASE] ENCLAVE_PROD corrupted. attempting repair: FAILED</div>'
            )
            .typeString(
              '<div class="font-inconsolata">[DATABASE] ENCLAVE_PROD corrupted. retrieving back: FAILED</div>'
            )
            .typeString(
              '<div class="font-inconsolata">[DATABASE] ENCLAVE_PROD corrupted. retrieving shard: FAILED</div>'
            )
            .typeString(
              '<div class="font-inconsolata">[ENCLAVE] process corrupted. attempting restart: FAILED</div>'
            )
            .typeString(
              '<div class="font-inconsolata"> BREACH PROTOCOL FAILED. RETRYING....... </div>'
            )
            .callFunction((state) => {
              props.setIsTypingDone(true);
              state.elements.cursor.style.display = 'none';
            })
            .start();
        }}
      /> */}
    </div>
  );
}
