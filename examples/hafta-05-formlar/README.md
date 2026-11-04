# Hafta 05 · Formlar ve Veri Gönderimi

**Haftanın sorusu:** Doldurduğum form sunucuya tam olarak ne gönderiyor?

---

## Canlı demo (derste)

Aynı formu önce `method="get"`, sonra `method="post"` ile gönderip
**F12 → Network** sekmesinde iki isteği yan yana koyalım.

| | GET | POST |
|---|---|---|
| Veri nerede? | adres çubuğundaki sorgu dizgesinde (query string) | istek gövdesinde |
| Görünür mü? | evet — adres çubuğunda, tarayıcı geçmişinde ve sunucu kayıtlarında | adres çubuğunda görünmez; ancak kendiliğinden şifrelenmez |
| Yenilenince | sorunsuz tekrarlanır | "formu yeniden gönder" uyarısı |
| Ne zaman? | veri **getirmek** için | veri **değiştirmek** için |

---

## Alıştırma (20 dk)

`baslangic/index.html` içinde bir kayıt formu yazın ve gönderiminin izini sürün.

1. Ad, e-posta, parola ve bir açılır liste içeren form kurun;
   **her alana `label` ve `name` verin**
2. `method="get"` ile gönderip **adres çubuğunu** okuyun
3. `method="post"` yapıp **Network → Payload** bölümünü okuyun
4. Bir alanın `name`'ini silin, tekrar gönderin ve **ne kaybolduğunu** bulun

Son soru: **`required`'ı DevTools'tan silerseniz form yine gönderilir mi?**

---

## Beklenen keşifler

**`name` yoksa alan gönderilmez.** Kullanıcı doldursa bile. `name`, formun
en kritik niteliklerinden biridir; `id`, etiketi alanla eşleştirir ve öğenin
CSS veya JavaScript ile bulunmasını sağlar. `name` ise gönderilen verinin anahtarıdır.

**`required` bir güvenlik önlemi değildir.** DevTools'tan silinebilir, `curl`
ile forma hiç uğramadan atlanabilir. Tarayıcı doğrulaması **kullanıcı deneyimi**
içindir. Gerçek doğrulama sunucuda yapılır — 12. haftada yazacağız.

**`@` işareti neden `%40` oldu?** Query string ve form gövdesi
**URL kodlaması** kullanır: `&` ve `=` ayraç olduğu için veri içindeki özel
karakterler kaçırılır. Boşluk `+` veya `%20`, `@` ise `%40` olur.

---

## Test sunucusu

Formun nereye gittiğini gerçekten görmek için `httpbin.org` kullanabilirsiniz:

```html
<form action="https://httpbin.org/get"  method="get">
<form action="https://httpbin.org/post" method="post">
```

Gönderdiğiniz her şeyi JSON olarak geri yansıtır.

## Kontrol listesi

- [ ] Her `input` için bir `label` var ve `for` = `id`
- [ ] Her `input` için `name` var
- [ ] `type` doğru seçildi (`email`, `password`, `date`, `number`)
- [ ] Parola alanı **GET ile** gönderilmiyor
- [ ] `fieldset` + `legend` ile alanlar gruplandı
