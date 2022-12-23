# the mock server is based on koa

### every time you edit the json file in api directory, the server will restart and generate the new router

# example

```json
[
	{
		"path": "test",
		"response": {
			"data": [
				{
					"id": 1
				},
				{
					"id": 2
				}
			],
			"status": 1,
			"msg": "success"
		}
	}
]
```
