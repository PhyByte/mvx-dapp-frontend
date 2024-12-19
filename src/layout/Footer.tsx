import { Box, Flex, Link } from '@chakra-ui/react';

const Footer = () => (
  <Flex
    as="footer"
    align="center"
    justify="center"
    wrap="wrap"
    padding="2"
    bg={'brand.main'}
    position="fixed"
    bottom="0"
    width="100%"
    zIndex="1000"
  >
    <Box>
      Made with{' '}
      <span role="img" aria-label="heart">
        ❤️
      </span>{' '}
      by{' '}
      <Link
        href="https://linktr.ee/phybyte"
        target="_blank"
        rel="noopener noreferrer"
        color="white"
        _hover={{ textDecor: 'underline' }}
      >
        Phybyte
      </Link>
    </Box>
  </Flex>
);

export default Footer;
