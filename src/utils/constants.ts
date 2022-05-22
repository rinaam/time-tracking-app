// eslint-disable-next-line import/prefer-default-export
export const ENDPOINTS = {
  BASE_URL: 'https://api.productive.io',
  TIME_ENTRIES_ENDPOINT: '/api/v2/time_entries',
  ORGANIZATION_MEMBERSHIP_ENDPOINT: '/api/v2/organization_memberships',
  SERVICES_ENDPOINT: '/api/v2/services',
};

export const TABLE_HEAD = [
  { text: 'Actions' },
  { text: 'Date' },
  { text: 'Service' },
  { text: 'Person' },
  { text: 'Note' },
  { text: 'Time' },
];

export const ENV = {
  ORG_ID: process.env.REACT_APP_ORG_ID as string,
  AUTH_TOKEN: process.env.REACT_APP_AUTH_TOKEN as string,
};
