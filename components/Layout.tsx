import Header from './Header'
import Footer from './Footer'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)

export default Layout
