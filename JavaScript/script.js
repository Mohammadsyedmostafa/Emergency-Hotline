
let counter = 0;
let coins = 100;
const history = []

const heartButtons = document.querySelectorAll('.heart-button');
for (const btn of heartButtons) {
    btn.addEventListener('click', function(e) {
        e.preventDefault()
        counter++;
        document.getElementById('heart-count').innerText = counter;
    });
}

// call button
const callButtons = document.querySelectorAll('.call-button');
const coinDisplay = document.getElementById('coin-display');
const callHistory = document.getElementById('call-history');

for (const btn of callButtons) {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const card = btn.closest('.card');
        const serviceName = card.querySelector('.service-name').innerText;
        const serviceNumber = card.querySelector('.service-number').innerText;

        if (coins < 20) {
            alert("Not enough coins");
            return;
        }
        coins -= 20;
        coinDisplay.innerText = coins;
        alert(`Calling ${serviceName} (${serviceNumber})`);

        // Data save
        const data = {
            name: serviceName,
            number: serviceNumber,
            date: new Date().toLocaleTimeString()
        };
        history.push(data);

        // Update Call History
        callHistory.innerText = "";
        for (const item of history) {
            const div = document.createElement('div');
            div.innerHTML = `
                    <div class="m-3 flex justify-between items-center">
                        <div class="">
                            <h1 class="font-semibold text-md">${item.name}</h1>
                            <p class="font-normal text-sm">${item.number}</p>
                        </div>
                        <div>
                            <p class="font-normal text-sm">${item.date}</p>
                        </div>
                    </div>
            `;
            callHistory.appendChild(div);
        }
    });
}

// copy button 

const copyButtons = document.querySelectorAll('.copy-button')
for(const btn of copyButtons){
  btn.addEventListener('click', function(){
    const card = btn.closest('.card')
    const text = card.querySelector('.service-number').innerText
    navigator.clipboard.writeText(text)
    btn.innerText = "Copied!" ,alert("Your Information is Copy Successful")
    setTimeout(()=> btn.innerText = "Copy", 1500)
  })
}

// copy count
const copyCounts = document.querySelectorAll('.copy-button')
    for(const btn of copyCounts){
        btn.addEventListener('click', function(e){
        e.preventDefault()
        counter++;
        document.getElementById('copy-count').innerText = counter;    
    })
}

// clear button 
document.getElementById('clear-button').addEventListener('click',function(e){
    e.preventDefault()
    callHistory.innerText = ""
})

