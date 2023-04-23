const client_name = document.getElementById("input_client_name");
const client_rg = document.getElementById("input_client_RG");
const client_cpf = document.getElementById("input_client_CPF");
const client_discount = document.getElementById("input_client_discount");
const contract_model = document.getElementById("file_input_contract");

const generatePDF = (e) => {
  e.preventDefault();
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF("p", "pt", "letter");

  doc.html(document.body, {
    callback: function (doc) {
      doc.save();
    },
  });
};

const client_button = document
  .getElementById("input_client_button")
  .addEventListener("click", generatePDF);