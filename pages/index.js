import { Flex, Box, Text, Button } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { Property } from '../components/Property'

import { fetchApi, baseUrl } from '../utils/fetchApi'

export const Banner = ({ purpose, title, titleTwo, desc, descTwo, linkName, imageUrl, buttonText }) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt="Banner" />
    <Box>
      <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
      <Text fontSize="3xl" fontWeight="bold">{title} <br /> {titleTwo}</Text>
      <Text paddingBottom="3" paddingTop="3" fontSize="lg" fontWeight="medium" color="gray.700" >{desc} <br /> {descTwo}</Text>
      <Button fontSize="xl">
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
)

export default function Home({ propForRent, propForSale }) {

  return (
    <div>
      <Banner purpose="Rent a home"
        title="Rental homes for"
        titleTwo="Everyone"
        desc="Explore aparment villas and more"
        descTwo="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110798997/d9446cee36ba4f839c8fedd0e0b52208"
      />
      <Flex flexWrap="wrap" justifyContent="center">
        {propForRent.map((property) => {
          return <Property property={property} key={property.id} />
        })}
      </Flex>
      <Banner purpose="Buy a home"
        title="Find ,buy & own your"
        titleTwo="Dream home"
        desc="Explore aparment villas and more"
        descTwo="and more"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110798997/d9446cee36ba4f839c8fedd0e0b52208"
      />
      <Flex flexWrap="wrap" justifyContent="center">
        {propForSale.map((property) => {
          return <Property property={property} key={property.id} />
        })}
      </Flex>
    </div>
  )
}

export async function getStaticProps() {
  const propForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
  const propForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)

  return {
    props: {
      propForRent: propForRent?.hits,
      propForSale: propForSale?.hits,
    }
  }
}