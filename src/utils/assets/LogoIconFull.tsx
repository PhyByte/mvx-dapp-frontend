import { Box, Image, ImageProps } from '@chakra-ui/react';

import { APP_IMAGES } from '@/assets/app-images';

export function LogoIconFull({ boxSize = 150, ...others }: ImageProps) {
  return (
    <Box>
      <Image src={APP_IMAGES.logoFull} {...others} />
    </Box>
  );
}
