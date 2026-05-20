import {
  Box,
  Flex,
  HStack,
  IconButton,
  useColorMode,
  useColorModeValue,
  Text,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerCloseButton,
  VStack,
  useDisclosure,
} from '@chakra-ui/react'
import { FiSun, FiMoon, FiMenu } from 'react-icons/fi'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { navItems } from '../../data/content'

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()
  const bg = useColorModeValue('rgba(255,255,255,0.8)', 'rgba(13,17,23,0.8)')
  const borderColor = useColorModeValue('#d0d7de', '#30363d')
  const logoColor = useColorModeValue('#24292f', '#e6edf3')
  const mutedColor = useColorModeValue('#57606a', '#8b949e')
  const drawerBg = useColorModeValue('#ffffff', '#161b22')
  const drawerTextColor = useColorModeValue('#24292f', '#c9d1d9')
  const { isOpen, onOpen, onClose } = useDisclosure()

  const sectionIds = navItems.map((item) => item.toLowerCase())
  const activeId = useScrollSpy(sectionIds)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    onClose()
  }

  return (
    <Box
      as="nav"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={100}
      bg={bg}
      backdropFilter="blur(12px)"
      borderBottom="1px solid"
      borderColor={borderColor}
    >
      <Flex
        maxW="1100px"
        mx="auto"
        px={{ base: 6, md: 8 }}
        h="64px"
        align="center"
        justify="space-between"
      >
        <Text
          fontWeight={700}
          fontSize="lg"
          cursor="pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          color={logoColor}
          fontFamily="mono"
        >
          LN
        </Text>

        <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
          {navItems.map((item) => (
            <Text
              key={item}
              fontSize="sm"
              fontWeight={500}
              cursor="pointer"
              onClick={() => scrollTo(item.toLowerCase())}
              color={activeId === item.toLowerCase() ? 'brand.400' : mutedColor}
              _hover={{ color: 'brand.400' }}
              transition="color 0.2s"
              position="relative"
              _after={
                activeId === item.toLowerCase()
                  ? {
                      content: '""',
                      position: 'absolute',
                      bottom: '-4px',
                      left: 0,
                      right: 0,
                      height: '2px',
                      bg: 'brand.400',
                      borderRadius: 'full',
                    }
                  : undefined
              }
            >
              {item}
            </Text>
          ))}
        </HStack>

        <HStack spacing={2}>
          <IconButton
            aria-label="Toggle color mode"
            icon={colorMode === 'dark' ? <FiSun /> : <FiMoon />}
            onClick={toggleColorMode}
            variant="ghost"
            size="sm"
            color={mutedColor}
            _hover={{ color: 'brand.400' }}
          />
          <IconButton
            aria-label="Open menu"
            icon={<FiMenu />}
            onClick={onOpen}
            variant="ghost"
            size="sm"
            display={{ base: 'flex', md: 'none' }}
            color={mutedColor}
          />
        </HStack>
      </Flex>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg={drawerBg} maxW="280px">
          <DrawerCloseButton color={mutedColor} />
          <DrawerBody pt={16}>
            <VStack spacing={6} align="start">
              {navItems.map((item) => (
                <Text
                  key={item}
                  fontSize="lg"
                  fontWeight={500}
                  cursor="pointer"
                  onClick={() => scrollTo(item.toLowerCase())}
                  color={
                    activeId === item.toLowerCase() ? 'brand.400' : drawerTextColor
                  }
                  _hover={{ color: 'brand.400' }}
                >
                  {item}
                </Text>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}
