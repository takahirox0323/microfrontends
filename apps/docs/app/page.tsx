import { Page, Text, Code, Link, Snippet } from '@vercel/examples-ui'
import { Navbar } from '@acme/components/navbar'
import { Button, Quote } from '@acme/design-system'
import { ColoredButton } from './components/colored-button'

export default function Home(): React.ReactNode {
  return (
    <Page>
      <Navbar />
      <Text variant="h1" className="mb-6">
        Docsです！
      </Text>
    </Page>
  )
}
