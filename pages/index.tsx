import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Login Page</title>
        <meta name="description" content="Login Page by Drew Lucero" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.centerPage}>
        <h1>Sign in</h1>
        <p className="my-10">Sign in to start managing your account!</p>
        <form className={styles.loginForm}>
          <div className={styles.formGroup}>
            <input
              type="text"
              className={styles.formControl}
              placeholder="Login"
              required
              aria-required
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="password"
              className={styles.formControl}
              placeholder="Password"
              required
              aria-required
            />
          </div>
          <div className={styles.formFooter}>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="rememberMe"
                className={styles.formCheckBox}
              />
              <label htmlFor="rememberMe"> Remember me</label>
            </div>

            <Link href={"/"} className={styles.formForgotPass}>
              Forgot password?
            </Link>
          </div>
          <div>
            <button type="submit" className={styles.formButton}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
