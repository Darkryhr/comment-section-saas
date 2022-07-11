import React, { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { Box, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

import { useAuth } from '@lib/auth';
import { createComment } from '@lib/db';
import { getAllComments, getAllSites } from '@lib/db-admin';
import Feedback from '@components/Feedback';

export const getStaticProps = async ctx => {
  const siteId = ctx.params.siteId;
  const { comments } = await getAllComments(siteId);
  return {
    props: {
      comments,
    },
    revalidate: 1,
  };
};

export const getStaticPaths = async () => {
  const { sites } = await getAllSites();
  return {
    paths: sites.map(site => ({
      params: { siteId: site.id.toString() },
    })),
    fallback: false,
  };
};

const SiteComments = ({ comments }) => {
  const auth = useAuth();
  const router = useRouter();
  const inputEl = useRef(null);
  const [allComments, setAllComments] = useState(comments);
  const onSubmit = e => {
    e.preventDefault();
    const newComment = {
      author: auth.user.name,
      authorId: auth.user.uid,
      createdAt: new Date().toISOString(),
      provider: auth.user.provider,
      siteId: router.query.siteId,
      status: 'PENDING',
      text: inputEl.current.value,
    };

    setAllComments([newComment, ...allComments]);
    createComment(newComment);
  };
  return (
    <Box display='flex' flexDir='column' width='full' maxW='768px' m='0 auto'>
      <Box as='form' onSubmit={onSubmit}>
        <FormControl my={8}>
          <FormLabel htmlFor='comment'>Comment</FormLabel>
          <Input ref={inputEl} id='comment' placeholder='Leave a comment' />
          <Button mt={4} type='submit' fontWeight='medium' fontSize='sm'>
            Add Comment
          </Button>
        </FormControl>
      </Box>
      {allComments.map(comment => (
        <Feedback key={comment.id} {...comment} />
      ))}
    </Box>
  );
};

export default SiteComments;
