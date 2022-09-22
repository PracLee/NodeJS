const { MongoClient, ServerApiVersion } = require('mongodb')

const uri = `mongodb+srv://spsbsc:${process.env.MONGO_PASSWORD}@cluster0.ykmzb2r.mongodb.net/?retryWrites=true&w=majority`
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
})

client.connect((err) => {
  const collection = client.db('test').collection('devices')
  // perform actions on the collection object
  client.close()
})

async function main() {
  const c = await client.connect()
  console.log(c)
  console.log('OK')

  const users = client.db(`fc21`).collection('users')
  await users.deleteMany({})

  users.insertMany([
    {
      name: 'foo',
    },
    { name: 'bar' },
    { name: 'barz' },
  ])
  const cursor = await users.find({})
  await cursor.forEach(console.log)

  await client.close()
}

main()
