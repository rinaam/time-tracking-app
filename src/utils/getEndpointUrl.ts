const base = process.env.REACT_APP_BASE_URL;

const getEndpointUrl = (endpoint: string): string => base + endpoint;

export default getEndpointUrl;
