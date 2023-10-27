import ResultBox from './ResultBox';
import { render } from '@testing-library/react';
import { cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Component ResultBox', () => {

    const testCases = [
        { amount: '100', from: 'PLN', to: 'USD' },
        { amount: '20', from: 'USD', to: 'PLN' },
        { amount: '200', from: 'PLN', to: 'USD' },
        { amount: '345', from: 'USD', to: 'PLN' },
    ];

    it('should render without crashing', () => {
        render(<ResultBox from='PLN' to='USD' amount={10} />);
    });
    for (const testObj of testCases) {
        it('should render proper info about conversion when PLN -> USD', () => {
            render(<ResultBox from='PLN' to='USD' amount={100} />);

            const dataBox = screen.getByTestId('output');

            expect(dataBox).toHaveTextContent('PLN 100.00 = $28.57');
            cleanup();
        });

        it('should render proper info about conversion when USD to PLN', () => {
            render(<ResultBox from='USD' to='PLN' amount={100} />);

            const dataBox = screen.getByTestId('output');

            expect(dataBox).toHaveTextContent('$100.00 = PLN 350.00');
            cleanup();
        });

        it('should return same value if from === to', () => {
            render(<ResultBox from='USD' to='USD' amount={100} />);

            const dataBox = screen.getByTestId('output');

            expect(dataBox).toHaveTextContent('$100.00 = $100.00');
            cleanup();
        });
        it('should return same value if from === to', () => {
            render(<ResultBox from='PLN' to='PLN' amount={100} />);

            const dataBox = screen.getByTestId('output');

            expect(dataBox).toHaveTextContent('PLN 100.00 = PLN 100.00');
            cleanup();
        });
    }

    it('display Error when amount is below 0', () => {
        render(<ResultBox from='USD' to='PLN' amount={-100} />);

        const dataBox = screen.getByTestId('output');

        expect(dataBox).toHaveTextContent('Wrong value...');
    });
});
