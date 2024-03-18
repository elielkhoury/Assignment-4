# React Native App

This project is a React Native application featuring dynamic theming and a stack navigation system. It includes a theme provider for switching between light and dark modes and a stack navigator to move between different screens.

## Features

- Light and Dark theme support using context.
- Navigation between `Home`, `Detail`, and `Settings` screens.
- Dynamic loading of fonts with `@expo-google-fonts/montserrat`.
- Customization options for the `Detail` screen, allowing color changes for car images.

## Project Structure

- `App.js`: The root component that wraps the entire application with `ThemeProvider` and `NavigationContainer`.
- `src/navigator/Navigation.js`: Sets up the stack navigator for the application.
- `src/screens/Home.js`: The home screen of the application displaying an image, title, and navigation options.
- `src/screens/Detail.js`: The detail screen showing more information and customization options for a car.
- `src/screens/Settings.js`: The settings screen allowing users to toggle theme and other settings.
- `theme/ThemeContext.js`: The context and provider for managing and accessing the current theme state across the app.

## Installation

Before running the application, make sure you have Node.js and npm/yarn installed. Also, set up the React Native CLI environment on your system.

To install the dependencies, run:

npm install

Or if you prefer using yarn:

yarn install

## Running the App

To start the app on a simulator or a connected device, run:

npx react-native run-ios     # For iOS

npx react-native run-android # For Android

## Contributing

Contributions are welcome! If you have suggestions for improving the code or features, please feel free to fork the repository, make changes, and submit a pull request.

## License

This project is open source.

## Contact

If you have any questions or comments about the project, please feel free to reach out to me at itseliekhoury@gmail.com.

---

Designed and built with ❤️ by Elie Georgio El Khoury.



