document.addEventListener("DOMContentLoaded", function(event) { 
    const url = new URL(window.location.href);
    const apiUrl = `http://moien.ersys-solutions.com:7035/API/job-announcement/${url.searchParams.get("jobId")}`
    const appendDetails = (content)=>{
        document.getElementById("location").innerHTML = content.location;
        document.getElementById("date").innerHTML = new Date(content.createdDate).toLocaleDateString(undefined, {
            day: '2-digit',
            month: 'short'
          });
        document.getElementById("contract").innerHTML = content.contractType.desc;
        document.getElementById("title").innerHTML = content.title;
        document.getElementById("desc").innerHTML = content.description;
    }
    fetch(apiUrl, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => {
          if (resp.status === 200) {
            return resp.json();
          } else {
            console.log("Status: " + resp.status);
            alert("Internet Connexion lost !!!");
            return Promise.reject("server");
          }
        })
        .then((dataJson) => {
          appendDetails(dataJson);
        })
        .catch((err) => {
          if (err === "server") return;
          console.log(err);
        });
      });
      