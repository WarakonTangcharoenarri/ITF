const username = document.getElementById("usernameLink");
const nameInput = document.getElementById("name");
const imgInput = document.getElementById("img")
const profile = document.getElementById("profile");
const newdiv =  document.getElementsByClassName("container")[0];



function setName(){
    username.textContent = nameInput.value + "'s phone book";
    nameInput.value = "";
}
function setimg(){
    const imgUrl = imgInput.value;
    profile.style.backgroundImage = `url("${imgUrl}")`;
    console.log(input.value);
    imgInput.value = "";
}


let rowCount = 0; // ตัวแปรนับจำนวนแถว
let phonenumber = []; // ตัวแปรสำหรับเก็บข้อมูลหมายเลขโทรศัพท์

function addParagraph() {
    const name = document.getElementById("name_Tal").value; // รับค่าชื่อ
    const tel = document.getElementById("tal").value; // รับค่าเบอร์โทร

    // ตรวจสอบว่าชื่อและเบอร์โทรมีค่าไหม
    if (name && tel) {
        rowCount++; // เพิ่มตัวนับแถว
        const tableBody = document.getElementById("tableBody");
        const newRow = document.createElement("tr"); // สร้างแถวใหม่

        // สร้างเซลล์สำหรับลำดับ
        const orderCell = document.createElement("td");
        orderCell.textContent = rowCount; // แสดงลำดับ
        newRow.appendChild(orderCell); // เพิ่มเซลล์เข้าไปในแถว

        // สร้างเซลล์สำหรับชื่อ
        const nameCell = document.createElement("td");
        nameCell.textContent = name; // กำหนดข้อความที่แสดงในเซลล์
        newRow.appendChild(nameCell); // เพิ่มเซลล์เข้าไปในแถว

        // สร้างเซลล์สำหรับเบอร์โทร
        const telCell = document.createElement("td");
        telCell.textContent = tel; // กำหนดข้อความที่แสดงในเซลล์
        newRow.appendChild(telCell); // เพิ่มเซลล์เข้าไปในแถว

        // เพิ่มแถวใหม่เข้าไปใน tbody ของตาราง
        tableBody.appendChild(newRow);
        
        // เพิ่มข้อมูลลงใน array
        phonenumber.push([rowCount, name, tel]);

        // เคลียร์ค่าฟิลด์ input
        document.getElementById("name_Tal").value = "";
        document.getElementById("tal").value = "";
    } else {
        alert("Please enter both Name and Tel."); // แจ้งเตือนถ้ายังไม่ได้กรอก
    }
}

function saveCSV() {
    // ตรวจสอบว่ามีข้อมูลใน phonenumber หรือไม่
    if (phonenumber.length === 0) {
        alert("No data to save.");
        return;
    }

    // สร้าง CSV string จากข้อมูลใน phonenumber
    const csvContent = "data:text/csv;charset=utf-8," 
        + phonenumber.map(row => row.join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "phone Number List.csv");
    document.body.appendChild(link); // จำเป็นต้องเพิ่มลิงก์ลงใน DOM
    link.click(); // คลิกเพื่อดาวน์โหลด
    document.body.removeChild(link); // ลบลิงก์หลังจากดาวน์โหลด
}

