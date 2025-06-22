'use client';

import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <>
          <h1>Welcome, {session.user?.name}</h1>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      ) : (
        <>
          <h1>Not signed in</h1>
          <button onClick={() => signIn("entrypage")}>Sign in</button>
        </>
      )}
    </div>
  );
}