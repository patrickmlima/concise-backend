init:
	npm install

test:
	npm run test

run:
	docker-compose -f docker-compose.dev.yaml -p concise-backend up --build

stop:
	docker-compose -f docker-compose.dev.yaml -p concise-backend down