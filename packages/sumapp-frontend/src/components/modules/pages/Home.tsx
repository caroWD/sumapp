import Hero from '../organisms/Hero'
import Layout from '../templates/Layout'

const Home = () => {
  return (
    <Layout>
      <Hero
        size="lg"
        title="Lorem ipsum dolor sit amet"
        subtitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
          excepturi deleniti architecto cum repellat."
        badges={[
          { key: 1, label: 'Reportes', icon: 'chart' },
          { key: 2, label: 'Listas', icon: 'list' },
          { key: 3, label: 'Productos', icon: 'products' },
          { key: 4, label: 'Análisis', icon: 'analytics' },
        ]}
      />
    </Layout>
  )
}

export default Home
