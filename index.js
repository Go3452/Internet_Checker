window.addEventListener("load",checkInternetConnection);

function checkInternetConnection(){
    const statusText = document.getElementById("statusText");
    const statusIp = document.getElementById("statusIp");
    const statusNetwork = document.getElementById("statusNetwork");
    
    statusText.textContent = 'Checking....';

    if(navigator.onLine)
    {
     fetch('https://api.ipify.org/?format=json')
     .then((response)=> response.json())
     .then((data)=>{
      statusIp.textContent = data.ip;
      statusText.textContent = 'Connected';
      const connection = navigator.connection;

      var networkStrength = connection ?connection.downlink+'Mbps' : 'Unknown';
      statusNetwork.textContent = networkStrength;
     })
     .catch(()=>{
        statusText.textContent = 'Disconnected';
        statusIp.textContent = '---';
        statusNetwork.textContent = '---';
     })
    }
    else
    {
     statusText.textContent = 'Disconnected';
     statusIp.textContent = '---';
     statusNetwork.textContent = '---';
    }
}
