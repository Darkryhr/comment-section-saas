import React from 'react';
import { Button, Heading } from '@chakra-ui/react';

import { useAuth } from '@lib/auth';

const Home = () => {
  const auth = useAuth();
  return (
    <div>
      <Heading>Comment Section</Heading>
      <div>
        {auth?.user ? (
          <Button onClick={e => auth.signout()}>Sign Out</Button>
        ) : (
          <Button onClick={e => auth.signinWithGithub()}>Sign In</Button>
        )}
      </div>
    </div>
  );
};

export default Home;
