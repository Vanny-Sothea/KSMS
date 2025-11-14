import express, { Request, Response } from "express"
import {
	authenticateRequest,
	authorizeRoles,
} from "../middleware/authMiddleware"

const router = express.Router()

router.get("/ping", (req, res) => {
	res.status(200).json({ message: "PONG" })
})

// test auth middleware
router.get(
	"/secure-data",
	authenticateRequest,
	authorizeRoles("ADMIN"),
	(req: Request, res: Response) => {
		res
			.status(200)
			.json({ message: "This is secure data accessible to students and admins." })
	}
)



export default router
