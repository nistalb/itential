# <p align="center">Virtual Soda Machine</p>



## About the Project
This project creates a virtual soda machine for a fictional ColaCo that wants to vend its four soda flavors.  The vending machine has the look and feel of a traditional soda machine and dispenses a representation of the soda that was purchased.  Users must add money to the vending machine to buy a soda, each of which has a price listed.

ColaCo is an energetic company with plans to make future releases and changes to its current products so an API was created to add, update, and delete soda from its lineup.  Changes to the soda line, additions or modifications to current sodas, will be automatically reflected in the vending machine.  

## Approach
To create this project I used NodeJs on the backend and React on the frontend.  MongodB was used to store persistent data. 

Create-React-App was used to create a scaffold for my React app.

The Insomnia API client is standing in for a purpose built UI to interact with the ColaCo API.

The technologies that I used in this project were:
1. NodeJs
1. React
1. MongoDB
1. Mongoose
1. Express
1. dotenv
1. Axios
1. React-Bootstrap
1. Concurrently
1. Nodemon

## Installation
Prior to beginning installation the local machine must have [MongoDB](https://www.mongodb.com/) and [NodeJs](https://nodejs.org/en/) installed.  

Complete the following steps in Terminal.
1. Clone the repo to you local machine: *git clone git@github.com:nistalb/itential.git*
1. Change directory into the itential directory: *cd itential*
1. Install all dependencies from the package.json file: *npm install*
1. Change directory into client directory: *cd client*
1. Install all dependencies from the package.json file: *npm install*
1. Change directory into the itential directory: *cd ..*
1. Create a .env file: *touch .env*
    1. Open the .env file: *open .env*
    1. Add: `PORT=5000`
    1. Save the file.
1. Seed data may be added to the database using the following command or it may be added via Insomnia or similar API client using the instructions in the API section of this Readme.
    1. *mongoimport seed_data/soda.json -d itentialdb -c sodas --drop*


## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)