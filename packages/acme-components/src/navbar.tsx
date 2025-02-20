import { Link, A } from '@vercel/examples-ui'

export function Navbar({ isDocsApp }: { isDocsApp?: boolean }) {
  return isDocsApp ? (
    <ul className="inline-flex mb-4">
      <li>
        <a href="https://develop-main.d3ebifrucnlqj9.amplifyapp.com/">
          Docs (Multi-Zones)
        </a>
      </li>
      <a href="https://develop-main.d3ebifrucnlqj9.amplifyapp.com/about">
        Docs (Multi-Zones)
      </a>
      <li className="ml-4">
        <a href="/docs">Docs (Multi-Zones)</a>
      </li>
    </ul>
  ) : (
    <ul className="inline-flex mb-4">
      <li>
        <a href="/">Docs (Multi-Zones)</a>
      </li>
      <li className="ml-4">
        <a href="/about">Docs (Multi-Zones)</a>
      </li>
      <li className="ml-4">
        <a href="/docs">Docs (Multi-Zones)</a>
      </li>
    </ul>
  )
}
