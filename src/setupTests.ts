// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import oranizationMembershipsResponse from './tests/fixtures/organizationMemberships';
import servicesFixture from './tests/fixtures/services';
import timeEntries from './tests/fixtures/timeEntries';

jest.useFakeTimers().setSystemTime(new Date('2022-05-21'));

// nice article https://kentcdodds.com/blog/stop-mocking-fetch

async function mockFetch(url: string) {
  switch (url) {
    case 'https://api.productive.io/api/v2/organization_memberships': {
      return {
        ok: true,
        status: 200,
        json: async () => oranizationMembershipsResponse,
      };
    }
    case 'https://api.productive.io/api/v2/services': {
      return {
        ok: true,
        status: 200,
        json: async () => servicesFixture,
      };
    }
    case 'https://api.productive.io/api/v2/time_entries?filter[person_id]=271497&filter[after]=2022-05-21&filter[before]=2022-05-22': {
      return {
        ok: true,
        status: 200,
        json: async () => timeEntries,
      };
    }

    default: {
      throw new Error(`Unhandled request: ${url}`);
    }
  }
}

// eslint-disable-next-line import/prefer-default-export
export const mockDeleteRequestRefetch = (timeEntryId: string) => async () => ({
  ok: true,
  status: 200,
  json: async () => ({
    ...timeEntries,
    data: timeEntries.data.filter((entry) => entry.id !== timeEntryId),
  }),
});

beforeAll(() => jest.spyOn(window, 'fetch'));
beforeEach(() => (window.fetch as jest.Mock).mockImplementation(mockFetch));
