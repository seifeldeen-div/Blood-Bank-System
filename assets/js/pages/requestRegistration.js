 

const form = document.getElementById("form");
const submitBtn = document.getElementById("sumbit");
const fixMsg = document.querySelector(".fix");
const successMsg = document.querySelector(".submitedMassege");

 
const normalBtn = document.getElementById("normal");
const urgentBtn = document.getElementById("urgent");
const urgentMass = document.querySelector(".urgentmass");
const urgentIconInSubmit = submitBtn.querySelector("i.urgent");

let emergencyLevel = "normal";  

 
const fields = [
  { selector: "#patient-name",   name: "patient name" },
  { selector: "#Required-Blood", name: "blood type" },
  {
    selector: "#Quantity",
    name: "quantity",
    validate: (val) => {
      const n = Number(val);
      return Number.isInteger(n) && n >= 1 && n <= 10;
    },
    customError: "Quantity must be between 1 and 10",
  },
  { selector: "#Hospital-name",  name: "hospital name" },
  { selector: "#city",           name: "city" },
  {
    selector: 'input[name="Phone number"]',
    name: "phone number",
    validate: (val) => /^[0-9]{10,15}$/.test(val.replace(/\s/g, "")),
    customError: "Enter a valid phone number",
  },
];

 
function showError(input, msg) {
  const errorSpan = input.parentElement.querySelector(".error");
  input.style.outline = "1.5px solid #e7000b";
  if (errorSpan) {
    if (msg) errorSpan.textContent = msg;
    errorSpan.style.visibility = "visible";  
  }
}

 
function hideError(input) {
  const errorSpan = input.parentElement.querySelector(".error");
  input.style.outline = "";
  if (errorSpan) errorSpan.style.visibility = "hidden"; 
}

 
fields.forEach(({ selector, validate, customError }) => {
  const input = document.querySelector(selector);
  if (!input) return;

  const eventType = input.tagName === "SELECT" ? "change" : "input";

  input.addEventListener(eventType, () => {
    const val = input.value.trim();

    if (val === "") {
       
      return;
    }

    if (validate && !validate(val)) {
      
      showError(input, customError);
    } else {
      hideError(input);
    }
  });
});

 
normalBtn.addEventListener("click", (e) => {
  e.preventDefault();
  emergencyLevel = "normal";

  normalBtn.style.backgroundColor = "#f0fdf4";
  normalBtn.style.borderColor = "#00c950";
  urgentBtn.style.backgroundColor = "";
  urgentBtn.style.borderColor = "";

  urgentMass.style.display = "none";
  urgentIconInSubmit.style.display = "none";
});

urgentBtn.addEventListener("click", (e) => {
  e.preventDefault();
  emergencyLevel = "urgent";

  urgentBtn.style.backgroundColor = "#fef2f2";
  urgentBtn.style.borderColor = "#fb2c36";
  normalBtn.style.backgroundColor = "transparent";
  normalBtn.style.borderColor = "#bfc4cc";

  urgentMass.style.display = "block";
  urgentIconInSubmit.style.display = "inline";
});

 
function showFixMsg() {
  fixMsg.style.display = "flex";
  fixMsg.style.left = "-100%"; 


  fixMsg.getBoundingClientRect();


  fixMsg.style.left = "10px";

  setTimeout(() => {
    fixMsg.style.left = "-100%";
    setTimeout(() => (fixMsg.style.display = "none"), 400);
  }, 4000);
}

 
const closeSuccessBtn = successMsg.querySelector(".fa-xmark")?.closest("span, i");
if (closeSuccessBtn) {
  closeSuccessBtn.style.cursor = "pointer";
  closeSuccessBtn.addEventListener("click", () => {
    successMsg.style.display = "none";
  });
}

 
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let hasError = false;

  fields.forEach(({ selector, validate, customError }) => {
    const input = document.querySelector(selector);
    if (!input) return;

    const val = input.value.trim();

    if (val === "") {
      showError(input);
      hasError = true;
    } else if (validate && !validate(val)) {
      showError(input, customError);
      hasError = true;
    } else {
      hideError(input);
    }
  });

  if (hasError) {
    showFixMsg();
    return;
  }

    const liItems = successMsg.querySelectorAll(".content ul li");
  const bloodVal  = document.querySelector("#Required-Blood").value;
  const qtyVal    = document.querySelector("#Quantity").value;
  const cityVal   = document.querySelector("#city").value;
  const phoneVal  = document.querySelector('input[name="Phone number"]').value.trim();
  const patientVal= document.querySelector("#patient-name").value.trim();
  const hospitalVal=document.querySelector("#Hospital-name").value.trim();

  const labels = [
    { label: "Patient",   val: patientVal },
    { label: "Blood Type",val: bloodVal },
    { label: "Quantity",  val: qtyVal + " bag(s)" },
    { label: "Hospital",  val: hospitalVal },
    { label: "City",      val: cityVal },
    { label: "Phone",     val: phoneVal },
    { label: "Priority",  val: emergencyLevel.charAt(0).toUpperCase() + emergencyLevel.slice(1) },
  ];

  liItems.forEach((li, i) => {
    if (labels[i]) {
      li.innerHTML = `<strong>${labels[i].label}:</strong> ${labels[i].val}`;
    }
  });

  successMsg.style.display = "flex";
  form.reset();

  emergencyLevel = "normal";
  urgentMass.style.display = "none";
  urgentIconInSubmit.style.display = "none";
  normalBtn.style.backgroundColor = "#f0fdf4";
  normalBtn.style.borderColor = "#00c950";
  urgentBtn.style.backgroundColor = "";
  urgentBtn.style.borderColor = "";
});