# Hafta 01 · İnternet ve Web Nasıl Çalışır?

**Haftanın sorusu:** Adres çubuğuna `example.com` yazıp Enter'a bastığımızda ne olur?

Bu hafta kod yazmayacağız; komut satırı araçlarını ve tarayıcının Network sekmesini kullanacağız.

---

## Canlı demo (derste)

```bash
nslookup example.com      # alan adının arkasındaki IP
ping example.com          # gidiş-dönüş süresi
tracert example.com       # Windows   — paketin geçtiği duraklar
traceroute example.com    # macOS/Linux
```

`nslookup` çıktısındaki **"Yetkili olmayan yanıt"** ifadesi, cevabın önbellekten
geldiği anlamına gelir: cevabı veren makine `example.com`'un sahibi değil,
yalnızca önbelleğinde tutuyor.

`tracert` çıktısında sürenin bir adımda birden arttığını görebilirsiniz. Bu,
paketin o noktada uzun bir fiziksel mesafe katettiğini gösterebilir. Ağ gecikmesi
tasarım kararlarını doğrudan etkiler.

---

## Alıştırma (20 dk)

Sık kullandığınız bir siteyi seçin (üniversitenizin sitesi de olur) ve
`inceleme-formu.md` dosyasını doldurun:

1. `nslookup` ile sitenin IP adresi
2. `ping` ile ortalama gidiş-dönüş süresi
3. `tracert` ile toplam sıçrama sayısı
4. **F12 → Network** sekmesini açıp sayfayı yenileyin; en üstteki isteğin
   `Status` ve `Type` sütunlarını not edin

Sonra yan sıranızdakiyle karşılaştırın: **IP'ler aynı mı çıktı?** Farklıysa neden?

---

## Takılırsanız

| Sorun | Sebep / çözüm |
|---|---|
| `ping` cevap vermiyor | Birçok sunucu ICMP'yi kapatır. Site çalışmıyor demek değildir. |
| `tracert` çok yavaş | `tracert -h 15 example.com` ile durak sayısını sınırlayın. |
| `nslookup` yok | Windows'ta vardır; Linux'ta `dig` veya `host` kullanın. |
| Network sekmesi boş | Sekme açıkken sayfayı **yenileyin** (F5). |

## Neden IP'ler farklı çıkabilir?

Büyük siteler tek bir makinede durmaz. Bir **CDN** arkasındadırlar ve DNS size
coğrafi olarak en yakın sunucunun IP'sini döndürür. Aynı alan adı, farklı
kişilere farklı IP verebilir — bu bir hata değil, tasarımın kendisidir.
