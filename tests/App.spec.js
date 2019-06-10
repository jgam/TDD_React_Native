import 'react-native';
import React from 'react';
import App from '../src/App';
import { format } from 'path';

describe('Jest', ()=> {
    it('is it working?', () => {
        const a = 1;
        expect(a + 1).toBe(2)
    })
})