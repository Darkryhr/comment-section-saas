import EmptyState from '@components/EmptyState';
import React from 'react';
import { useAuth } from '@lib/auth';

const dashboard = () => {
  const auth = useAuth();

  if (!auth.user) return 'Loading...';

  return <EmptyState />;
};

export default dashboard;
