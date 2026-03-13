const { default: clientPromise } = require("@/lib/mongodb");

export async function GET(request) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get("category");
    const search = searchParams.get("search");
    const query = {};

    if (category && category !== "all") {
      query.category = category;
    } else if (search) {
      query.$or = [
        { category: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
        { title: { $regex: search, $options: "i" } },
      ];
    }

    const client = await clientPromise;

    const db = await client.db(process.env.DB_NAME);
    const services = await db.collection("services").find(query).toArray();

    return new Response(JSON.stringify(services), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "failed to load services data" }),
      { status: 500 },
    );
  }
}
