import { AddEntryData } from '../components/features/TimeEntryForm/TimeEntryForm';
import { Person } from '../models/Person';

interface TimeEntryBody {
  data: {
    type: string;
    attributes: {
      note: string;
      date: string;
      time: string;
    };
    relationships: {
      person: {
        data: {
          type: string;
          id: string;
        };
      };
      service: {
        data: {
          type: string;
          id: string;
        };
      };
    };
  };
}

const getTimeEntryBody = (addEntryData: AddEntryData, person: Person): TimeEntryBody => ({
  data: {
    type: 'time_entries',
    attributes: {
      note: addEntryData.note,
      date: new Date().toISOString().split('T')[0],
      time: addEntryData.time,
    },
    relationships: {
      person: {
        data: {
          type: 'people',
          id: person?.id,
        },
      },
      service: {
        data: {
          type: 'services',
          id: addEntryData.service,
        },
      },
    },
  },
});

export default getTimeEntryBody;
