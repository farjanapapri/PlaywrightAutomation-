import { faker } from "@faker-js/faker";

import fs from "fs";
import path from "path";

const filePath = path.join(__dirname, "../utils/employee.json");

function generateShortEmployeeId(): string {
    const now = Date.now().toString();
    const shortId = now.slice(-6); // take last 6 digits
    return `EMP${shortId}`; // Result: e.g., "EMP332066"
}

export function generateEmployee() {
    const id = generateShortEmployeeId();
    const firstName = faker.person.firstName();
    const middleName = faker.person.middleName();
    const lastName = faker.person.lastName();

    const employee = { id, firstName, middleName, lastName };
    fs.writeFileSync(filePath, JSON.stringify(employee, null, 2));
    return employee;
}

export function getEmployee() {
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}
