import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FiMail, FiLinkedin, FiChevronDown } from 'react-icons/fi'
import { personalInfo } from '../../data/content'

const MotionBox = motion(Box)
const MotionVStack = motion(VStack)

export default function Hero() {
  const mutedColor = useColorModeValue('#57606a', '#8b949e')

  return (
    <Box
      id="hero"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      pt="64px"
    >
      <MotionVStack
        spacing={6}
        textAlign="center"
        px={6}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Text
          fontSize={{ base: 'md', md: 'lg' }}
          color={mutedColor}
          fontWeight={500}
          letterSpacing="wider"
          textTransform="uppercase"
        >
          Hello, I'm
        </Text>

        <Heading
          as="h1"
          fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
          fontWeight={700}
          bgGradient="linear(to-r, brand.300, brand.400, brand.200)"
          bgClip="text"
          lineHeight={1.2}
        >
          {personalInfo.name}
        </Heading>

        <VStack spacing={2}>
          <Text
            fontSize={{ base: 'xl', md: '2xl' }}
            fontWeight={600}
            color={useColorModeValue('#24292f', '#e6edf3')}
          >
            {personalInfo.title}
          </Text>
          <Text
            fontSize={{ base: 'md', md: 'lg' }}
            color="brand.400"
            fontFamily="mono"
            fontWeight={500}
          >
            {personalInfo.subtitle}
          </Text>
        </VStack>

        <Text
          maxW="500px"
          color={mutedColor}
          fontSize={{ base: 'sm', md: 'md' }}
          lineHeight={1.8}
        >
          {personalInfo.location}
        </Text>

        <HStack spacing={4} pt={4}>
          <Button
            as="a"
            href={`mailto:${personalInfo.email}`}
            leftIcon={<FiMail />}
            size="lg"
            variant="solid"
          >
            Contact Me
          </Button>
          <Button
            as="a"
            href="https://www.linkedin.com/in/loan-nguyen-1303/"
            target="_blank"
            rel="noopener noreferrer"
            leftIcon={<FiLinkedin />}
            size="lg"
            variant="outline"
          >
            LinkedIn
          </Button>
        </HStack>
      </MotionVStack>

      <MotionBox
        position="absolute"
        bottom={8}
        left="50%"
        transform="translateX(-50%)"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        cursor="pointer"
        onClick={() =>
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
        }
      >
        <FiChevronDown size={24} color="#8b949e" />
      </MotionBox>
    </Box>
  )
}
