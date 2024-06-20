
import Dashboardlayout from "../../components/Dashboardlayout"
import { Flex, Grid, GridItem } from "@chakra-ui/react"
import Portfolio from "./components/Portfolio"
import Pricesection from "./components/Pricesection";
import Transaction from "./components/Transaction";
import Infocard from "./components/Infocard";

const Dashboard = () => {
  return (
    <Dashboardlayout 
      title="Dashboard"
    >
      <Grid gridTemplateColumns={{
        base:"repeate(1,1fr)",
        md:"repeate(2,1fr)"
      }}
      gap="6"
      p="1"
      >
        <GridItem
        colSpan={2}
        >    
          <Portfolio />
      
      </GridItem>
      <GridItem
       colSpan={1}
      ><Pricesection/></GridItem>
      <GridItem colSpan={1}><Transaction/></GridItem>
      <GridItem colSpan={1}><Infocard
      imgUrl="/Visual1.svg"
      tagText="Learn"
      text="Learn more about Loans – Keep your Bitcoin, access it’s value without selling it"
      inverted={false}
      /></GridItem>
      <GridItem  colSpan={1}><Infocard
      text="Learn more about our real estate, mortgage, and  corporate account services"
      imgUrl="/Visual.svg"
      tagText="Contact"
      inverted={true}
      
      
      /></GridItem>
      </Grid>

    </Dashboardlayout>
  );
}

export default Dashboard
