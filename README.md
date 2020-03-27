# FundRaiser widget

This repo is a client-server web application for a fundraising widget. The tech stack includes:
<ul>
    <li>PostgresQL in a docker container</li>
    <li>Java server using the Spark micro-framework</li>
    <li>React application for the client</li>
</ul>

### Database
Since the database run as a docker container, it is mandatory to have installed the Docker daemon in
your system.  
In the terminal navigate to the root directory of the project and type ``make start-db`` to start the
database, `make stop-db` (or Ctrl-X) to stop the database, and the first time you will need to create
the table that will hold the donations so type `make create-table`. This last command can also be used
to reset the database.

### Server
In order to start the server, you need to have installed Java 8 and Maven.  
Then from the root directory of the project type ``make start-server`` and the server will be up in 
port 8080. Stop the server with Ctrl-X.  
The server provides two endpoints:
<ul>
    <li>GET request <strong>/funds</strong></li>
    <li>POST request <strong>/donations</strong></li>
</ul> 

### Client
