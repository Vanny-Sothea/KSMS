import express from "express"
import { searchProductController } from "../controllers/searchProductController"

const router = express.Router()

router.get("/ping", (req, res) => {
	res.status(200).json({ message: "PONG" })
})

router.get("/product", searchProductController)

export default router
