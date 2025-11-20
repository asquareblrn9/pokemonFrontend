Overview

This application allows users to:

Browse the first 150 Pokémon
View detailed Pokémon information:

Abilities

Types

Evolution chain

Add/remove Pokémon from Favorites
Filter Pokémon by favorites
Search Pokémon by name
Data fetched through a secure backend proxy
Favorites stored persistently using SQLite + Sequelize ORM

Tech Stack

React (TypeScript)

Redux Toolkit for state management

TailwindCSS for styling

Axios for API communication

Vite for fast development

GET	/api/pokemon	Fetch first 150 Pokémon
GET	/api/pokemon/:name	Pokémon details + evolutions
GET	/api/favorites	List user favorites
POST	/api/favorites	Add favorite { name }
DELETE	/api/favorites/:name	Remove favorite by name
