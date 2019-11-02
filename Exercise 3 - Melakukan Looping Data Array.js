//Melakukan Looping Data Array
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling(arr){
    for(a=0 ; a<arr.length ; a++){
    return 'Nomor ID: '+ arr[a][0]+'\n'+'Nama Lengkap: '+arr[a][1]+'\n'+'TTL: '+arr[a][2]+' '+arr[a][3]+'\n'+'Hobi: '+arr[a][4];
    }
}

console.log(dataHandling(input));