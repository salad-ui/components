import * as React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {FocusGroupOrientation, FocusGroup} from '.';

interface TestComponentProps {
  orientation?: FocusGroupOrientation;
}

const TestComponent: React.FC<TestComponentProps> = ({
  orientation = 'horizontal',
}) => (
  <FocusGroup orientation={orientation}>
    <FocusGroup.Item>
      {props => (
        <button {...props} data-testid="item-1">
          One
        </button>
      )}
    </FocusGroup.Item>

    <FocusGroup.Item disabled>
      {props => (
        <button {...props} data-testid="item-2">
          Two
        </button>
      )}
    </FocusGroup.Item>

    <FocusGroup.Item>
      {props => (
        <button {...props} data-testid="item-3">
          Three
        </button>
      )}
    </FocusGroup.Item>

    <FocusGroup.Item>
      {props => (
        <button {...props} data-testid="item-4">
          Four
        </button>
      )}
    </FocusGroup.Item>

    <FocusGroup.Item>
      {props => (
        <button {...props} data-testid="item-5">
          Five
        </button>
      )}
    </FocusGroup.Item>
  </FocusGroup>
);

describe('FocusGroup', () => {
  test('focuses the first item when HOME is pressed', () => {
    const {getByTestId} = render(<TestComponent />);
    fireEvent.keyDown(getByTestId('item-3'), {key: 'Home'});
    expect(document.activeElement).toEqual(getByTestId('item-1'));
  });

  test('focuses the last item when END is pressed', () => {
    const {getByTestId} = render(<TestComponent />);
    fireEvent.keyDown(getByTestId('item-3'), {key: 'End'});
    expect(document.activeElement).toEqual(getByTestId('item-5'));
  });

  test('focuses the next item when LEFT is pressed', () => {
    const {getByTestId} = render(<TestComponent orientation="horizontal" />);
    fireEvent.keyDown(getByTestId('item-4'), {key: 'ArrowLeft'});
    expect(document.activeElement).toEqual(getByTestId('item-3'));
  });

  test('focuses the next item when UP is pressed', () => {
    const {getByTestId} = render(<TestComponent orientation="vertical" />);
    fireEvent.keyDown(getByTestId('item-4'), {key: 'ArrowUp'});
    expect(document.activeElement).toEqual(getByTestId('item-3'));
  });

  test('focuses the next item when RIGHT is pressed', () => {
    const {getByTestId} = render(<TestComponent orientation="horizontal" />);
    fireEvent.keyDown(getByTestId('item-4'), {key: 'ArrowRight'});
    expect(document.activeElement).toEqual(getByTestId('item-5'));
  });

  test('focuses the next item when DOWN is pressed', () => {
    const {getByTestId} = render(<TestComponent orientation="vertical" />);
    fireEvent.keyDown(getByTestId('item-4'), {key: 'ArrowDown'});
    expect(document.activeElement).toEqual(getByTestId('item-5'));
  });

  test('focuses the next item when LEFT is pressed and the next item is disabled', () => {
    const {getByTestId} = render(<TestComponent orientation="horizontal" />);
    fireEvent.keyDown(getByTestId('item-3'), {key: 'ArrowLeft'});
    expect(document.activeElement).toEqual(getByTestId('item-1'));
  });

  test('focuses the next item when UP is pressed and the next item is disabled', () => {
    const {getByTestId} = render(<TestComponent orientation="vertical" />);
    fireEvent.keyDown(getByTestId('item-3'), {key: 'ArrowUp'});
    expect(document.activeElement).toEqual(getByTestId('item-1'));
  });

  test('focuses the next item when RIGHT is pressed and the next item is disabled', () => {
    const {getByTestId} = render(<TestComponent orientation="horizontal" />);
    fireEvent.keyDown(getByTestId('item-1'), {key: 'ArrowRight'});
    expect(document.activeElement).toEqual(getByTestId('item-3'));
  });

  test('focuses the next item when DOWN is pressed and the next item is disabled', () => {
    const {getByTestId} = render(<TestComponent orientation="vertical" />);
    fireEvent.keyDown(getByTestId('item-1'), {key: 'ArrowDown'});
    expect(document.activeElement).toEqual(getByTestId('item-3'));
  });
});
