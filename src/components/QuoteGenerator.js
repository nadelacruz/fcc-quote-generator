import React, { useState } from 'react';
import { Button, Text, Box, IconButton } from '@chakra-ui/react';
import { theQuotes } from '../data/QuotesArray';
import randomcolor from 'randomcolor';
import { FaTwitter, FaTumblr } from 'react-icons/fa';

const QuoteGenerator = () => {
    const color = randomcolor();
    const [quotes, setQuotes] = useState(theQuotes);
    const [randomIndex, setRandomIndex] = useState(Math.floor(Math.random() * quotes.length));
    const handleGenerateButton = () => {
        setQuotes([...quotes]);
        setRandomIndex(Math.floor(Math.random() * quotes.length));
    }
    const tweetURL = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${quotes[randomIndex].quote.replace(/\s\s+/g, ' ').replace(/\s/g, '%20')}"%20${quotes[randomIndex].author.replace(/\s\s+/g, ' ').replace(/\s/g, '%20')}`
    const tumblrURL = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${quotes[randomIndex].author.replace(/\s\s+/g, ' ').replace(/\s/g, '%20')}&content=${quotes[randomIndex].quote.replace(/\s\s+/g, ' ').replace(/\s/g, '%20')}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`
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
                        <Text fontSize="3xl" color={color}>{quotes[randomIndex].quote}</Text>
                        <Text alignSelf="flex-end" fontSize="md" padding="20px" color={color}>- {quotes[randomIndex].author}</Text>
                    </Box>
                    <Box display="flex"
                    justifyContent="space-between"
                    >
                        <Box>
                            <IconButton as="a" target="_self" variant="outline" href={tweetURL} aria-label="Twitter" icon={<FaTwitter/>} margin="0px 5px" backgroundColor={color} color="white"/>
                            <IconButton as="a" target="_self" variant="outline" href={tumblrURL} aria-label="Tumblr" icon={<FaTumblr/>} backgroundColor={color} color="white"/>
                        </Box>
                        <Button backgroundColor={color} color="white" onClick={handleGenerateButton}>New Quote</Button>
                    </Box>
                </Box>
            </Box>
      </Box>
    );
}
 
export default QuoteGenerator;