import React from 'react';
import { Person } from '../../../models/Person';
import { TimeEntryResponseModel } from '../../../models/TimeEntry';
import { TABLE_HEAD } from '../../../utils/constants';
import Button from '../../core/Button/Button';
import Table, { TableBodyField } from '../../shared/Table/Table';

interface EntriesTableProps {
  timeEntries?: TimeEntryResponseModel;
  person: Person;
  onDeleteEntry: (entryId: string) => void;
}

const EntriesTable: React.FC<EntriesTableProps> = ({ timeEntries, person, onDeleteEntry }) => {
  const mapTimeEntriesToTableBody = (entriesData?: TimeEntryResponseModel): TableBodyField[][] =>
    (entriesData?.data || []).map((entry) => {
      // this was very hard to figure out :(
      const serviceName =
        entriesData?.included.find((inc) => inc.id === entry.relationships.service.data.id)
          ?.attributes.name || '';

      const personName = `${person.attributes.first_name}  ${person.attributes.last_name}`;

      return [
        {
          component: <Button type="button" onClick={() => onDeleteEntry(entry.id)} text="delete" />,
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

  if (!timeEntries) {
    return <div>loading time entries</div>;
  }

  return <Table tableHead={TABLE_HEAD} tableBody={mapTimeEntriesToTableBody(timeEntries)} />;
};

export default EntriesTable;
