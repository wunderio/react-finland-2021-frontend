import Link from "next/link";
import { useRouter } from "next/router";

export default function LocaleSwitcher() {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;
  const otherLocales = locales.filter((locale) => locale !== activeLocale);

  return (
    <div>
      <p>Switch to language:</p>
      <ul>
        {otherLocales.map((locale) => {
          const { asPath } = router;
          return (
            <li key={locale}>
              <Link href={"/"} as={asPath} locale={locale}>
                <a>{locale}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
