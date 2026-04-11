import Container from '@modules/atoms/Container'
import Layout from '@modules/templates/Layout'
import Sidebar from '@modules/organisms/Sidebar'
import ProductList from '@modules/organisms/ProductList'

const AddList = () => {
  return (
    <Layout>
      <Container className="flex-row flex-1">
        <div className="w-full py-4 flex flex-row">
          <div className="border dark:border-zinc-900 border-zinc-100 w-full rounded-2xl flex flex-row overflow-hidden">
            <Sidebar />
            <ProductList />
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default AddList
