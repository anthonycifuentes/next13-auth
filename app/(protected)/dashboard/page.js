"use client";
import { useAuthContext } from "@/app/provider/AuthProvider";
import Link from "next/link";
export default function Dashboard() {
  const { user } = useAuthContext();
  console.log(user);
  return (
    <section>
      <h2>Protected Route</h2>
      <Link href="/settings">SETTINGS</Link>
    </section>
  );
}
