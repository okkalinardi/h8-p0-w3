//Menggunakan Built-in Function pada Array

function dataHandling2(arr){
    arr.splice(1, 1, 'Roman Alamsyah Elsharawy');
    arr.splice(2, 1, 'Provinsi Bandar Lampung');
    arr.splice(4, 1, 'Pria');
    arr.splice(5, 0, 'SMA Internasional Metro');
    console.log(arr)

    switch(arr[3][3]+arr[3][4]){
        case '01': console.log('Januari');
        break;
        case '02': console.log('Februari');
        break;
        case '03': console.log('Maret');
        break;
        case '04': console.log('April');
        break;
        case '05': console.log('Mei');
        break;
        case '06': console.log('Juni');
        break;
        case '07': console.log('Juli');
        break;
        case '08': console.log('Agustus');
        break;
        case '09': console.log('September');
        break;
        case '10': console.log('Oktober');
        break;
        case '11': console.log('November');
        break;
        case '12': console.log('Desember');
        break;
    }
    var tglspl = input[3].split('/')
    console.log(tglspl.sort(function compareNumbers(a, b) {
  return a - b;
}).reverse())//masih belum sesuai output yg diharapkan
    console.log(tglspl.join('-'))
    console.log(input[1].slice(0, 15))
    
}
var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */
