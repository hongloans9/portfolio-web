import { Box } from '@chakra-ui/react'
import { type ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Box minH="100vh">
      <Navbar />
      <Box as="main">{children}</Box>
      <Footer />
    </Box>
  )
}
