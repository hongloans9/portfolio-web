import {
  Heading,
  SimpleGrid,
  Box,
  Text,
  Badge,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FiBook } from 'react-icons/fi'
import SectionWrapper from '../ui/SectionWrapper'
import { education } from '../../data/content'

const MotionBox = motion(Box)

export default function Education() {
  const cardBg = useColorModeValue('#f6f8fa', '#161b22')
  const borderColor = useColorModeValue('#d0d7de', '#30363d')
  const mutedColor = useColorModeValue('#57606a', '#8b949e')

  return (
    <SectionWrapper id="education">
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
          Education
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
          {education.map((edu) => (
            <Box
              key={edu.institution}
              bg={cardBg}
              border="1px solid"
              borderColor={borderColor}
              borderRadius="xl"
              p={6}
              _hover={{
                borderColor: 'brand.400',
                transform: 'translateY(-4px)',
                boxShadow: 'lg',
                transition: 'all 0.3s',
              }}
              transition="all 0.3s"
            >
              <VStack align="start" spacing={3}>
                <Box color="brand.400" fontSize="xl">
                  <FiBook />
                </Box>
                <Heading as="h3" fontSize="md" fontWeight={600}>
                  {edu.degree}
                </Heading>
                <Text fontSize="sm" color="brand.400" fontWeight={500}>
                  {edu.field}
                </Text>
                <Text fontSize="sm" color={mutedColor}>
                  {edu.institution}
                </Text>
                <Badge
                  colorScheme="teal"
                  variant="subtle"
                  borderRadius="full"
                  px={3}
                  py={1}
                  fontSize="xs"
                >
                  {edu.period}
                </Badge>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </MotionBox>
    </SectionWrapper>
  )
}
