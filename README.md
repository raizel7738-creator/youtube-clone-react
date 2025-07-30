# YouTube Clone

A modern YouTube clone built with React and CSS, featuring real video data from the YouTube Data API v3.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Real YouTube Data**: Fetches trending videos and search results using YouTube Data API v3  
- **Video Search**: Search for videos with real-time results
- **Video Player**: Watch videos with embedded YouTube player
- **Modern UI**: Dark theme with smooth animations and hover effects
- **Sidebar Navigation**: Collapsible sidebar with navigation options
- **Video Cards**: Beautiful video thumbnails with metadata display

## Components

- **Header**: Navigation bar with search functionality and YouTube branding
- **Sidebar**: Collapsible navigation menu with various sections
- **VideoGrid**: Grid layout for displaying video thumbnails
- **VideoCard**: Individual video card with thumbnail, title, and metadata
- **VideoPlayer**: Full video player page with video details and actions

## Technologies Used

- **React**: Frontend framework
- **CSS3**: Styling with modern CSS features
- **Axios**: HTTP client for API requests
- **YouTube Data API v3**: Real video data source

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Open in Browser**
   Navigate to `http://localhost:3000`

## API Configuration

The app uses the YouTube Data API v3 with the following key:
- API Key: `AIzaSyCQlPH_xOMFViQxF20gwhr4wyP992Putl0`

**Note**: For production use, please replace with your own API key and store it securely using environment variables.

## Project Structure

```
src/
├── api/
│   └── youtube.js          # YouTube API service
├── components/
│   ├── Header/             # Navigation header
│   ├── Sidebar/            # Navigation sidebar  
│   ├── VideoGrid/          # Video grid container
│   ├── VideoCard/          # Individual video card
│   └── VideoPlayer/        # Video player page
├── App.js                  # Main application component
├── App.css                 # Global styles
└── index.js               # Application entry point
```

## Features in Detail

### Search Functionality
- Real-time search using YouTube Data API
- Search suggestions and results
- Clean search interface

### Video Display
- Grid layout with responsive design
- Video thumbnails with duration overlay
- Channel information and view counts
- Published date formatting

### Video Player
- Embedded YouTube player
- Video information and description
- Like/dislike buttons (UI only)
- Channel subscription button (UI only)
- Back navigation to video grid

### Responsive Design
- Mobile-first approach
- Collapsible sidebar on smaller screens
- Adaptive grid layouts
- Touch-friendly interface

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Development

To run the project in development mode:

```bash
npm start
```

To build for production:

```bash
npm run build
```

## License

This project is for educational purposes. YouTube and the YouTube logo are trademarks of Google LLC.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
