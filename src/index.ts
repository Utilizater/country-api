import express from 'express';
import { getCountries } from './gql';
import { isCountyCode, getStatesString } from './utils';
import { GetCountryResponse } from './types';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/GetCountryDetails/:countryCode', async (req, res) => {
  try {
    const { countryCode } = req.params;
    if (!isCountyCode(countryCode)) {
      res.status(400);
      res.send('Incorrect country code');
      return;
    }

    const data = await getCountries(countryCode);

    const { name = '', capital = '', states = [] } = data?.country ?? {};
    const response: GetCountryResponse = {
      name,
      capital,
      state_names: await getStatesString(states),
    };

    if (name === '') {
      res.status(204);
    }

    res.send(response);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send('Something went wrong');
  }
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
