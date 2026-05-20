import {
  Heading,
  SimpleGrid,
  Box,
  Wrap,
  WrapItem,
  Tag,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import SectionWrapper from '../ui/SectionWrapper'
import SkillGroup from '../ui/SkillGroup'
import { skillCategories, coreStrengths } from '../../data/content'

const MotionBox = motion(Box)

export default function Skills() {
  const mutedColor = useColorModeValue('#57606a', '#8b949e')

  return (
    <SectionWrapper id="skills">
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
          Skills
        </Heading>

        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={4} mb={12}>
          {skillCategories.map((cat) => (
            <SkillGroup key={cat.name} category={cat} />
          ))}
        </SimpleGrid>

        <VStack align="start" spacing={4}>
          <Text fontSize="sm" fontWeight={600} color={mutedColor} textTransform="uppercase" letterSpacing="wider">
            Core Strengths
          </Text>
          <Wrap spacing={3}>
            {coreStrengths.map((strength) => (
              <WrapItem key={strength}>
                <Tag
                  size="lg"
                  borderRadius="full"
                  variant="outline"
                  colorScheme="teal"
                  px={4}
                  py={2}
                  fontWeight={500}
                >
                  {strength}
                </Tag>
              </WrapItem>
            ))}
          </Wrap>
        </VStack>
      </MotionBox>
    </SectionWrapper>
  )
}
