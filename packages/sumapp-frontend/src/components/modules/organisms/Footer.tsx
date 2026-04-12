import Container from '../atoms/Container'
import SumappLogo from '../molecules/SumappLogo'

const Footer = () => {
  return (
    <footer className="py-3">
      <Container className="flex-row gap-4 justify-between items-center">
        <p className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <SumappLogo />
      </Container>
    </footer>
  )
}

export default Footer
