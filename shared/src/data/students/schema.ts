import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const studentSchema = z.object({
  name: z.string(),
  room: z.string(),
  status: z.string(),
  absentReason: z.string(),
  isAbsent: z.boolean(),
  isCheckedIn: z.boolean()
})

export type Student = z.infer<typeof studentSchema>