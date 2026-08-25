import styles from '../App.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>🐱 춤추는 고양이</h1>
        <p className={styles.subtitle}>버튼을 눌러 고양이의 댄스를 시작해보세요!</p>
      </header>
      <main className={styles.stage}>{children}</main>
      <footer className={styles.footer}>
        <p>Made with React &amp; CSS Animations</p>
      </footer>
    </div>
  );
}
