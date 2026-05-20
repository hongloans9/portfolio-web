import {
  Heading,
  Text,
  VStack,
  HStack,
  IconButton,
  Box,
  Button,
  useColorModeValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiGithub, FiLinkedin } from 'react-icons/fi'
import SectionWrapper from '../ui/SectionWrapper'
import { personalInfo, socialLinks } from '../../data/content'

const MotionBox = motion(Box)

const iconMap: Record<string, React.ElementType> = {
  github: FiGithub,
  linkedin: FiLinkedin,
}

export default function Contact() {
  const mutedColor = useColorModeValue('#57606a', '#8b949e')
  const cardBg = useColorModeValue('#f6f8fa', '#161b22')
  const borderColor = useColorModeValue('#d0d7de', '#30363d')

  return (
    <SectionWrapper id="contact">
      <MotionBox
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        textAlign="center"
      >
        <Heading
          as="h2"
          fontSize={{ base: '2xl', md: '3xl' }}
          mb={4}
          fontWeight={700}
        >
          Get In Touch
        </Heading>

        <Text fontSize="lg" color={mutedColor} mb={12} maxW="600px" mx="auto">
          I'm always open to discussing new opportunities, interesting projects, or
          just having a conversation about technology.
        </Text>

        <Box
          bg={cardBg}
          border="1px solid"
          borderColor={borderColor}
          borderRadius="xl"
          p={{ base: 8, md: 12 }}
          maxW="600px"
          mx="auto"
        >
          <VStack spacing={6}>
            <Button
              as="a"
              href={`mailto:${personalInfo.email}`}
              leftIcon={<FiMail />}
              variant="solid"
              size="lg"
              w={{ base: '100%', sm: 'auto' }}
            >
              {personalInfo.email}
            </Button>

            <HStack spacing={2} color={mutedColor} fontSize="md">
              <FiPhone />
              <Text>{personalInfo.phone}</Text>
            </HStack>

            <HStack spacing={4} pt={4}>
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
                    icon={<Icon size={20} />}
                    variant="ghost"
                    size="lg"
                    borderRadius="full"
                    color={mutedColor}
                    border="1px solid"
                    borderColor={borderColor}
                    _hover={{
                      color: 'brand.400',
                      borderColor: 'brand.400',
                      bg: 'transparent',
                    }}
                  />
                )
              })}
            </HStack>
          </VStack>
        </Box>
      </MotionBox>
    </SectionWrapper>
  )
}
