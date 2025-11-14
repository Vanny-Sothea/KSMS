import mongoose from "mongoose"

const courseSchema = new mongoose.Schema(
	{
		code: {
			type: String,
			required: true,
			unique: true,
		},
		name: {
			type: String,
			required: true,
		},
        semester: {
            type: String,
            required: true,
        },
	},
	{
		timestamps: true,
	}
)

courseSchema.index({ code: "text" })

export const Course = mongoose.model("Course", courseSchema)
