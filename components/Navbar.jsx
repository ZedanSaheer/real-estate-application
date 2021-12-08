import Link from "next/link";
import {Menu , MenuButton , MenuList , MenuItem , Flex , Box , Spacer , IconButton} from '@chakra-ui/react';
import {FcMenu , FcHome , FcAbout} from 'react-icons/fc';
import {FiKey} from 'react-icons/fi';
import { BsSearch } from "react-icons/bs";

const Navbar = () => (
    <Flex p="2" borderBottom="1px" borderColor="gray.100">
        <Box fontSize="3xl" color="cyan.500" fontWeight="bold"> 
            <Link href="/" paddingLeft="2">Z.R.E.C</Link>
        </Box>
        <Spacer/>
        <Box>
            <Menu>
                <MenuButton as={IconButton} icon={<FcMenu/>} color="red.400" variant="outlined"/>
               <MenuList>
                   <Link href="/" passHref>
                        <MenuItem icon={<FcHome/>}>Home</MenuItem>
                   </Link>
                   <Link href="/search" passHref>
                        <MenuItem icon={<BsSearch/>}>Search</MenuItem>
                   </Link>
                   <Link href="/search?purpose-for-sale" passHref>
                        <MenuItem icon={<FcAbout/>}>Buy Property</MenuItem>
                   </Link>
                   <Link href="/search?purpose-for-rent" passHref>
                        <MenuItem icon={<FiKey/>}>Rent Property</MenuItem>
                   </Link>
               </MenuList>
            </Menu>
        </Box>
    </Flex>
)

export default Navbar