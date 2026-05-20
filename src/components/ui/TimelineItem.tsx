import {
  Box,
  Heading,
  Text,
  Badge,
  VStack,
  HStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Collapse,
  Button,
  useDisclosure,
} from '@chakra-ui/react'
import { FiChevronDown, FiChevronUp, FiMapPin } from 'react-icons/fi'
import { BsDot } from 'react-icons/bs'
import type { WorkExperience } from '../../data/content'

interface TimelineItemProps {
  job: WorkExperience
  isLast?: boolean
}

export default function TimelineItem({ job, isLast }: TimelineItemProps) {
  const cardBg = useColorModeValue('#f6f8fa', '#161b22')
  const borderColor = useColorModeValue('#d0d7de', '#30363d')
  const mutedColor = useColorModeValue('#57606a', '#8b949e')
  const textColor = useColorModeValue('#24292f', '#c9d1d9')
  const { isOpen, onToggle } = useDisclosure()

  const allBullets = job.categories.flatMap((cat) =>
    cat.bullets.map((b) => ({ category: cat.title, text: b }))
  )
  const previewBullets = allBullets.slice(0, 3)
  const remainingBullets = allBullets.slice(3)

  return (
    <HStack align="start" spacing={6} w="100%">
      <VStack spacing={0} align="center" minW="20px">
        <Box
          w="12px"
          h="12px"
          borderRadius="full"
          bg="brand.400"
          border="2px solid"
          borderColor={useColorModeValue('#ffffff', '#0d1117')}
          boxShadow="0 0 0 3px var(--chakra-colors-brand-400)"
          flexShrink={0}
          mt={1}
        />
        {!isLast && (
          <Box w="2px" bg={borderColor} flex={1} minH="40px" />
        )}
      </VStack>

      <Box
        flex={1}
        bg={cardBg}
        border="1px solid"
        borderColor={borderColor}
        borderRadius="xl"
        p={6}
        mb={8}
        _hover={{ borderColor: 'brand.400', transition: 'border-color 0.2s' }}
      >
        <VStack align="start" spacing={3}>
          <Box w="100%">
            <HStack justify="space-between" wrap="wrap" gap={2}>
              <Heading as="h3" fontSize="lg" fontWeight={600}>
                {job.company}
              </Heading>
              <Badge
                colorScheme="teal"
                variant="subtle"
                px={3}
                py={1}
                borderRadius="full"
                fontWeight={500}
                fontSize="xs"
              >
                {job.period}
              </Badge>
            </HStack>
            <Text color="brand.400" fontWeight={500} fontSize="md" mt={1}>
              {job.role}
            </Text>
            <HStack mt={1} color={mutedColor} fontSize="sm">
              <FiMapPin size={12} />
              <Text>{job.location}</Text>
            </HStack>
          </Box>

          <List spacing={2} w="100%">
            {previewBullets.map((bullet, i) => (
              <ListItem
                key={i}
                fontSize="sm"
                color={textColor}
                display="flex"
                alignItems="start"
              >
                <ListIcon as={BsDot} color="brand.400" fontSize="2xl" mt="-2px" />
                {bullet.text}
              </ListItem>
            ))}
          </List>

          {remainingBullets.length > 0 && (
            <>
              <Collapse in={isOpen} animateOpacity>
                <List spacing={2} w="100%">
                  {remainingBullets.map((bullet, i) => (
                    <ListItem
                      key={i}
                      fontSize="sm"
                      color={textColor}
                      display="flex"
                      alignItems="start"
                    >
                      <ListIcon as={BsDot} color="brand.400" fontSize="2xl" mt="-2px" />
                      {bullet.text}
                    </ListItem>
                  ))}
                </List>
              </Collapse>
              <Button
                size="xs"
                variant="ghost"
                color={mutedColor}
                onClick={onToggle}
                rightIcon={isOpen ? <FiChevronUp /> : <FiChevronDown />}
                _hover={{ color: 'brand.400' }}
              >
                {isOpen ? 'Show less' : `Show ${remainingBullets.length} more`}
              </Button>
            </>
          )}
        </VStack>
      </Box>
    </HStack>
  )
}
