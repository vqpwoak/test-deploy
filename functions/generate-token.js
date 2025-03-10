export async function onRequestGet(context) {
    console.log("generate-token function called");
    const secretKey = context.env.SECRET_KEY; 
    const timestamp = Math.floor(Date.now() / 1000); 

    const cryptoKey = await crypto.subtle.importKey(
        "raw",
        new TextEncoder().encode(secretKey),
        { name: "HMAC", hash: "SHA-256" },
        false,
        ["sign"]
    );

    const signature = await crypto.subtle.sign(
        "HMAC",
        cryptoKey,
        new TextEncoder().encode(`${timestamp}`)
    );

    const token = `${timestamp}.${btoa(String.fromCharCode(...new Uint8Array(signature)))}`;

    return new Response(JSON.stringify({ token }), {
        headers: { "Content-Type": "application/json" }
    });
}
