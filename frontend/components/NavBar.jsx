import Link from "next/link";
import { useSignOut, useUser } from "../hooks/user";

export default function NavBar() {
  const user = useUser();
  const signOut = useSignOut();

  return (
    <nav className="px-4 py-1">
      <ul className="flex gap-2">
        <li className="text-lg font-extrabold">
          <Link href="/">Next Shop</Link>
        </li>
        <li role="separator" className="flex-1"></li>
        {user ? (
          <>
            <li>
              <Link href="cart">Cart</Link>
            </li>
            {/* TODO: name is a link to user profile */}
            <li>{user.name}</li>
            <li>
              <button onClick={signOut}>Sign Out</button>
            </li>
          </>
        ) : (
          <li>
            <Link href="/sign-in">Sign-in</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
