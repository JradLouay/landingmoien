document.addEventListener("DOMContentLoaded", function (event) {
  const jobs = [
    {
      id: 1,
      createdDate: 1621306924288,
      title: "Développeur React Native confirmé",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. ",
      location: "location1",
      deadline: null,
      contractType: {
        id: 1,
        uid: null,
        uri: null,
        statusRecordId: null,
        createDate: null,
        code: "CDI",
        desc: "CDI",
        descEn: "CDI",
        sortIndex: 1,
        isActive: true,
        parentRefDataUri: null,
      },
    },
    {
      id: 2,
      createdDate: 1621328747398,
      title: "Stage brand & content ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      location: "Location2",
      deadline: null,
      contractType: {
        id: 3,
        uid: null,
        uri: null,
        statusRecordId: null,
        createDate: null,
        code: "STAGE",
        desc: "Stage",
        descEn: "Stage",
        sortIndex: 1,
        isActive: true,
        parentRefDataUri: null,
      },
    },
    {
      id: 3,
      createdDate: 1621329810240,
      title: "Stage product owner",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      location: "Location3",
      deadline: null,
      contractType: {
        id: 3,
        uid: null,
        uri: null,
        statusRecordId: null,
        createDate: null,
        code: "STAGE",
        desc: "Stage",
        descEn: "Stage",
        sortIndex: 1,
        isActive: true,
        parentRefDataUri: null,
      },
    },
  ];
  const appendElements = () => {
    document.getElementById("loader").classList.add("hidden");
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
      tempNode.querySelector("#desc").textContent = element.description;
      tempNode.querySelector("#location").textContent = element.location;
      tempNode.querySelector("#date").textContent = createdDate;
      docFrag.appendChild(tempNode);
    }
    document.getElementById("jobList").appendChild(docFrag);
  };
  setTimeout(() => {
    appendElements();
  }, 1000);
  //   fetch("http://moien.ersys-solutions.com:7035/API/job-announcement", {
  //     method: "get",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((resp) => {
  //       if (resp.status === 200) {
  //         return resp.json();
  //       } else {
  //         console.log("Status: " + resp.status);
  //         alert("Internet Connexion lost !!!");
  //         return Promise.reject("server");
  //       }
  //     })
  //     .then((dataJson) => {
  //       setTimeout(() => {
  //         appendElements(dataJson);
  //       }, 1000);
  //     })
  //     .catch((err) => {
  //       if (err === "server") return;
  //       alert("Connexion Problem")
  //     });
});
const onClickJob = (id) => {
  window.location.href = "/job-offer-detail.html?jobId=" + id;
};
