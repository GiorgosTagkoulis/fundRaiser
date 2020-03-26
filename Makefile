start-db:
	docker-compose up

stop-db:
	docker-compose stop.

create-table:
	docker exec fundRaiser-postgresql psql -U postgres -d fundRaiser-db -f /var/lib/postgresql/migration/setUpDB.sql

