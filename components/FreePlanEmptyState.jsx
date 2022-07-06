import React from 'react';
import { Heading, Box, Text, Button } from '@chakra-ui/react';
import DashboardShell from './DashboardShell';

const FreePlanEmptyState = () => {
  return (
    <DashboardShell>
      <Box width='100%' backgroundColor='white' p={8} borderRadius='8px'>
        <Heading size='md' as='h2'>
          Get feedback on your site instantly
        </Heading>
        <Text>Start today, then grow with us 🌱</Text>
        <Button variant='solid' size='md'>
          Upgrade to Starter
        </Button>
      </Box>
    </DashboardShell>
  );
};

export default FreePlanEmptyState;
