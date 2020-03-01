# Template for ReactJS using Typescript

> Template with my basic structure for reactjs

## Source tree

```

your_app/
    tslint.json
    tsconfig.json
    .gitignore
    .pettierrc
    .env
    .editorconfig
    public/
        favicon.ico
        index.html
        logo192.png
        logo512.png
        robots.txt
    src/
        __tests__/
            App.test.tsx
        assets/
            logo.svg
        components/
            .gitkeep
        entities/
            User.ts
            Entity.ts
            index.ts
        services/
            index.ts
            Service.ts
        store/
            ducks/
                index.ts
            index.ts
        styles/
            GlobalStyle.ts
        types/
            .getkeep
        views/
            Errors/
                NotFound/
                    index.tsx
            Home/
                Home/
                    index.tsx
                    styles.ts
        App.tsx
        index.tsx
        react-app-env.d.ts
        Routes.tsx
        serviceWorker.ts

```

## Creating app

To start with this structure, you can just execute the command below:

```
yarn create-react-app {app-name} --template lorenzoog-react-template-basic
```

or

```
yarn create react-app {app-name} --template lorenzoog-react-template-basic
```

or if you are using npx

```
npx create-react-app {app-name} --template lorenzoog-react-template-basic
```

and after this

```
cd {app-name}
```

and

```
yarn start
```

## What is in

### Common Dependencies

1. axios: ^0.19.2
2. dotenv: ^8.2.0
3. react-redux: ^7.2.0
4. react-router: ^6.0.0-alpha.1
5. react-router-dom: ^6.0.0-alpha.1
6. react-scripts: 3.4.0
7. redux: ^4.0.5
8. redux-persist: ^6.0.0
9. reduxsauce: ^1.1.2
10. styled-components: ^5.0.1

### Developer Dependencies

1. @types/jest:^24.0.0
2. @types/node: ^12.0.0
3. @types/react: ^16.9.0
4. @types/react-dom: ^16.9.0
5. @types/react-redux: ^7.1.7
6. @types/react-router-dom: ^5.1.3
7. @types/redux-persist: ^4.3.1
8. @types/redux-saga: ^0.10.5
9. @types/styled-components: ^5.0.0
10. prettier: ^1.19.1
11. tslint: ^6.0.0
12. tslint-config-prettier: ^1.18.0
13. tslint-config-standard: ^9.0.0
14. tslint-react: ^4.2.0
15. typescript: ~3.7.2

### Acknowledgements

This template is based in [Create React App](https://github.com/facebook/create-react-app) with [Typescript Template](https://github.com/facebook/create-react-app/tree/master/packages/cra-template-typescript)
