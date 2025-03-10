export async function onRequestPost(context) {
    console.log("submit function called");
    const { request } = context;
  
    try {
      // Parse the JSON body of the request
      const formData = await request.json();
  
      // Example: Validate required fields
      if (!formData.name || !formData.email) {
        return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
      }
  
      // Example: Process the data (e.g., store in a database, send an email, etc.)
  
      // Respond with a success message
      return new Response(JSON.stringify({ message: 'Form submitted successfully' }), { status: 200 });
    } catch (error) {
      // Handle errors (e.g., invalid JSON)
      return new Response(JSON.stringify({ error: 'Invalid request data' }), { status: 400 });
    }
  }
  
