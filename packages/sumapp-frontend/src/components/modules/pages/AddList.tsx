import Container from '@modules/atoms/Container'
import Layout from '@modules/templates/Layout'
import Sidebar from '@modules/organisms/Sidebar'

const AddList = () => {
  return (
    <Layout>
      <Container className="flex-row flex-1">
        <div className="w-full py-4 flex flex-row">
          <div className="border dark:border-zinc-900 border-zinc-100 w-full rounded-2xl flex flex-row overflow-hidden">
            <Sidebar />
            <div className="flex-3 px-6 py-5">
              <h2>Lista</h2>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default AddList
