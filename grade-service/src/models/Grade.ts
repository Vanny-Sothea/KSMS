import mongoose from "mongoose"

const gradeSchema = new mongoose.Schema(
	{
		student_id: {
			type: String,
			required: true,
		},
		course_code: {
			type: String,
			required: true,
		},
		grade: { 
			type: String, 
			enum: ["A", "B", "C", "D", "F"], 
			required: true 
		},
		numeric_grade: { 
			type: Number, 
			required: true 
		},
		date: { 
			type: Date, 
			default: Date.now 
		},
	},
	{
		timestamps: true,
	}
)

gradeSchema.index({ grade: "text" })

export const Grade = mongoose.model("Grade", gradeSchema)
