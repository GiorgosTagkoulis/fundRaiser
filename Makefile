start-db:
	docker-compose up

stop-db:
	docker-compose stop

reset-db:
	docker exec fundRaiser-postgresql psql -U postgres -d fundRaiser-db -f /var/lib/postgresql/migration/setUpDB.sql

start-server:
	mvn compile && mvn exec:java -Dexec.mainClass="server.Server"

start-client:
	cd client && yarn start
