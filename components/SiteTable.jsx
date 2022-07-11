import React from 'react';
import { Box, Link } from '@chakra-ui/react';
import { Table, Tr, Th, Td } from './Table';
import NextLink from 'next/link';
import { parseISO, format } from 'date-fns';

const SiteTable = ({ sites }) => {
  return (
    <Table>
      <thead>
        <Tr>
          <Th>Name</Th>
          <Th>Site Link</Th>
          <Th>Feedback Link</Th>
          <Th>Date Added</Th>
          <Th>{''}</Th>
        </Tr>
      </thead>
      <tbody>
        {sites.map(({ id, data }) => (
          <Box as='tr' key={data.url}>
            <Td fontWeight='medium'>{data.name}</Td>
            <Td>{data.url}</Td>
            <Td>
              <NextLink href='/p/[siteId]' passHref as={`/p/${id}`}>
                <Link color='blue.500' fontWeight='medium'>
                  View Feedback
                </Link>
              </NextLink>
            </Td>
            <Td>{format(parseISO(data.createdAt), 'PPpp')}</Td>
          </Box>
        ))}
      </tbody>
    </Table>
  );
};

export default SiteTable;
