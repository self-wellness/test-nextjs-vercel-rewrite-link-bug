import Link from "next/link";

export default function LocaleLayout({
  children,
  params: {locale}
}) {
  return (
    <html lang={locale}>
      <body>
      <h2>Normal link test</h2>
      <nav>
        <Link href="/">Home</Link>{' '}
        <Link href="/en/test">Test</Link>{' '}
        <Link href="/en/test2">Test2</Link>{' '}
        <Link href="/en/test3">Test3</Link>
      </nav>

      <h2>Rewrite-link test</h2>
      <nav>
        <Link href="/en/test-rewrite">Home</Link>{' '}
        <Link href="/en/test-rewrite/test">Test</Link>{' '}
        <Link href="/en/test-rewrite/test2">Test2</Link>{' '}
        <Link href="/en/test-rewrite/test3">Test3</Link>
      </nav>
      {children}</body>
    </html>
  );
}
