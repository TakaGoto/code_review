import Typewriter from 'typewriter-effect';

export default function DefenseProtocol() {
  return (
    <div className='text-aka'>
      <Typewriter
        options={{ skipAddStyles: true }}
        onInit={(typewriter) => {
          typewriter
            .callFunction((state) => {
              state.elements.cursor.style.display = 'none';
            })
            .pauseFor(6000)
            .typeString('hello world')
            .typeString('hello world')
            .typeString('hello world')
            .typeString('hello world')
            .typeString('hello world')
            .typeString('hello world')
            .typeString('hello world')
            .typeString('hello world')
            .typeString('hello world')
            .deleteAll(1)
            .start();
        }}
      />
    </div>
  );
}
