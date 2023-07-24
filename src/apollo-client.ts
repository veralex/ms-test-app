
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const baseUrl = process.env.REACT_APP_GQL_URI || 'https://graphql.contentful.com/content/v1';
const space = process.env.REACT_APP_GQL_SPACE;
const env = process.env.REACT_APP_GQL_ENV || 'master';
const apiKey = process.env.REACT_APP_GQL_API_KEY;

const uri = `${baseUrl}/spaces/${space}/environments/${env}?access_token=${apiKey}`;

const link = createHttpLink({
  uri,
  credentials: 'same-origin',
  
  useGETForQueries: true
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;