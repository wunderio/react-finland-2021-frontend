import React from "react";
import Link from "next/link";
import { useMenu } from "next-drupal";

export default function Layout({ children }) {
  const { tree } = useMenu("main");
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
      </div>
      <div className="box content">{children}</div>
    </div>
  );
}
