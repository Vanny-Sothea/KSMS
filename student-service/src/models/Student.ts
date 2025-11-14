import mongoose from "mongoose"

const studentSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		studentId: {
			type: String,
			required: true,
			unique: true,
		},
		major: {
			type: String,
			required: true,
		},
		batch: {
			type: String,
			required: true,
		},
		enrolled_courses: [
            { 
                type: String 
            }
        ],
	},
	{
		timestamps: true,
	}
)

studentSchema.index({ studentId: "text" })

export const Student = mongoose.model("Student", studentSchema)
