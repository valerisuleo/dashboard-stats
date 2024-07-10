// This file can be replaced during build by using the `fileReplacements` array.
// When building for production, this file is replaced with `environment.prod.ts`.

export const environment = {
    name: 'dev',
    production: false,
    config: {
        api: {
            express: {
                baseUrl: 'http://localhost:3000',
                key: '',
            },
        },
    },
};
