"use client";
import { useAuthContext } from "@/app/provider/AuthProvider";
import Link from "next/link";
export default function Settings() {
  const { user } = useAuthContext();
  console.log(user);
  return (
    <section>
      <h2>Protected Route SETTINGS</h2>
      <Link href="/dashboard">DASHBOARD</Link>
    </section>
  );
}
