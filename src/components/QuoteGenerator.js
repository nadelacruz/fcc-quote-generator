import React, { useState } from 'react';
import { Button, Text, Box, IconButton } from '@chakra-ui/react';
import { theQuotes } from '../data/QuotesArray';
import randomcolor from 'randomcolor';
import { FaTwitter, FaTumblr } from 'react-icons/fa';

const QuoteGenerator = () => {
    const color = randomcolor();
    const [quotes, setQuotes] = useState(theQuotes);
    const generateQuoteIndex = Math.floor(Math.random() * quotes.length);
    const handleGenerateButton = () => {
        setQuotes([...quotes]);
    }
    return (
        <Box backgroundColor={color}
        minH="100vh"
        padding={{sm:"150px 2em 10px", md: "150px 6em 10px", lg: "150px 18em 10px", xl: "150px 24em 10px"}}
        >
            <Box 
            backgroundColor="white"
            minH="300px"
            padding="50px"
            >
                <Box display="flex"
                flexDirection="column"
                >
                    <Box 
                    display="flex"
                    flexDirection="column">
                        <Text fontSize="3xl" color={color}>{quotes[generateQuoteIndex].quote}</Text>
                        <Text alignSelf="flex-end" fontSize="md" padding="20px" color={color}>- {quotes[generateQuoteIndex].author}</Text>
                    </Box>
                    <Box display="flex"
                    justifyContent="space-between"
                    >
                        <Box>
                            <IconButton as="a" target="_blank" variant="outline" href="https://chakra-ui.com" aria-label="Twitter" icon={<FaTwitter/>} margin="0px 5px" backgroundColor={color} color="white"/>
                            <IconButton aria-label="Tumblr" icon={<FaTumblr/>} backgroundColor={color} color="white"/>
                        </Box>
                        <Button backgroundColor={color} color="white" onClick={handleGenerateButton}>New Quote</Button>
                    </Box>
                </Box>
            </Box>
      </Box>
    );
}
 
export default QuoteGenerator;