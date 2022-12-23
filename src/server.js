const Koa = require("koa");
const Router = require("koa-router");
const cors = require("koa-cors");
const logger = require("koa-logger");

const fs = require("fs");
const glob = require("glob");
const { resolve } = require("path");

const app = new Koa();
const router = new Router({ prefix: "/api" });

app.use(cors());
app.use(logger());

glob.sync(resolve(__dirname, "./api", "**/*.json")).forEach((filePath) => {
	let data = fs.readFileSync(filePath, "utf-8");
	let parseData = JSON.parse(data);
	for (let item of parseData) {
		const { path, response } = item;
		router.all(`/${path}`, (ctx) => {
			ctx.body = response;
		});
	}
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
