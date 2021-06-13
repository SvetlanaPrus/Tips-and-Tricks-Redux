/* Core */
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { ReactQueryDevtools } from 'react-query/devtools';

/* Components */
import { App } from './App';

/* Other */
import 'react-toastify/dist/ReactToastify.css';
import './theme/main.scss';
import { queryClient } from './lib/react-query';
import { store } from './lib/redux/init/store';


render(
    <Provider store = { store }>
        <QueryClientProvider client = { queryClient }>
            <Router>
                <App />
            </Router>
            <ReactQueryDevtools initialIsOpen = { false } />
        </QueryClientProvider>
    </Provider>,
    document.getElementById('root'),
);
