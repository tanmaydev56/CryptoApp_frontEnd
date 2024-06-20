import { IoMdMail } from "react-icons/io";
import Dashboardlayout from "../../components/Dashboardlayout";
import ContactCard from "./components/ContactCard";
import SupportCard from "./components/Supportcard";
import { AiTwotoneMessage } from "react-icons/ai";
import Infocard from "../dashboard/components/Infocard"
import { Stack,Box } from "@chakra-ui/react";
const Support = () => {
  return (
    <Dashboardlayout title="Support" >
      <Box 
        px="40px"
        pb="20px"
        pt="10px"
      >
      <Stack spacing="5rem">
        <SupportCard
          icon={IoMdMail}
          leftComponent={<ContactCard />}
          title="Contact Us"
          text=" Have a question or just want to know more? Feel free to reach out to
          us."
        />
        <SupportCard
          icon={AiTwotoneMessage}
          leftComponent={
            <Infocard
            
              inverted={true}
              tagText="Contact"
              imgUrl="/Visual.svg"
              text="Learn more about our real estate, mortgage, and  corporate account services"
            />
          }
          title="Live Chat"
          text=" Don’t have time to wait for the answer? Chat with us now."
        />
      </Stack>
      </Box>
    </Dashboardlayout>
  );
};

export default Support;