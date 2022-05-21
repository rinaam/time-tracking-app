import React from 'react';
import EntriesTable from '../components/features/EntriesTable/EntriesTable';
import MainLayout from '../components/shared/MainLayout/MainLayout';
import useFetch from '../hooks/useFetch';
import { OrganizationMembershipResponseModel } from '../models/OrganizationMembership';
import getEndpointUrl from '../utils/getEndpointUrl';

const organizationMembershipEndpoint = process.env
  .REACT_APP_ORGANIZATION_MEMBERSHIP_ENDPOINT as string;

const HomePage = () => {
  const { data, isLoading } = useFetch<OrganizationMembershipResponseModel>({
    endpoint: getEndpointUrl(organizationMembershipEndpoint),
    immediate: true,
  });

  if (isLoading) {
    return <div>loading ...</div>;
  }
  const person = data?.included.find((item) => item.type === 'people');

  return <MainLayout>{person && <EntriesTable person={person} />}</MainLayout>;
};

export default HomePage;
