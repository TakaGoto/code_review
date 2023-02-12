import styles from './logo.module.css';

export default function Shift() {
  return (
    <div
      style={{
        backgroundImage: `url(/svg/0n1_logo.svg)`,
        backgroundRepeat: 'no-repeat',
      }}
      className={`${styles.glitch} min-h-screen w-full bg-[#0c0d0d] bg-cover bg-center opacity-100`}
    ></div>
  );
}
