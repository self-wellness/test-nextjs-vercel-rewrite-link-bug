import Link from "next/link";

export default () => {
  return (
    <main>
      <h2>This is a test page.</h2>
      <p>At first glance it works fine. If you navigate to <Link href="/test">/test</Link>, or <Link href="/test2">/test2</Link> all is fine.</p>
      <p>Now try changing the url path to <a href="/test-rewrite">/test-rewrite</a> or <a href="/test-rewrite2">/test-rewrite2</a>. Those paths will just rewrite to use content from /test and /test2 pages.</p>
      <ul>
        <li>First look at all the pages. They will load fine.</li>
        <li>Now try go back to a previously loaded page. It will not work, unless you double-click the link. Sometimes you need to triple or even 4-6 times click! 🤯🤯🤯🤯</li>
      </ul>
    </main>
  );
}
