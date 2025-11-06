document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('searchbtn');

  button.addEventListener('click', async () => {
    try {
        const httprequest = await fetch("superheroes.php");
        const data = await httprequest.text();
        alert(data)
    }catch(error){
        alert("Error fetching data");
        console.error(error);
    }    
  });
});