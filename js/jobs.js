document.addEventListener("DOMContentLoaded", function (event) {

  const appendElements = (jobs) => {
    // document.getElementById("loader").classList.add("hidden");
    document.getElementById("loader1").classList.add("hidden");
    let docFrag = document.createDocumentFragment();

    for (let index = 0; index < jobs.length; index++) {
      const element = jobs[index];
      const createdDate = new Date(element.createdDate).toLocaleDateString(
        undefined,
        {
          day: "2-digit",
          month: "short",
        }
      );
      let tempNode = document
        .querySelector("div[data-type='template']")
        .cloneNode(true);
      tempNode.setAttribute("id", element.id);
      tempNode.querySelector("#contractType").textContent =
        element.contractType.desc;
      tempNode.querySelector("#title").textContent = element.title;
      // tempNode.querySelector("#desc").innerHTML = element.description;
      tempNode.querySelector("#location").textContent = element.location;
      tempNode.querySelector("#date").textContent = createdDate;
      docFrag.appendChild(tempNode);
    }
    document.getElementById("jobList").appendChild(docFrag);
  };

  const appendDescription = (description)=> {
    document.getElementById("description").innerHTML = description;
  }
  // fetch("https://testbo.moien.com/API/", { // moien Description
  //   method: "get",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // })
  //   .then((resp) => {
  //     if (resp.status === 200) {
  //       return resp.json();
  //     } else {
  //       alert("Internet Connexion lost !!!");
  //       return Promise.reject("server");
  //     }
  //   })
  //   .then((dataJson) => {
  //     appendDescription(dataJson);
       
  //   })
  //   .catch((err) => {
  //     if (err === "server") return alert("Connexion Problem");
  //   });

    fetch("https://testbo.moien.com/API/job-announcement", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        if (resp.status === 200) {
          return resp.json();
        } else {
          alert("Internet Connexion lost !!!");
          return Promise.reject("server");
        }
      })
      .then((dataJson) => {
         appendElements(dataJson);
         
      })
      .catch((err) => {
        if (err === "server") return alert("Connexion Problem");
        
      });
});
const onClickJob = (id) => {
  window.location.href = "/job-offer-detail.html?jobId=" + id;
};
