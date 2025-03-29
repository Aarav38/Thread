import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
	const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
		expiresIn: "15d",
	});

	res.cookie("jwt", token, {
		httpOnly: true, // more secure
		maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
		sameSite: "strict", // CSRF
	});
//A JWT (JSON Web Token) is a compact, URL-safe way to represent claims between two parties 
//(usually a client and server). It's commonly used for authentication in web applications.


	return token;
};

export default generateTokenAndSetCookie;
