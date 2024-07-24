# Live YouTube Subscribers

This project is a React-based web application designed to fetch and display real-time subscriber counts for YouTube channels. It provides an easy-to-use interface for searching YouTube channels and viewing their live subscriber counts, updated continuously.

## Features

- **Channel Search**: Users can search for YouTube channels by name. The application interacts with a backend server to fetch search results based on the user's query.

- **Real-Time Subscriber Count**: Once a user selects a channel from the search results, the application fetches and displays the live subscriber count for the selected channel. This count is continuously updated, providing real-time data.

- **Error Handling**: The application includes robust error handling to ensure a smooth user experience. If any errors occur during the fetching of data, appropriate error messages are displayed to the user.

- **Responsive Design**: The application is designed to be responsive and works well on a variety of devices, including desktops, tablets, and mobile phones.

## Usage

1. **Search for a Channel**: Enter the name of the YouTube channel you want to search for in the search bar and click the "Search" button. The application will display a list of channels that match your query.

2. **Select a Channel**: Click on the desired channel from the search results. The application will display the selected channel's details, including the thumbnail and title.

3. **View Subscriber Count**: The live subscriber count for the selected channel will be displayed and updated in real-time. The application will continuously fetch the latest subscriber count to ensure you always see the most up-to-date data.

## Requirements

- **Node.js**: Ensure you have Node.js installed on your machine to run the application locally.
- **Backend Server**: The application interacts with a backend server to fetch channel details and subscriber counts. Make sure you have the backend server set up and running.

## Getting Started

To get started with the project, follow these steps:

1. **Clone the Repository**: Clone the repository to your local machine using the following command:
   ```bash
   git clone https://github.com/isaka-james/subscribers-frontend.git
   ```

2. **Install Dependencies**: Navigate to the project directory and install the necessary dependencies using npm:
   ```bash
   cd subscribers-frontend
   npm install
   ```

3. **Start the Application**: Start the React application using the following command:
   ```bash
   npm start
   ```
   The application will run locally on `http://localhost:3000`.

4. **Configure Backend Server**: Ensure your backend server is running and accessible. Update the API endpoints in the application if necessary.(*The backend is now not publicly hosted, If you wanted it then contact me personally*)

## Contributing

Contributions are welcome! If you have any suggestions or improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
