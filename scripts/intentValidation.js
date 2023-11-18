const standaloneResponseContainerClass = "open-conv-flow"
const conversationalResponseContainerClass = "mat-dialog-container"
const intentContainerClass = "ql-editor"
const standaloneResponseSaveButtonClass = "save-btn"
const conversationalResponseSaveButtonClass = "submit"

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if(!node.classList) {
        return
      }
      if(node.classList.contains(conversationalResponseContainerClass)) {
        console.log("Found conversationalResponseContainerClass")
          let conversationalSaveButton = getElementByExactClassFromNode(node, conversationalResponseSaveButtonClass)
          if (conversationalSaveButton == null) {
            console.log("Couldn't find save button for conversationalResponseContainerClass")
            return
          }
          conversationalSaveButton.addEventListener("click", () => {
            let intentContainers = getElementsByExactClassFromNode(node, intentContainerClass)
            if (intentContainers == null) {
              console.log("Couldn't find intent containers for conversationalResponseContainerClass")
              return
            }
            intentContainers.forEach(intentContainer => {
              let intentJsonString = intentContainer.querySelector("p").textContent
              try {
                JSON.parse(intentJsonString)
              } catch (e) {
                alert("Invalid Json!!!")
                return
              }
            })
          })
      }
      else if(node.classList.contains(standaloneResponseContainerClass)) {
          console.log("Standalone response is visible")
          let standaloneSaveButton = getElementByExactClassFromNode(node, standaloneResponseSaveButtonClass)
          if (standaloneSaveButton == null) {
            console.log("Couldn't find save button for standaloneResponseContainerClass")
            return
          }
          standaloneSaveButton.addEventListener("click", () => {
            let intentContainer = getElementByExactClassFromNode(node, intentContainerClass)
            if (intentContainer == null) {
              console.log("Couldn't find intent container for standaloneResponseContainerClass")
              return
            }
            let intentJsonString = intentContainer.querySelector("p").textContent
            try {
              JSON.parse(intentJsonString)
            } catch (e) {
              alert("Invalid Json!!!")
            }
          })
      }
    })
    return
  });
});

observer.observe(document.body, { childList: true, subtree: true })