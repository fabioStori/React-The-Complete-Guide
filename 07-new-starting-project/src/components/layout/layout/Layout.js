import styles from './Layout.module.css';
import MainNavigation from '../main-navigation/MainNavigation';

function Layout(props) {
  return (
    <div>
      <MainNavigation></MainNavigation>
      <main className={styles.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
