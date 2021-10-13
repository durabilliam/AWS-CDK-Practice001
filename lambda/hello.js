exports.handler = async function(event) {
  console.log("request:", JSON.stringify(event, undefined, 2));
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/html" },
    //body: `Hello, CDK! You've hit ${event.path}\n`
    body: `<div>
            <h1>Hello You've hit ${event.path}</h1>
            <h3>Hello You've hit ${event.path}</h3>
            </div>
            ` 
  };
};