"use client"

import { signOut } from "next-auth/react";

const SignOutButton = () => {
  return (
    <button className="btn btn-outline bg-slate-800" onClick={() => signOut()}>
      Sign Out
    </button>
  )
}

export default SignOutButton