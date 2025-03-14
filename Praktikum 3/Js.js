function NamaJPil() { /* Tampilan Awal */
    let name = document.getElementById("nama").value;
    let JPil = document.getElementById("jumlah").value;
    let formSection = document.getElementById("formSection");
    let inputSection = document.getElementById("inputSection");
    let inputList = document.getElementById("inputList");
    if (name.trim() === "" || isNaN(JPil) || JPil < 1 || JPil > 5) { 
    /* .trim() === digunakan untuk memeriksa apakah input name hanya berisi spasi atau kosong. */
        alert("Nama dan Jumlah Pilihan tidak boleh kosong");
        return;
    }
    inputList.innerHTML = "";
    for (let i = 1; i <= jumlah; i++) {
        let div = document.createElement("div");
        div.innerHTML = `Pilihan ${i}: <input type='text' id='pilihan${i}'>`;
        inputList.appendChild(div);
    }
    formSection.classList.add("disabled"); /* buat tampilan awal disabled */
    inputSection.classList.remove("hidden"); /* munculkan tampilan selanjutnya*/
}
function showSelection() { /* Tampilan isi pilihan */
    let jumlah = parseInt(document.getElementById("jumlah").value);
    let inputSection = document.getElementById("inputSection");
    let selectionSection = document.getElementById("selectionSection");
    let radioList = document.getElementById("radioList");
    let dropdown = document.getElementById("dropdown");
    
    radioList.innerHTML = "";
    dropdown.innerHTML = "";
    
    for (let i = 1; i <= jumlah; i++) {
        let inputField = document.getElementById(`pilihan${i}`);
        let text = inputField.value.trim();
        if (text === "") {
            alert("Tolong pilihan diisi dulu.");
            return;
        }
        
        let div = document.createElement("div");
        div.innerHTML = `<input type='radio' name='pilihan' value='${text}'> ${text}`;
            
        radioList.appendChild(div);
        
        let option = document.createElement("option");
        option.value = text;
        option.textContent = text;
        dropdown.appendChild(option);
    }
    
    inputSection.classList.add("disabled");
    selectionSection.classList.remove("hidden");
}

function showResult() { /* Tampilan pilih beberapa pilihan */
    let nama = document.getElementById("nama").value;
    let jumlah = parseInt(document.getElementById("jumlah").value);
    let selectedRadio = document.querySelector("input[name='pilihan']:checked");
    let selectedDropdown = document.getElementById("dropdown").value;
    let resultSection = document.getElementById("resultSection");
    let resultText = document.getElementById("resultText");
    
    let pilihanList = [];
    for (let i = 1; i <= jumlah; i++) {
        pilihanList.push(document.getElementById(`pilihan${i}`).value);
    }
    
    let selectedChoice = selectedRadio ? selectedRadio.value : selectedDropdown;
    
    if (!selectedChoice) {
        alert("Harap pilih salah satu pilihan.");
        return;
    }
    /*  */
    resultText.innerHTML = `Hallo, nama saya ${nama}, saya mempunyai sejumlah ${jumlah} pilihan yaitu ${pilihanList.join(", ")}, dan saya memilih ${selectedChoice}.`;
            
    /* Menyembuyikan halaman awal dan tengah */
    formSection.classList.add("hidden"); 
    inputSection.classList.add("hidden");
    selectionSection.classList.add("hidden"); 
}