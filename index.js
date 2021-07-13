let emailCollectorForm = document.getElementById("Email-Collector");
emailCollectorForm.addEventListener("submit", (event) => {
  //   stop default event behavior
  event.preventDefault();
  // use form data to get user's name and email
  let ourFormData = new FormData(event.target);
  let userFirstName = ourFormData.get("name");
  let userEmailAddress = ourFormData.get("email");

  let updatedHtmlContent = `
            <h2>Congratulations, ${userFirstName}!</h2>
            <p>You're on your way to becoming a BBQ Master!
            </p>
           
            <p class="fine-print">
                You will get weekly BBQ tips sent to: ${userEmailAddress}
            </p>
            `;

  let updatedContentContainer = document.getElementById("main-content");
  updatedContentContainer.innerHTML = updatedHtmlContent;
});
