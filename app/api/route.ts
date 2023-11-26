// app/api/img/route.ts
export async function GET(request: Request) {
    return new Response(JSON.stringify({
      name: "TokenN",
      symbol: "FUD",
      description: "Just a test for how to name your token ;)",
      image: "https://shdw-drive.genesysgo.net/ArP7jjhVZsp7vkzteU7mpKA1fyHRhv4ZBz6gR7MJ1JTC/logo.jpg"
    }), {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
  