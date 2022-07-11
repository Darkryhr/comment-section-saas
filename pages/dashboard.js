import React from 'react';
import useSWR from 'swr';

import SiteTableSkeleton from '@components/SiteTableSkeleton';
import DashboardShell from '@components/DashboardShell';
import EmptyState from '@components/EmptyState';
import SiteTable from '@components/SiteTable';
import { fetcher } from '@lib/fetcher';
import { useAuth } from '@lib/auth';

const dashboard = () => {
  const auth = useAuth();
  const { data } = useSWR('/api/sites', fetcher);
  if (!data)
    return (
      <DashboardShell>
        <SiteTableSkeleton />;
      </DashboardShell>
    );

  return (
    <DashboardShell>
      {data.sites ? <SiteTable sites={data.sites} /> : <EmptyState />}
    </DashboardShell>
  );
};

export default dashboard;
