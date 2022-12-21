import { gql, request } from 'graphql-request';
import * as dotenv from 'dotenv';
dotenv.config();

export const countryGQL = gql`
  query country($code: ID!) {
    country(code: $code) {
      name
      capital
      states {
        name
      }
    }
  }
`;

const GRAPHQL_URL = process.env.GRAPHQL_URL as string;

console.log('GRAPHQL_URL', GRAPHQL_URL);

export const getCountries = async (
  countyCode: string
): Promise<{
  country: {
    name: string;
    capital: string;
    states: {
      name: string;
    }[];
  };
}> => {
  const variables = { code: countyCode };
  return await request(GRAPHQL_URL, countryGQL, variables);
};
