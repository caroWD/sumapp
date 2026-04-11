import Layout from '@modules/templates/Layout'
import Container from '@modules/atoms/Container'
import SupermarketLists from '@modules/organisms/SupermarketLists'

const Lists = () => {
  return (
    <Layout>
      <Container className="flex-row flex-1">
        <div className="border dark:border-zinc-900 border-zinc-100 w-full rounded-2xl flex flex-row overflow-hidden">
          <SupermarketLists />
        </div>
      </Container>
    </Layout>
  )
}

export default Lists
