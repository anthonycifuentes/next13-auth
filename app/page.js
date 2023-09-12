"use client";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Home() {
  const { push } = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
    };

    try {
      const { data } = await axios.post("/api/login", payload);

      alert(JSON.stringify(data));

      // redirect the user to /dashboard
      push("/dashboard");
    } catch (e) {
      alert(e.message);
    }
  };
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </main>
  );
}
