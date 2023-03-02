<div align="center">
  
# Jay Lord - Exam

</div>

<p align="center"><img width="300px" height="300px" src="https://raw.githubusercontent.com/jaylord-exam/answer/main/frontend/src/assets/profile/download.png"></p>

## Features

- Create a customer
- Update a customer
- Delete a customer
- List all customer
- View a customer

## Requirements

- PHP v7.4.3+
- NodeJS v18.13.0+
- MySQL
- Composer v2.5.1+

## Tech stack

- Front-end: VueJS & Vuetify
- Back-end: Laravel

## After clone or download this project, please follow the instructions

- Open terminal
- Clone the repository with **_git clone https://github.com/jaylord-exam/answer.git_**
- Run **_cd backend_**
- Copy **.env.example** file to **.env** and edit **Database** credentials there
- Run **_composer install_**
- Run **_php artisan key:generate_**
- Run **_php artisan migrate_**
- Run **_php artisan serve_**
- Open new terminal
- Run **_cd ../frontend**
- Run **_npm install_**
- Open **.env** and change **VUE_APP_API_URL** to the link of your API (link can be seen after running **_php artisan serve_** on backend)
- Run **_npm run serve_**