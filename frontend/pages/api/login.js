import { fetchJson } from "../../lib/api";
import cookie from "cookie";

const { CMS_URL } = process.env;

export default async function handleLogin(req, res) {
  if (req.method !== "POST") {
    res.status(405).end();
    return;
  }
  const { email, password } = req.body;
  try {
    const { jwt, user } = await fetchJson(`${CMS_URL}/auth/local`, {
      //post cuz' in strapi we have to use post method to login
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ identifier: email, password }),
    });
    res
      .status(200)
      //security reasons, we don't want to expose the jwt token, nor let client side code read this token
      .setHeader(
        "Set-Cookie",
        //tells the browser to only send this cookie as a header when making requests to the server, but hide it from client side code
        cookie.serialize("jwt", jwt, {
          path: "/api",
          httpOnly: true,
        }),
      )
      .json({
        id: user.id,
        name: user.username,
      });
  } catch (err) {
    res.status(401).end();
  }
}
