### Productive time entry app

#### Requirements

- Node version `16.15.0`
- npm version `8.5.5`

#### Pre requisite 

- copy your auth-token for productive app
- copy your Organization ID for productive app

#### Installation

```
git clone git@github.com:rinaam/time-tracking-app.git
cd time-tracking-app
npm ci
touch .env
```
- copy your `org-id` in `.env`
- copy your `auth-token` in `.env`
```.env
REACT_APP_ORG_ID=<YOUR-ORG-ID>
REACT_APP_AUTH_TOKEN=<YOUR-AUTH-TOKEN>
```

```.env
npm start
```

#### Testing

- Using [Jest](https://jestjs.io/) for tests along with [React testing library](https://testing-library.com/docs/react-testing-library/intro/)
- run test with

```
npm t
```

- Fetch requests are mocked in [setupTests.ts](./src/setupTests.ts);
- Used inspiration from Kent C Dods [article](https://kentcdodds.com/blog/stop-mocking-fetch)

#### Requests

- Created custom `useFetch` hook, inspired by [React Query](https://react-query.tanstack.com/overview), without all the extra functionality

#### Folder structure

- Inspired by [Infinum FE Handbook] (https://infinum.com/handbook/frontend/react/project-structure)

#### State management

- I didn't use any shared state management tool (Redux or Context) since I have one Page, so the children have direct access to the state
- All fetching logic is in [HomePage](./src/pages/index.tsx) 