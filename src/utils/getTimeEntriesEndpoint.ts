import { ENDPOINTS } from './constants';
import { Person } from '../models/Person';
import getEndpointUrl from './getEndpointUrl';

const timeEntriesEndpoint = ENDPOINTS.TIME_ENTRIES_ENDPOINT;

export const getTimeEntriesEndpointFilters = (person: Person) => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const formattedTomorrow = tomorrow.toISOString().split('T')[0];

  // yesterday is inclusive
  const yesterday = new Date(today);
  const formattedYesterday = yesterday.toISOString().split('T')[0];

  const todayFilter = `&filter[after]=${formattedYesterday}&filter[before]=${formattedTomorrow}`;
  return `?filter[person_id]=${person.id}${todayFilter}`;
};

const getTimeEntriesEndpoint = (): string => getEndpointUrl(timeEntriesEndpoint);

export default getTimeEntriesEndpoint;
