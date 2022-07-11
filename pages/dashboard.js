import React from 'react';
import useSWR from 'swr';

import SiteTableSkeleton from '@components/SiteTableSkeleton';
import DashboardShell from '@components/DashboardShell';
import EmptyState from '@components/EmptyState';
import SiteTable from '@components/SiteTable';
import { useAuth } from '@lib/auth';
import fetcher from '@lib/fetcher';

const dashboard = () => {
  const { user } = useAuth();
  const { data } = useSWR(user ? ['/api/sites', user.token] : null, fetcher);
  if (!data)
    return (
      <DashboardShell>
        <SiteTableSkeleton />;
      </DashboardShell>
    );

  return (
    <DashboardShell>
      {data.sites.length !== 0 ? (
        <SiteTable sites={data.sites} />
      ) : (
        <EmptyState />
      )}
    </DashboardShell>
  );
};

export default dashboard;
