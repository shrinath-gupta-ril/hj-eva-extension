const responseContainerClass = "open-conv-flow mt-2 ml-3 ng-star-inserted"
const intentContainerClass = "ql-editor"
const saveButtonClass = "save-btn"

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (node.classList && node.classList.value == responseContainerClass) {
        let saveButton = node.querySelector(`.${saveButtonClass}`)
        if (saveButton != null) {
          saveButton.addEventListener("click", () => {
            let intentContainer = node.querySelector(`.${intentContainerClass}`)
            let intentJsonString = intentContainer.querySelector("p").textContent
            try {
              JSON.parse(intentJsonString)
            } catch (e) {
              alert("Invalid Json!!!")
            }
          })
        }
      }
    })

  });
});

observer.observe(document.body, { childList: true, subtree: true });