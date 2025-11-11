import * as fs from "node:fs/promises";
import * as path from "node:path";

// contacts.js
const contactsPath = path.resolve("db", "contacts.json");

export async function listContacts() {
  const res = await fs.readFile(contactsPath, "utf-8");
  return JSON.parse(res);
}

export async function getContactById(contactId) {
  const res = await listContacts();
  const res1 = res.find((item) => item.id === contactId);
  return res1 ?? null;
}

export async function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

export async function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту (з id).
}
