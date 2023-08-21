import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { describe, expect, test } from '@jest/globals';
import { Provider } from 'react-redux';
import React from 'react';

import App from '../../components/App/App';
import { store } from '../../store';

describe('Отрисовка главного экрана', () => {
    test('Счетчик должен быть на экране', async () => {
        render(<Provider store={store}><App /></Provider>);
        expect(screen.getByText('click 0')).not.toBeUndefined();
    });

    test('Счетчик должен увеличиваться на 1 при нажатии', async () => {
        render(<Provider store={store}><App /></Provider>);
        fireEvent.click(screen.getByText('click 0'));
        expect(screen.getByText('click 1')).not.toBeUndefined();
    });

    test('Метод должен вернуть данные', async () => {
        render(<Provider store={store}><App /></Provider>);
        screen.debug();
        expect(await screen.findByText(/name: Test user/i)).not.toBeUndefined();
    });
});