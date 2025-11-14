import { NextFunction, Request, Response } from "express"
import { UserPayload } from "../types/types"

export const authenticateRequest = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const userIdHeader = req.headers["x-user-id"]
	const roleHeader = req.headers["x-user-role"]
	if (
		!userIdHeader ||
		Array.isArray(userIdHeader) ||
		!roleHeader ||
		Array.isArray(roleHeader)
	) {
		return res
			.status(401)
			.json({ message: "Authentication required! Please login to continue." })
	}

	const userId = userIdHeader.toString() // Keep as string for MongoDB ObjectId
	const role = roleHeader.toString()

	req.user = { userId, role } as UserPayload
	next()
}

export const authorizeRoles = (...allowedRoles: string[]) => {
	return (req: Request, res: Response, next: NextFunction) => {
		if (!req.user) {
			return res.status(401).json({
				message: "Unauthorized. No user found.",
			})
		}

		const user = req.user as UserPayload

		if (!allowedRoles.includes(user.role)) {
			return res.status(403).json({
				message: "Forbidden: You don't have access to this resource",
			})
		}
		next()
	}
}
