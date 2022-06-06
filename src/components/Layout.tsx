import {Footer} from './Footer'
import {Header} from './Header'

interface LayoutProps {
  withHeader?: boolean
  withFooter?: boolean
  children: JSX.Element
}

export const Layout = ({
  withHeader,
  withFooter,
  children,
}: LayoutProps): JSX.Element => {
  return (
    <>
      {withHeader && <Header />}
      {children}
      {withFooter && <Footer />}
    </>
  )
}
