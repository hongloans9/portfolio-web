import { Box, Text, HStack, IconButton, useColorModeValue } from '@chakra-ui/react'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { socialLinks } from '../../data/content'

const iconMap: Record<string, React.ElementType> = {
  github: FiGithub,
  linkedin: FiLinkedin,
}

export default function Footer() {
  const borderColor = useColorModeValue('#d0d7de', '#30363d')
  const mutedColor = useColorModeValue('#57606a', '#8b949e')

  return (
    <Box
      as="footer"
      borderTop="1px solid"
      borderColor={borderColor}
      py={8}
      px={{ base: 6, md: 8 }}
    >
      <Box maxW="1100px" mx="auto" textAlign="center">
        <HStack justify="center" spacing={4} mb={4}>
          {socialLinks.map((link) => {
            const Icon = iconMap[link.platform]
            return (
              <IconButton
                key={link.platform}
                as="a"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.platform}
                icon={<Icon />}
                variant="ghost"
                size="sm"
                color={mutedColor}
                _hover={{ color: 'brand.400' }}
              />
            )
          })}
        </HStack>
        <Text fontSize="sm" color={mutedColor}>
          &copy; {new Date().getFullYear()} Nguyen Hong Loan. All rights reserved.
        </Text>
      </Box>
    </Box>
  )
}
