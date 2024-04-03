import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/">Home</Link>{' '}
          <Link href="/test">Test</Link>{' '}
          <Link href="/test2">Test2</Link>{' '}
          <Link href="/test3">Test3</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
