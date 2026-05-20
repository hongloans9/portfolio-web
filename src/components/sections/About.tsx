import {
  Heading,
  Text,
  SimpleGrid,
  Box,
  Image,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import SectionWrapper from '../ui/SectionWrapper'
import { personalInfo, summary, summaryExtended } from '../../data/content'

const MotionBox = motion(Box)

export default function About() {
  const cardBg = useColorModeValue('#f6f8fa', '#161b22')
  const borderColor = useColorModeValue('#d0d7de', '#30363d')
  const mutedColor = useColorModeValue('#57606a', '#8b949e')

  return (
    <SectionWrapper id="about">
      <MotionBox
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <Heading
          as="h2"
          fontSize={{ base: '2xl', md: '3xl' }}
          mb={12}
          fontWeight={700}
        >
          About Me
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12} alignItems="center">
          <VStack align="start" spacing={5}>
            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              lineHeight={1.8}
              color={useColorModeValue('#24292f', '#c9d1d9')}
            >
              {summary}
            </Text>
            <Text fontSize="md" lineHeight={1.8} color={mutedColor}>
              {summaryExtended}
            </Text>
          </VStack>

          <Box display="flex" justifyContent={{ base: 'center', md: 'flex-end' }}>
            <Box
              position="relative"
              borderRadius="2xl"
              overflow="hidden"
              border="2px solid"
              borderColor={borderColor}
              bg={cardBg}
              p={1}
              maxW="300px"
              _after={{
                content: '""',
                position: 'absolute',
                top: '-2px',
                left: '-2px',
                right: '-2px',
                bottom: '-2px',
                borderRadius: '2xl',
                bgGradient: 'linear(to-br, brand.400, brand.200)',
                zIndex: -1,
              }}
            >
              <Image
                src={personalInfo.avatar}
                alt={personalInfo.name}
                borderRadius="xl"
                w="100%"
                objectFit="cover"
              />
            </Box>
          </Box>
        </SimpleGrid>
      </MotionBox>
    </SectionWrapper>
  )
}
