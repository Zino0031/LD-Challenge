# Pokemon Application

The Pokemon application is a web-based tool that enables users to search and filter Pokemon data using various criteria like name and power thresholds.

## Features

- **Search by Name:** Users can search for Pokemon by typing their names in the search input provided.
- **Search by Threshold:** Users can filter Pokemon by their total power, allowing them to find Pokemon with a specific power level or higher.
- **Min/Max Power Labels:** Displays the minimum and maximum power values of the currently displayed Pokemon data.

## Components
Name
PokemonTable
Threshold
### Container

The `Cont` component is the main component responsible for managing the state and rendering other components.

#### Usage

Include the `Cont` component in the main part of the application to render and control the Pokemon-related functionality.

### Name Component

The `Name` component allows users to search for Pokemon by their names.

#### Usage

Add the `Name` component to the application to provide a text input field for users to search for Pokemon by name.

### Threshold Component

The `Threshold` component allows users to search for Pokemon based on a specified power threshold.

#### Usage

Use the `Threshold` component to add a threshold input field for users to filter Pokemon based on their power.

### PokemonTable Component

The `PokemonTable` component displays the Pokemon data in a table format and includes features like pagination.

#### Usage

Utilize the `PokemonTable` component to visualize the filtered Pokemon data in a tabular format with various columns displaying different attributes of the Pokemon.

#### Installation
To run the Pokemon application locally:

Clone the repository
Navigate to the project directory
Install dependencies: npm install
Start the development server: npm start or npm run dev

#### Technologies Used
React.js
Axios
Material-UI
TailwindCss
Git commitizen
