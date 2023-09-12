"use client";
import AuthProvider from "../provider/AuthProvider";

export default function Layout({ children }) {
  return (
    <AuthProvider>
      <h1>PROTECTED</h1>
      {children}
    </AuthProvider>
  );
}
