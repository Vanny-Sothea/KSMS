import express, { Request, Response } from "express"
import {
	authenticateRequest,
	authorizeRoles,
} from "../middleware/authMiddleware"

const router = express.Router()

router.get("/ping", (req, res) => {
	res.status(200).json({ message: "PONG" })
})



export default router
