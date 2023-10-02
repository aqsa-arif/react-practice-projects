import { render, screen, waitFor } from "@testing-library/react" 
import Async from "./Async"; 


describe('Async component', () => {
    test('render fetched posts', async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () =>  [{ id: 'p1', title: 'First post' }],
        })

        render(<Async />);

        await waitFor( async () => {
            const listItemElements = await screen.findAllByRole('listitem');
            expect(listItemElements).not.toHaveLength(0);
        }); 
    })
})