import { TemplateInstance, propertyIdentity } from "@github/template-parts";

const template = document.getElementById("template");
const form = document.getElementById("form");
const list = document.getElementById("list");

const usernameField = document.getElementById("username");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const date = new Date();
  const timestamp = date.toLocaleTimeString();
  const username = usernameField.value;
  const instance = new TemplateInstance(template, {
    timestamp,
    username,
    seconds: 0,
  });
  list.append(instance);
  setInterval(() => {
    instance.update({
      seconds: Math.floor((Date.now() - date) / 1000),
    });
  }, 1000);
  usernameField.value = "";
});
