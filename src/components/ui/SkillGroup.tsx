import {
  Box,
  Heading,
  Wrap,
  WrapItem,
  Tag,
  useColorModeValue,
} from '@chakra-ui/react'
import type { SkillCategory } from '../../data/content'

interface SkillGroupProps {
  category: SkillCategory
}

export default function SkillGroup({ category }: SkillGroupProps) {
  const cardBg = useColorModeValue('#f6f8fa', '#161b22')
  const borderColor = useColorModeValue('#d0d7de', '#30363d')
  const tagBg = useColorModeValue('rgba(49,151,149,0.08)', 'rgba(49,151,149,0.12)')
  const tagColor = useColorModeValue('brand.600', 'brand.300')
  const tagBorderColor = useColorModeValue('brand.200', 'brand.700')

  return (
    <Box
      bg={cardBg}
      border="1px solid"
      borderColor={borderColor}
      borderRadius="xl"
      p={5}
      _hover={{ borderColor: 'brand.400', transition: 'border-color 0.2s' }}
    >
      <Heading as="h3" fontSize="sm" fontWeight={600} mb={4} color="brand.400" textTransform="uppercase" letterSpacing="wider">
        {category.name}
      </Heading>
      <Wrap spacing={2}>
        {category.skills.map((skill) => (
          <WrapItem key={skill}>
            <Tag
              size="md"
              borderRadius="full"
              bg={tagBg}
              color={tagColor}
              border="1px solid"
              borderColor={tagBorderColor}
              px={3}
              py={1}
              fontWeight={500}
              fontSize="sm"
            >
              {skill}
            </Tag>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  )
}
