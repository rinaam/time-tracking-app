import { ENDPOINTS } from './constants';

const base = ENDPOINTS.BASE_URL;

const getEndpointUrl = (endpoint: string): string => base + endpoint;

export default getEndpointUrl;
