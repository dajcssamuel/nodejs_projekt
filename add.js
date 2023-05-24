
function sendPost(){
    const data = document.getElementById("name").value+";"+document.getElementById("suly").value+";"+document.getElementById("fekmax").value+";"+document.getElementById("gugmax").value;
    console.log(data);
      navigator.sendBeacon('http:localhost:3000/savedetails/'+ data);
      console.log(data);
    }