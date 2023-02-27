This is an extension for the Alex agcty great Advanced Next Starter Template.
https://github.com/agcty

# Almost there ...

To improve the full stack part a of Alex's template further, this extension integrate Prisma and provide the guideline to easily create and connect a Postgre database.
Also, Next-Auth is implemented and Docker is ready for deployement.

First, start with "yarn install" in the console from the root folder.

# Creating your Postgres

Download Postgres SQL from https://www.postgresql.org/ .
When ready create an empty folder in your Next application root folder named "postgres" or whatever you like.
From Postgres, create a new server.
When setting up, set the source to your empty folder so it generates the database there.

Be sure that the server is running before you continue.

# Initialize Prisma

You can initialize prisma with : "npx prisma init"

# Connect your Postgres

A .env file has been generated. Now, you will change the DATABASE_URL variable to the Database connection URL string of your Postgres.
In a basic local configuration, this should look like : "postgresql://USER:PASSWORD@localhost:PORT/DBNAME"

# Create your first model in Prisma

In schema.prisma, create your model (you will find a model user as default). When you are done enter this command : "npx prixma db push" .

You should see this message : 🚀 Your database is now in sync with your Prisma schema.
If not, it's probably a problem with the Database connection URL string of your Postgres, check again that your postgres server is running.

As another check, you can use this command : "npx prisma studio". It'll launch a visual interface to interact with your database.

# Generate your prisma client

With this command, generate your prisma client : "npx prisma generate"
You'll have to run this command everytime you make a change to your prisma.schema file.
