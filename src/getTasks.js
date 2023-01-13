const AWS = require('aws-sdk');

module.exports.getTasks = async (event) => {
    try {
        console.log(22222)
        const dynamodb = new AWS.DynamoDB.DocumentClient()
        console.log(111111111)
        const result = await dynamodb.scan({
            TableName: 'usersTable'
        }).promise()

        const tasks = result.Items
        console.log(tasks)
        return {
            statusCode: 200,
            body: {
                tasks
            }
        }
    } catch (err) {
        console.log(err)
    }

}
