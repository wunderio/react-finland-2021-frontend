import React from "react";
import Link from "next/link";
import { useMenu } from "next-drupal";
import { useRouter } from "next/router";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Layout({ children }) {
  // Rudimentary logic to get to the menu to use.
  // In this case we are using two separate menus in Drupal.
  // The other option is to use a single menu and then filter
  // out the untranslated menu items.
  const router = useRouter();
  const menuName = router.locale == router.defaultLocale ? "main" : "main-fi";
  const { tree } = useMenu(menuName);
  return (
    <div className="wrapper">
      <div className="box header">
        <h1>Next.js and Drupal blog example</h1>
      </div>
      <div className="box sidebar">
        <ul>
          {tree?.map((link) => (
            <li key={link.id}>
              <Link href={link.url}>
                <a>{link.title}</a>
              </Link>
            </li>
          ))}
        </ul>
        <LocaleSwitcher />
      </div>
      <div className="box content">{children}</div>
    </div>
  );
}
