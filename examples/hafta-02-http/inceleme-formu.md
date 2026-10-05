# İnceleme formu — Hafta 02

Her adres için `curl -v <adres>` çalıştırıp doldurun.

| # | Adres | Durum kodu | Ailesi | `Content-Type` | `Location` |
|---|---|---|---|---|---|
| 1 | https://example.com | | | | |
| 2 | https://httpbin.org/status/301 | | | | |
| 3 | https://httpbin.org/status/404 | | | | |
| 4 | https://httpbin.org/json | | | | |

## Aileler

| Aile | Anlamı |
|---|---|
| 1xx | Bilgi (nadir) |
| 2xx | Başarılı |
| 3xx | Yönlendirme |
| 4xx | İstemci hatası — "sen yanlış istedin" |
| 5xx | Sunucu hatası — "ben beceremedim" |

## Tarayıcı karşılaştırması

Seçtiğim adres: ____________________

| | `curl` | F12 → Network |
|---|---|---|
| Durum kodu | | |
| `Content-Type` | | |
| Kaç istek yapıldı? | 1 | |

**İki araç aynı şeyi mi gösteriyor?** Farklıysa neden?

____________________________________________________

> İpucu: tarayıcı sayfayı aldıktan sonra CSS, görsel ve betikler için
> **ek istekler** yapar. `curl` yalnızca istediğiniz tek isteği atar.
