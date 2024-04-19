import {createClient} from "redis";


const client = createClient();

client.on("error", (err) => console.log("Redis Client Error", err));

client.connect().then((client) => {
  console.log("connected redis client....");
});




export default client