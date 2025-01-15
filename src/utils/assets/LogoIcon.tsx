import { Box, Image, ImageProps } from '@chakra-ui/react';

import { APP_IMAGES } from '@/assets/app-images';

export function LogoIcon({ boxSize = 12, ...others }: ImageProps) {
  return (
    <Box>
      <Image src={APP_IMAGES.logo} boxSize={boxSize} {...others} />
    </Box>
  );
}
