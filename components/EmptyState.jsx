import React from 'react';
import { Heading, Text, Flex } from '@chakra-ui/react';
import AddSiteModal from './AddSiteModal';

const EmptyState = () => {
  return (
    <Flex
      width='100%'
      backgroundColor='white'
      borderRadius='8px'
      p={16}
      justify='center'
      align='center'
      direction='column'
    >
      <Heading size='lg' mb={2}>
        You haven't added any sites.
      </Heading>
      <Text mb={4}>Welcome, let's get started</Text>
      <AddSiteModal />
    </Flex>
  );
};

export default EmptyState;