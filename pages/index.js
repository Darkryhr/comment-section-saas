import React from 'react';
import { Button, Heading, Flex } from '@chakra-ui/react';

import { useAuth } from '@lib/auth';

const Home = () => {
  const auth = useAuth();
  return (
    <div>
      <Flex
        direction='column'
        as='main'
        align='center'
        justify='center'
        w='full'
        h='100vh'
      >
        <Heading>Comment Section</Heading>
        <div>
          {auth?.user ? (
            <Button mt={4} size='sm' onClick={e => auth.signout()}>
              Sign Out
            </Button>
          ) : (
            <Button mt={4} size='sm' onClick={e => auth.signinWithGithub()}>
              Sign In
            </Button>
          )}
        </div>
      </Flex>
    </div>
  );
};

export default Home;
