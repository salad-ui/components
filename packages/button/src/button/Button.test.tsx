import * as React from 'react';
import {Theme} from '@salad-ui/theme';
import {render} from '@testing-library/react';
import {Button} from './Button';

const href = 'http://example.com/';

describe('Button', () => {
    test('it renders an anchor when there is a href and it is not disabled', () => {
        const {getByText} = render(
            <Theme>
                <Button href={href} isDisabled={false}>
          Click me!
                </Button>
            </Theme>,
        );
        const element = getByText('Click me!');
        expect(element.tagName).toEqual('A');
    });

    test('it renders a button when there is a href and it is disabled', () => {
        const {getByText} = render(
            <Theme>
                <Button href={href} isDisabled>
          Click me!
                </Button>
            </Theme>,
        );
        const element = getByText('Click me!');
        expect(element.tagName).toEqual('BUTTON');
    });

    test('it renders a button when there is no href', () => {
        const {getByText} = render(
            <Theme>
                <Button>Click me!</Button>
            </Theme>,
        );
        const element = getByText('Click me!');
        expect(element.tagName).toEqual('BUTTON');
    });

    // TODO: finish test cases
});
