const fs = require("fs").promises;
const path = require("node:path");
const { nanoid } = require("nanoid");

const contactsPath = path.resolve("db", "contacts.json");

async function updateContacts(contacts) {
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
}

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.log(err.message);
  }
}

async function getContactById(contactId) {
  try {
    const contacts = await getAll();
    const result = contacts.find((item) => item.id === contactId);
    return result;
  } catch (err) {
    console.log(err.message);
  }
}

async function removeContact(contactId) {
  try {
    const contacts = await getAll();
    const idx = contacts.findIndex((item) => item.id === contactId);
    if (idx === -1) {
      return null;
    }
    const [remove] = contacts.splice(idx, 1);
    updateContacts(contacts);
    return remove;
  } catch (err) {
    console.log(err.message);
  }
}

async function addContact(name, email, phone) {
  try {
    const contacts = await getAll();
    const newContact = {
      name,
      email,
      phone,
      id: nanoid(),
    };
    contacts.push(newContact);
    await updateContacts(contacts);
    return newContact;
  } catch (err) {
    console.log(err.message);
  }
}
module.exports = { listContacts, getContactById, removeContact, addContact };
