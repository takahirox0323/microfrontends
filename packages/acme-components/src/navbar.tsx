import { Link, A } from '@vercel/examples-ui'

export function Navbar({ isDocsApp }: { isDocsApp?: boolean }) {
  return isDocsApp ? (
    <ul className="inline-flex mb-4">
      <li>
        <a
          style={{ color: 'blue' }}
          href="https://develop-main.d3ebifrucnlqj9.amplifyapp.com/"
        >
          メインアプリ
        </a>
      </li>
      <a
        style={{ color: 'blue' }}
        href="https://develop-main.d3ebifrucnlqj9.amplifyapp.com/about"
      >
        メインアプリ
      </a>
      <li className="ml-4">
        <a style={{ color: 'red' }} href="/docs">
          サブアプリ
        </a>
      </li>
    </ul>
  ) : (
    <ul className="inline-flex mb-4">
      <li>
        <a
          style={{ color: 'blue' }}
          href="https://develop-main.d3ebifrucnlqj9.amplifyapp.com/"
        >
          メインアプリ
        </a>
      </li>
      <a
        style={{ color: 'blue' }}
        href="https://develop-main.d3ebifrucnlqj9.amplifyapp.com/about"
      >
        メインアプリ
      </a>
      <li style={{ color: 'red' }} className="ml-4">
        <a href="/docs">サブアプリ</a>
      </li>
    </ul>
  )
}
