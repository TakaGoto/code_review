import Typewriter from 'typewriter-effect';

interface SystemsProps {
  // eslint-disable-next-line @typescript-eslint/ban-types
  setIsTypingDone: Function;
}

export default function SystemCorrupted(props: SystemsProps) {
  return (
    <div className='text-aka'>
      <Typewriter
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
      />
    </div>
  );
}
