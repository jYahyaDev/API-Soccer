
const table = document.querySelector('table');
const inputEl = document.querySelector('input');
const btnEl = document.querySelector('[type=submit]');



btnEl.addEventListener('click',function(){
    const equipe = inputEl.value;
    console.log(equipe)
    let url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${equipe}`
    fetch(url)
    .then(function(response){
        console.log(response)
        return response.json();
    })
    .then(function(data){
        
        console.log(data.teams[0].strTeam);
        table.insertAdjacentHTML(
          'beforeend',
          `<td> ${data.teams[0].strTeam}</td>
           <td> ${data.teams[0].strStadium}</td>
           <td> ${data.teams[0].strWebsite}</td>                            `
        );
        console.log(data)
        
    })

})
