import {Header} from './Header'
import {Footer} from './Footer'

interface Props {
  withHeader?: boolean
  withFooter?: boolean
  children: JSX.Element
}

export const Layout = ({
  withHeader,
  withFooter,
  children,
}: Props): JSX.Element => {
  return (
    <>
      {withHeader && <Header />}
      {children}
      {withFooter && <Footer />}
    </>
  )
}
