import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <h2>Normal link test</h2>
        <nav>
          <Link href="/">Home</Link>{' '}
          <Link href="/test">Test</Link>{' '}
          <Link href="/test2">Test2</Link>{' '}
          <Link href="/test3">Test3</Link>
        </nav>

        <h2>Rewrite-link test</h2>
        <nav>
          <Link href="/test-rewrite">Home</Link>{' '}
          <Link href="/test-rewrite/test">Test</Link>{' '}
          <Link href="/test-rewrite/test2">Test2</Link>{' '}
          <Link href="/test-rewrite/test3">Test3</Link>
        </nav>

        {children}
      </body>
    </html>
  );
}
