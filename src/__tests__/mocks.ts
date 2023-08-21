import { setupServer } from 'msw/node';
import { rest } from 'msw';

export const server = setupServer(
    rest.get('https://jsonplaceholder.typicode.com/users', (req: any, res: any, ctx: any) => {
        return res(
            ctx.delay(500),
            ctx.status(200, 'Mocked status'),
            ctx.json([
                {
                    id: 1, 
                    name: 'Test user'
                }
            ]),
        );
    }),
);