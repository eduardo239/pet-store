import { useState } from "react";
// chakra
import {
  Box,
  Center,
  Flex,
  IconButton,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
// constantes
import {
  COLOR_PRIMARY,
  COLOR_WHITE,
  COLOR_WHITE_ALTERNATE,
} from "../../helper/constants/colors";
import {
  SPACING_SMALL,
  SPACING_XSMALL,
} from "../../helper/constants/dimensions";
// assets
import defaultImage from "../../assets/images/logo-no-background.png";

const PSGallery = ({ item }) => {
  const [actualIndexImage, setActualIndexImage] = useState(0);

  let photo = item && item.photo ? item.photo : null;
  let photos = [];

  if (item && item.photo && photo.includes(",")) {
    photos = photo.split(",");
    photo = photos[actualIndexImage];
  }

  if (item)
    return (
      <Box bg="#dff">
        <Center>
          <Image
            mb={SPACING_SMALL}
            // boxSize="350px"
            objectFit="cover"
            src={item.photo ? item.photo : defaultImage}
          />
        </Center>
        <Flex flexWrap="wrap" gap={SPACING_XSMALL} justifyContent="center">
          {photos?.length > 0 &&
            photos.map((photo, index) => {
              return (
                <IconButton
                  key={index}
                  rounded="full"
                  onClick={() => setActualIndexImage(index)}
                  bg={
                    index === actualIndexImage
                      ? COLOR_PRIMARY
                      : COLOR_WHITE_ALTERNATE
                  }
                  _hover={{
                    bg: COLOR_WHITE,
                  }}
                >
                  <Text fontSize="sm" color="gray.800">
                    {index + 1}
                  </Text>
                </IconButton>
              );
            })}
        </Flex>
      </Box>
    );
  else
    return (
      <Stack bg={COLOR_WHITE_ALTERNATE} p={SPACING_SMALL}>
        <Center>Nenhuma foto encontrada</Center>
      </Stack>
    );
};

export default PSGallery;
