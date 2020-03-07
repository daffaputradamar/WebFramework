# Jawaban Pertanyaan Pertemuan 5

## Praktikum 1

a. Mengganti class container-fluid menjadi container atau sebaliknya

1. Tampilan Container-fluid dan Container
   - Container-fluid
     ![screenshot container-fluid](markdown-assets/Container-fluid.png)
   - Container
     ![screenshot container](markdown-assets/Container.png)
2. Perbedaannya container-fluid akan mengisi seluruh width pada layar sedangkan container akan terdapat margin left dan margin rightnya

b. Menginstall modulenya dengan menggunakan package manager seperti `npm` atau `yarn`

## Praktikum 2

1. Karena setiap port hanya dapat menjalankan 1 proses.

2. json-server tidak dapat berjalan karena port 3000 sudah digunakan oleh react

## Praktikum 3

1. Data yang dihapus akan hilang pada saat button Hapus diklik

2. listArtikel.json akan berkurang juga isinya sesuai data yang dihapus berdasarkan id

3. Untuk merequest ke json-server dengan method DELETE dengan parameter "id" dari artikel yang akan dihapus, lalu json-server akan menghapus artikel berdasarkan "id" tersebut yang dikirimkan.
   Lalu Menfetch semua data baru (data yang telah dihapus tidak ikut terambil)

4. API yang diambil memiliki sumber data yang berbeda, yang satunya di jsonplaceholder, sedangkan satunya berada di local dengan sumber data listArtikel.json

## Praktikum 4

1. listArtikel.json akan menambahkan data yang diinputkan pada form, sehingga terdapat data baru

2. Karena data yang difetch oleh react akan di order secara descending, sehingga data yang berada dibawah di listArtikel.json akan berada di atas saat ditampilkan oleh react
