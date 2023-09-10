import React from "react";
import {Image, Box, Text, Link, SimpleGrid} from "@chakra-ui/react";
 
export default function Logo(props) {
    return (
        <Box {...props}>
            <SimpleGrid columns={2}>
                <Image src={'icon.png'} boxSize={"50px"}/>
 
            <Link href="/">
            <Text fontSize='17' fontWeight="bold" >
            ESGardener
            </Text>
        </Link>

            </SimpleGrid>
        </Box>
    );
}