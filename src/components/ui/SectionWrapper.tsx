import { Box } from '@chakra-ui/react'
import { type ReactNode } from 'react'

interface SectionWrapperProps {
  id: string
  children: ReactNode
}

export default function SectionWrapper({ id, children }: SectionWrapperProps) {
  return (
    <Box
      as="section"
      id={id}
      py={{ base: 16, md: 24 }}
      px={{ base: 6, md: 8 }}
      maxW="1100px"
      mx="auto"
    >
      {children}
    </Box>
  )
}
