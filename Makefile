init:
	npm install

test:
	npm run test

deploy: test
	docker image build -t nodejs-boilerplate:latest .
	docker container run -d --name nodejs-boilerplate -p 3000:3000 nodejs-boilerplate:latest