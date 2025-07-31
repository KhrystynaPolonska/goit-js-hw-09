
const formData = {
  email: "",
  message: ""
};

const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");


window.addEventListener("DOMContentLoaded", () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    try {
      const parsedData = JSON.parse(savedData);
    
      formData.email = parsedData.email || "";
      formData.message = parsedData.message || "";
      form.email.value = formData.email;
      form.message.value = formData.message;
    } catch (error) {
      console.error("Ошибка парсинга данных из localStorage", error);
    }
  }
});


form.addEventListener("input", event => {
  const target = event.target;
  if (target.name === "email" || target.name === "message") {
    formData[target.name] = target.value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }
});


form.addEventListener("submit", event => {
  event.preventDefault();


  if (formData.email.trim() === "" || formData.message.trim() === "") {
    alert("Fill please all fields");
    return;
  }

  console.log("Submitted data:", formData);

  // Очистка
  localStorage.removeItem(STORAGE_KEY);
  formData.email = "";
  formData.message = "";
  form.reset();
});