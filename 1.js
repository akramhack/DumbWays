<!DOCTYPE html>
<html>
<head>
    <title>Hitung Gaji</title>
</head>
<body>
    <h3>Menghitung Gaji Bersih Karyawan</h3>
    <script type="text/javascript">
        //Deklarasi Variabel
        var Param1, Param2, Param3, Param4;
        var tunjangan, bpjs, pajak, biayabpjs, biayapajak, gajibersih;

        //Inisialisasi variabel;
        tunjangan = 500000;
        bpjs = 0.03;
        pajak = 0.05;

        //Input data pegawai dan jam kerjannya
        Param1 = prompt("Nama Karyawan : ");
        Param2 = prompt("Gaji Pokok : ");
        Param3 = prompt("Lama Kerja : ");
        Param4 = prompt("Ada Tunjangan :");

        //hitung Tunjangan
        if(Param4 == "true") {
          Param4 = tunjangan;
        }
        else{
          Param4 = 0;
        }

        //hitung total gaji & gaji bersih
        biayabpjs = Param2 * bpjs;
        biayapajak = Param2 * pajak;
        gajibersih = Param2 + Param4 - Param2 * bpjs - Param2 * pajak;
        totalgaji = gajibersih * Param3;

        //tampilkan hasil
        document.write("Nama Karyawan : "+Param1);
        document.write("<br/>Gaji Pokok : "+Param2);
        document.write("<br/>Tunjangan : "+Param4);
        document.write("<br/>BPJS : "+biayabpjs);
        document.write("<br/>Pajak : "+biayapajak);
        document.write("<br/>Gaji Bersih : "+gajibersih);
        document.write("<br/>Total Gaji : "+totalgaji);
    </script>
</body>
</html>
