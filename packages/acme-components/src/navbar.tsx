import { Link, A } from '@vercel/examples-ui'

export function Navbar({ isDocsApp }: { isDocsApp?: boolean }) {
  return isDocsApp ? (
    <ul className="inline-flex mb-4">
      <li>
        <Link href="/">Home (Multi-Zones)</Link>
      </li>
      <li className="ml-4">
        <Link href="/docs">Docs</Link>
      </li>
      <li className="ml-4">
        <Link href="/docs/about">About Docs</Link>
      </li>
    </ul>
  ) : (
    <ul className="inline-flex mb-4">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li className="ml-4">
        <Link href="/about">About</Link>
      </li>
      <li className="ml-4">
        <Link href="/docs">Docs (Multi-Zones)</Link>
      </li>
    </ul>
  )
}
