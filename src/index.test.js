import test from 'ava';
import { parse } from './index';

test('It should be able to parse flattened validation messages;', (t) => {
    const messages = {
        name: 'You must supply a name.',
        age: 'You must supply an age.',
    };

    t.snapshot(parse(messages));
});

test('It should be able to parse one-level nested validation messages;', (t) => {
    const messages = {
        name: {
            first: 'You must supply a first name.',
            last: 'You must supply a last name.',
        },
        location: 'You must supply a location.',
    };

    t.snapshot(parse(messages));
});

test('It should be able to parse n-level nested validation messages;', (t) => {
    const messages = {
        name: {
            first: 'You must supply a first name.',
            last: 'You must supply a last name.',
        },
        location: {
            city: 'You must supply a city.',
            country: {
                name: 'You must supply a country name.',
                code: 'You must supply a country code.',
                coordinates: {
                    latitude: 'You must supply a latitude value.',
                    longitude: 'You must supply a longitude value.',
                },
            },
        },
    };

    t.snapshot(parse(messages));
});
