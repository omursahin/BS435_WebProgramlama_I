# BS435 · Web Programlama I

Bu ders genel olarak protokol tabanlıdır. Belirli bir framework yerine web'in nasıl çalıştığı anlatılır. Dersler işlendikçe slaytlar eklenecektir. 

Bütün derslere genel bakış için: [`docs/00-mufredat.pdf`](docs/00-mufredat.pdf)

Her haftanın slaytı ve ders içi alıştırma dosyaları aşağıdaki tablodan
bağlantılıdır. Boş satırlar henüz işlenmemiş haftalardır.

## Haftalar

### Blok 1 — Web'in temeli

| # | Konu | Haftanın sorusu | Materyal |
|---|---|---|---|
| 01 | İnternet ve web nasıl çalışır | `example.com` yazıp Enter'a bastığımızda ne olur? | [slayt](docs/hafta-01.pdf) · [alıştırma](examples/hafta-01-internet-ve-web/) |
| 02 | HTTP protokolü | Tarayıcı ile sunucu hangi bilgileri gönderiyor? | — |
| 03 | Tarayıcı ve HTML | Tarayıcı bir metin dosyasını nasıl ekrana çeviriyor? | — |
| 04 | CSS ve sayfa düzeni | Aynı HTML telefonda ve masaüstünde nasıl farklı görünüyor? | — |
| 05 | Formlar ve veri gönderimi | Form alanları HTTP isteğine nasıl dönüşüyor? | — |
| 06 | Git, GitHub ve yayına alma | Bilgisayarımdaki klasör nasıl internetteki bir adrese dönüşüyor? | — |

### Blok 2 — Programlama ve dinamik web

| # | Konu | Haftanın sorusu | Materyal |
|---|---|---|---|
| 07 | JavaScript temelleri | HTML yapıyı, CSS görünümü belirler; etkileşimi hangi dil yönetir? | — |
| 08 | DOM ve olaylar | JavaScript DOM'u nasıl değiştiriyor? | — |
| 09 | Modern JavaScript ve asenkron | Veri beklenirken sayfa nasıl yanıt vermeye devam ediyor? | — |
| 10 | Fetch API ve REST kavramı | Sayfa veriyi nereden alıyor? | — |
| 11 | HTTP durumu: çerez, oturum, önbellek | HTTP her isteği unutuyorsa site beni nasıl hatırlıyor? | — |

### Blok 3 — Sunucu, veri, güvenlik

| # | Konu | Haftanın sorusu | Materyal |
|---|---|---|---|
| 12 | Backend programlamaya giriş | İsteği karşılayan tarafta ne oluyor? | — |
| 13 | Veritabanı ve web uygulamaları | Sunucu kapanınca veri neden kaybolmuyor? | — |
| 14 | Web güvenliği ve kapanış | Bir web uygulamasında hangi güvenlik riskleri oluşur? | — |

## Hafta 01 · İnternet ve web

Slayt: [`docs/hafta-01.pdf`](docs/hafta-01.pdf)

Ders içi alıştırma (20 dk): bir siteyi seçip `nslookup`, `ping` ve `tracert`
ile IP adresini, gecikmesini ve sıçrama sayısını çıkarmak; ardından
**F12 → Network** sekmesinde ilk isteğin `Status` ve `Type` değerlerini not etmek.

Yönerge ve doldurulacak form:
[`examples/hafta-01-internet-ve-web/`](examples/hafta-01-internet-ve-web/)

Bu hafta kod yazılmıyor; araçlar, komut satırı ve tarayıcının geliştirici
araçları kullanılıyor.

## Eski dönemler

Önceki yılların ders materyalleri ayrı branchlerde bulunmaktadır: [`2025`](../../tree/2025) ve [`2023`](../../tree/2023).
