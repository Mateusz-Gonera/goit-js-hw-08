

const form = document.querySelector("form.feedback-form");
const input = document.querySelector("input");
const textArea = document.querySelector("textarea");

form.addEventListener("input", (event) => {
      const { elements: { email, message } } = event.currentTarget;
      const objectInput = { email: email.value, message: message.value };
      localStorage.setItem("feedback-form-state", JSON.stringify(objectInput));
      
})

form.addEventListener("submit", (event) => {
      event.preventDefault();
      const { elements: { email, message } } = event.currentTarget;
      console.log({ email: email.value, message: message.value });
      
      event.currentTarget.reset();
      localStorage.clear();
});

const storageData = localStorage.getItem("feedback-form-state");
const parseStorageData = JSON.parse(storageData);
const tryFoo = () => {
      if (parseStorageData.email !== "" || parseStorageData.message !== "") {
            input.value = parseStorageData.email;
            textArea.value = parseStorageData.message;
      };
};
tryFoo();
console.log(parseStorageData);