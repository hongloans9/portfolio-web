import { Heading, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import SectionWrapper from '../ui/SectionWrapper'
import TimelineItem from '../ui/TimelineItem'
import { experience } from '../../data/content'

const MotionVStack = motion(VStack)

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <MotionVStack
        align="start"
        spacing={0}
        w="100%"
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
          Experience
        </Heading>

        {experience.map((job, index) => (
          <TimelineItem
            key={job.company}
            job={job}
            isLast={index === experience.length - 1}
          />
        ))}
      </MotionVStack>
    </SectionWrapper>
  )
}
