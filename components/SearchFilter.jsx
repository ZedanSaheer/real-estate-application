import { useEffect, useState } from "react";
import { Flex, Select, Box, Text, Input, Icon, Button } from '@chakra-ui/react'
import {MdCancel} from 'react-icons/md'
import { useRouter } from "next/router";
import Image from "next/image";
import { filterData, getFilterValues } from "../utils/filterData";

const SearchFilter = () => {

    const [filters] = useState(filterData);
    const [searchTerm, setSearchTerm] = useState("");
    const [showSearch , setShowSearch] = useState(false);
    const [showSearchBox , setShowSearchBox] = useState(false);
    const router = useRouter();

    const searchProperties = (filterValues) => {
            const path = router.pathname;
            const {query} = router;

            const values = getFilterValues(filterValues);

            values.forEach((item)=>{
                query[item.name]=item.value;
            })

            router.push({
                pathname: path,query
            })
        }

    return (
        <Flex bg="gray.100" p="4" justifyContent="center" flexWrap="wrap">
            {filters.map((filter) => (
                <Box key={filter.queryName}>
                    <Select
                        placeholder={filter.placeholder}
                        w="fit-content"
                        p="2"
                        onChange={(e) => searchProperties({ [filter.queryName]: e.target.value })}>
                        {filter?.items?.map((item) => (
                            <option value={item.value} key={item.value}>{item.name}</option>
                        ))}
                    </Select>
                </Box>
            ))}
        <Flex flexDirection="column" alignItems="center" justifyContent="center">
            <Button
                border="1px"
                borderColor="gray.200"
                onClick={()=>setShowSearch(value=>!value)}
                >
                Search Location
            </Button>
            {showSearch && <Flex flexDirection="column" pos="relative" paddingTop="2">
                <Flex>
                    <Input type="text" w="300px" onChange={(e)=>setSearchTerm(e.target.value)} placeholder="Search Locations" value={searchTerm}/>
                    <Icon as={MdCancel} pos="absolute" right="5"
                    top="5" zIndex="100" cursor="pointer" onClick={()=>setSearchTerm("")}/>
                </Flex>
            </Flex>}
        </Flex>
        </Flex>
    )
}

export default SearchFilter