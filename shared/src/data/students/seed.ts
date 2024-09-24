import fs from "fs"
import path from "path"
import { faker } from "@faker-js/faker"
import { fileURLToPath } from 'url';
import { absentReasons, statuses } from "./data"

// Resolve __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const tasks = Array.from({ length: 100 }, () => ({
  name: faker.person.firstName(),
  room: faker.location.city(),
  status: faker.helpers.arrayElement(statuses).value,
  absentReason: faker.helpers.arrayElement(absentReasons).value,
  isCheckedIn: faker.datatype.boolean(),
  isAbsent: faker.datatype.boolean(),
}))

fs.writeFileSync(
  path.join(__dirname, "students.json"),
  
  JSON.stringify(tasks, null, 2)
)

console.log("✅ Students data generated.")