import React from 'react';
import useFetch from '../../../hooks/useFetch';
import { Person } from '../../../models/Person';
import { TimeEntryResponseModel } from '../../../models/TimeEntry';
import getTimeEntriesEndpoint, {
  getTimeEntriesEndpointFilters,
} from '../../../utils/getTimeEntriesEndpoint';
import Button from '../../core/Button/Button';
import Table, { TableBodyField } from '../../shared/Table/Table';

interface EntriesTableProps {
  person: Person;
}

const tableHead = [
  { text: 'Actions' },
  { text: 'Date' },
  { text: 'Service' },
  { text: 'Person' },
  { text: 'Note' },
  { text: 'Time' },
];

const EntriesTable: React.FC<EntriesTableProps> = ({ person }) => {
  const { data, makeRequest, isLoading, refetch } = useFetch<TimeEntryResponseModel>({
    endpoint: `${getTimeEntriesEndpoint()}${getTimeEntriesEndpointFilters(person)}`,
    immediate: true,
  });

  const handleDeleteEntry = (timeEntryId: string) => {
    makeRequest({ method: 'DELETE', endpoint: `${getTimeEntriesEndpoint()}/${timeEntryId}` }).then(
      refetch,
    );
  };

  const mapTimeEntriesToTableBody = (
    timeEntries: TimeEntryResponseModel | null,
  ): TableBodyField[][] =>
    (timeEntries?.data || []).map((entry) => {
      const serviceName =
        timeEntries?.included.find((inc) => inc.id === entry.relationships.service.data.id)
          ?.attributes.name || '';

      const personName = `${person.attributes.first_name}  ${person.attributes.last_name}`;

      return [
        {
          component: <Button onClick={() => handleDeleteEntry(entry.id)} text="delete" />,
          id: `delete-${entry.id}`,
        },
        { text: entry.attributes.date, id: `date-${entry.id}` },
        {
          text: serviceName,
          id: `service-${entry.id}`,
        },
        {
          text: personName,
          id: `person-${entry.id}`,
        },
        { text: entry.attributes.note, id: `note-${entry.id}` },
        { text: entry.attributes.time, id: `time-${entry.id}` },
      ];
    });

  const handlePrevClick = () => {
    makeRequest({
      query: `?filter[person_id]=271497`,
    });
  };

  const handleNextClick = () => {
    makeRequest();
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Table tableHead={tableHead} tableBody={mapTimeEntriesToTableBody(data)} />

      <Button text="Prev" onClick={handlePrevClick} />
      <Button text="next" onClick={handleNextClick} />
    </div>
  );
};

export default EntriesTable;
