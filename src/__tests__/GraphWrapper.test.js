import React from 'react';
import { render } from '@testing-library/react';
import GraphWrapper from '../components/pages/DataVisualizations/GraphWrapper';
import { Provider } from 'react-redux';
import {MemoryRouter } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit';

import vizReducer from '../state/reducers/vizReducer';
import reducer from '../state/reducers';

    jest.mock('axios');


describe('<GraphWrapper/> test suite', () => {
  test('page renders', () => {
    const store = configureStore({ reducer: reducer });
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/graphs/all/time-series']}>
            <GraphWrapper set_view={() => {}} />
          </MemoryRouter>
      </Provider>
      
    );
  });
});
