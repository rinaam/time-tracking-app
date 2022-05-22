import React, { useEffect, useState } from 'react';
import EntriesTable from '../components/features/EntriesTable/EntriesTable';
import TimeEntryForm, { AddEntryData } from '../components/features/TimeEntryForm/TimeEntryForm';
import MainLayout from '../components/shared/MainLayout/MainLayout';
import useFetch from '../hooks/useFetch';
import { OrganizationMembershipResponseModel } from '../models/OrganizationMembership';
import { Person } from '../models/Person';
import { ServicesResponseModel } from '../models/Services';
import { TimeEntryResponseModel } from '../models/TimeEntry';
import { ENDPOINTS } from '../utils/constants';
import getEndpointUrl from '../utils/getEndpointUrl';
import getTimeEntriesEndpoint, {
  getTimeEntriesEndpointFilters,
} from '../utils/getTimeEntriesEndpoint';
import getTimeEntryBody from '../utils/getTimeEntryBody';

const HomePage = () => {
  /**
   * states start
   */
  const [person, setPerson] = useState<Person>();
  /**
   * states end
   */

  /**
   * Fetchers start
   */
  const { data: organizationData } = useFetch<OrganizationMembershipResponseModel>({
    endpoint: getEndpointUrl(ENDPOINTS.ORGANIZATION_MEMBERSHIP_ENDPOINT),
    immediate: true,
  });

  const { data: servicesData } = useFetch<ServicesResponseModel>({
    endpoint: getEndpointUrl(ENDPOINTS.SERVICES_ENDPOINT),
    immediate: true,
  });

  const { data: timeEntryData, makeRequest: timeEntryRequest } = useFetch<TimeEntryResponseModel>({
    endpoint: getTimeEntriesEndpoint(),
  });

  /**
   * Fetchers end
   */

  /**
   * Functions start
   */

  const getTodayTimeEntries = () => {
    timeEntryRequest({
      endpoint: `${getTimeEntriesEndpoint()}${getTimeEntriesEndpointFilters(person as Person)}`,
    });
  };

  const handleDeleteEntry = (timeEntryId: string) => {
    timeEntryRequest({
      method: 'DELETE',
      endpoint: `${getTimeEntriesEndpoint()}/${timeEntryId}`,
    }).then(getTodayTimeEntries);
  };

  const handleAddEntry = (addEntryData: AddEntryData) => {
    timeEntryRequest({
      method: 'POST',
      body: getTimeEntryBody(addEntryData, person as Person),
    }).then(getTodayTimeEntries);
  };

  /**
   * Functions end
   */

  /**
   * effects start
   * set person only when we have org data
   */
  useEffect(() => {
    if (organizationData) {
      const organizationPerson = organizationData?.included.find(
        (item) => item.type === 'people',
      ) as Person;
      setPerson(organizationPerson);
    }
  }, [organizationData]);

  /**
   * load time entries only when we have person
   */
  useEffect(() => {
    if (person) {
      timeEntryRequest({
        endpoint: `${getTimeEntriesEndpoint()}${getTimeEntriesEndpointFilters(person as Person)}`,
      });
    }
  }, [person]);

  /**
   * effects end
   */

  return (
    <MainLayout>
      {person && (
        <>
          <TimeEntryForm services={servicesData} onAddEntry={handleAddEntry} />
          <EntriesTable
            person={person}
            timeEntries={timeEntryData}
            onDeleteEntry={handleDeleteEntry}
          />
        </>
      )}
    </MainLayout>
  );
};

export default HomePage;
