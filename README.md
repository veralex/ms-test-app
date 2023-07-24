## Marley Spoon test app

This is a test app for [Marley Spoon](https://gist.github.com/tprzedmojski/53e3132570137aa9dbffc96e80055f40)

To run this app clone the repo and execute `npm install` and `npm start`

Since it's not a production version, some shortcuts were taken
1. I chose React because of stability issues of NextJS 13 and Apollo.
2. Components weren't divided from data layer and not really organised.
3. There are no tests and no error handling
4. UI is not perfect - there are no splash screens
5. The interface is pretty responsive
6. For some reasons I got 403 error while trying to generate types from GraphQL using `content-management` client so I defined types manually with required fields only