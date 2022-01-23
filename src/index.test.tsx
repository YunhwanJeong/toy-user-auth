import ReactDOM from 'react-dom';
import Router from './router';

it('App renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router />, div);
});
