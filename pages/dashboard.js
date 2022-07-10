import EmptyState from '@components/EmptyState';
import React from 'react';
import { useAuth } from '@lib/auth';
import SiteTableSkeleton from '@components/SiteTableSkeleton';
import DashboardShell from '@components/DashboardShell';

const dashboard = () => {
  const auth = useAuth();

  if (!auth.user)
    return (
      <DashboardShell>
        <SiteTableSkeleton />;
      </DashboardShell>
    );

  return (
    <DashboardShell>
      <EmptyState />;
    </DashboardShell>
  );
};

export default dashboard;
