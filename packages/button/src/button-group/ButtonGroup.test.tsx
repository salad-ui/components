import * as React from 'react';
import {render} from '@testing-library/react';
import {Theme} from '@salad-ui/theme';
import {ButtonGroup} from './ButtonGroup';

const href = 'http://example.com/';

describe('ButtonGroup', () => {
    test('it renders buttons', () => {
        const {getByTestId} = render(
            <Theme>
                <ButtonGroup size="small">
                    <ButtonGroup.Button
                        variant="primary"
                        href={href}
                        isDisabled={false}
                        data-testid="button-1"
                    >
            Buy now!
                    </ButtonGroup.Button>
                    <ButtonGroup.Button
                        variant="secondary"
                        onClick={jest.fn()}
                        isDisabled={false}
                        data-testid="button-2"
                    >
            Lay buy
                    </ButtonGroup.Button>
                </ButtonGroup>
            </Theme>,
        );
        const button1 = getByTestId('button-1');
        const button2 = getByTestId('button-2');
        expect(button1.textContent).toContain('Buy now!');
        expect(button2.textContent).toContain('Lay buy');
    });

    // TODO: finish test cases
});
