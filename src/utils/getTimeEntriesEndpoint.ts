import { Person } from '../models/Person';
import getEndpointUrl from './getEndpointUrl';

const timeEntriesEndpoint = process.env.REACT_APP_TIME_ENTRIES_ENDPOINT as string;

export const getTimeEntriesEndpointFilters = (person: Person) => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const formattedTomorrow = tomorrow.toISOString().split('T')[0];

  const yesterday = new Date(today);
  yesterday.setDate(tomorrow.getDate() - 1);
  const formattedYesterday = yesterday.toISOString().split('T')[0];

  const todayFilter = `&filter[after]=${formattedYesterday}&filter[before]=${formattedTomorrow}`;
  return `?filter[person_id]=${person.id}${todayFilter}`;
};

const getTimeEntriesEndpoint = (): string => getEndpointUrl(timeEntriesEndpoint);

export default getTimeEntriesEndpoint;
