import { program } from "commander";
import {
  listContacts,
  getContactById,
  addContact,
  removeContact,
} from "./contacts.js";
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

// TODO: рефакторити
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const dataList = await listContacts();
      return console.table(dataList);
      break;

    case "get":
      const getDataById = await getContactById(id);
      return console.table(getDataById);
      break;

    case "add":
      const addData = await addContact({ name, email, phone });
      return console.table(addData);
      break;

    case "remove":
      const removeData = await removeContact(id);
      return console.table(removeData);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(options);
