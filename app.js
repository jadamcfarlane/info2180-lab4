document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('searchbtn');
  const lookup = document.getElementById('search');
  const result = document.getElementById('result-list');

  button.addEventListener('click', async () => {
    const query = lookup.value.trim();
    const url = "superheroes.php";
    
    if (query!== ""){
            url += "?query=" + encodeURIComponent(query);
    }
        
    try {
        const response = await fetch(url);
        const html = await response.text();

        result.innerHTML = html;

    }catch(error){
        result.innerHTML = "<p>Error fetching data</p>";
      console.error(error);
    }
  });
});