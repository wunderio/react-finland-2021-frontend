import React from "react";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="wrapper">
      <div className="box header">
        <h1>Next.js and Drupal blog example</h1>
      </div>
      <div className="box sidebar">
        <ul>
          <li>
            <Link href="#">
              <a>Menu link text</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="box content">{children}</div>
    </div>
  );
}
