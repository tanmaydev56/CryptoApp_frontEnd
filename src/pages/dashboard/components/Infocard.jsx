import { Button, Tag, Text } from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/Customcard";

const InfoCard = ({ imgUrl, text, tagText, inverted }) => {
  return (
    <CustomCard   height="100px" p="10px" textAlign="center"
      bgColor={inverted ? "purple" : "white"}
      bgImage={imgUrl}
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <Tag ml="-480px"
        color={inverted ? "black.80" : "white"}
        bg={inverted ? "white" : "black.60"}
        borderRadius="full"

        
      >
        {tagText}
      </Tag>
      <Text
        mt="4"
        fontWeight="medium"
        textStyle="h5"
        color={inverted ? "white" : "black.80"}
        
      >
        {text}
      </Text>
    </CustomCard>
  );
};

export default InfoCard;

// jabh multiple pages chhahiye apni site me toh react router ka use krna hoga