import React from 'react';
import {
  Box,
  HStack,
  Heading,
  Stack,
  VStack,
  Text,
  Button,
} from '@chakra-ui/react';
import '../Home/home.css';
import { Image } from '@chakra-ui/react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { GrShare } from 'react-icons/gr';
import { AiFillGithub } from 'react-icons/ai';
import Tech from '../../components/animations/TechStack/Tech';
const image = [
  'https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg',
  'https://media.designrush.com/inspiration_images/134557/conversions/_1505427129_791_netflix.001-preview.jpg',
  
];
const Netflix = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems={['center', 'baseline']}
          spacing={['16', '3rem']}
          marginTop={['13rem', '0rem']}
        >
          <VStack
            width={'full'}
            alignItems={['center', 'center']}
            spacing={['3', '7']}
            marginTop={['-10rem', '5rem']}
          >
            <Heading
              textAlign={'center'}
              children="Netfilx Clone"
              size={['lg', 'xl']}
              marginBottom={'-4'}
              color={'red'}
            />
            <Text
              fontSize={['lg', 'md']}
              width={['', '700px']}
              textAlign={'center'}
              children="This project is a simplified front end clone of Netflix. It was created with React and CSS (Grid and Flexbox). It uses TMDB API to search for movies and display details. It use axios for get request to get information about movies and shows."
            />
            <Image
              src="https://i.pinimg.com/originals/25/ae/6c/25ae6c3bbc39e96c2948e863e6fe61c4.gif"
              objectFit={'cover'}
              borderRadius={'1rem'}
              boxSize={['248px', '200px']}
              borderRight={'1rem'}
             
            />
            <a href="https://my-tv-two.vercel.app/" target='_blank' rel="noreferrer">https://my-tv-two.vercel.app/</a>
          </VStack>
          <VStack
            width={'full'}
            alignItems={['center', 'center']}
            spacing={['3', '6']}
            marginTop={['-10rem', '5rem']}
          >
            {/* <Heading
              textAlign={'center'}
              children="My Contibution"
              size={['lg', 'md']}
            /> */}
            {/* <Text
              fontSize={['lg', 'md']}
              width={['', '700px']}
              textAlign={'center'}
              children="This project totaly made by me."
            /> */}
            <HStack>
              <a href="https://my-tv-two.vercel.app/" target='_blank' rel="noreferrer">
                <Button colorScheme="linkedin" minW={['40', '40']}>
                  Live Link 
                </Button>
              </a>
              <a href="https://github.com/akashpatelknit/MyTV.git" target='_blank' rel="noreferrer">
                <Button colorScheme="linkedin" minW={['40', '40']}
                letterSpacing={'2'}
                >
                  Source Code
                </Button>
              </a>
            </HStack>
          </VStack>
          <VStack
            width={'full'}
            alignItems={['center', 'center']}
            spacing={['3', '6']}
            marginTop={['-10rem', '5rem']}
          >
            <Heading
              textAlign={'center'}
              children="Outcomes"
              size={['lg', 'md']}
            />
          </VStack>
        </Stack>
      </div>
      <Stack justifyContent={'center'} width={['', '4xl']} margin={'auto'}
      mb={['','6']}
      >
        <ResponsiveMasonry columnsCountBreakPoints={{ 100: 1, 600: 2, 800: 2 }}>
          <Masonry gutter={'1rem'}>
            {image.map((item, i) => (
              <Box>
                <Image
                  borderRadius={'1rem'}
                  src={item}
                  width={'80%'}
                  margin={['2rem', '1rem']}
                />
              </Box>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </Stack>
      {/* <Tech /> */}
    </section>
  );
};

export default Netflix;
