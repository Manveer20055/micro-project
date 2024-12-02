document.getElementById('loadDataBtn').addEventListener('click', async function() {
    try {
        const response = await fetch('/api/data');
        const data = await response.json();
        
        const container = document.getElementById('dataContainer');
        container.innerHTML = '';  

        data.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.innerHTML = `
               <div style=" border:1px solid black; background:white; margin-top:0.1rem;">  <h3>  ${item.jock}</h3>
                
               </div>
            `;
            
            container.appendChild(itemElement);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
