document.addEventListener("DOMContentLoaded", function (event) {
  const url = new URL(window.location.href);
  const apiUrl = `http://moien.ersys-solutions.com:7035/API/job-announcement/${url.searchParams.get(
    "jobId"
  )}`;
  const appendDetails = (() => {
    const content = {
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
    };
    document.getElementById("location").innerHTML = content.location;
    document.getElementById("date").innerHTML = new Date(
      content.createdDate
    ).toLocaleDateString(undefined, {
      day: "2-digit",
      month: "short",
    });
    document.getElementById("contract").innerHTML = content.contractType.desc;
    document.getElementById("title").innerHTML = content.title;
    document.getElementById("desc").innerHTML = content.description;
  })();
  // fetch(apiUrl, {
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
  //       appendDetails(dataJson);
  //     })
  //     .catch((err) => {
  //       if (err === "server") return;
  //       console.log(err);
  //     });
});
