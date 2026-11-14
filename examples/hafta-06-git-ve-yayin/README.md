# Hafta 06 · Git, GitHub ve Yayına Alma

Bu uygulamada hazırladığınız web sayfasını Git ile kayıt altına alacak, GitHub'a gönderecek ve GitHub Pages ile yayımlayacaksınız. Ardından sayfada bir değişiklik yaparak yayındaki siteyi güncelleyeceksiniz.

Uygulama sonunda bir GitHub deponuz, erişilebilir bir web adresiniz ve en az iki kayıttan oluşan bir proje geçmişiniz olacak.

## Başlamadan önce

- Bilgisayarınızda [Git](https://git-scm.com/downloads) kurulu olmalıdır. Terminalde `git --version` komutuyla kurulumu kontrol edin.
- Bir [GitHub](https://github.com/) hesabınız olmalıdır.
- Önceki çalışmalarda hazırladığınız HTML, CSS ve görsel dosyaları hazır olmalıdır.

Komutları aşağıdaki sırayla, **kendi web sitenizin klasöründe açtığınız terminalde** çalıştırın. VS Code kullanıyorsanız klasörü açıp **Terminal → New Terminal** menüsünü seçebilirsiniz.

## 1. Proje klasörünü hazırlayın

Web sitenize ait dosyaları, ders deposunun dışında `web-sitem` adlı ayrı bir klasöre kopyalayın. Böylece yalnızca kendi sitenizi yayımlarsınız. Ana sayfanın adı `index.html` olmalı ve bu dosya doğrudan proje klasöründe bulunmalıdır.

Örnek klasör yapısı:

```text
web-sitem/
├── index.html
├── stil.css
├── gorseller/
│   └── logo.png
└── .gitignore
```

CSS ve görsel dosyalarınızın adları farklı olabilir. HTML içindeki yolların bu adlarla eşleştiğinden emin olun. Yukarıdaki yapı için stil dosyası şöyle bağlanır:

```html
<link rel="stylesheet" href="stil.css">
```

`index.html` dosyasını tarayıcıda açarak sayfanın, stillerin ve görsellerin çalıştığını kontrol edin.

Bu yönergenin yanında bulunan [`.gitignore`](.gitignore) dosyasını kendi proje klasörünüze kopyalayın. Bu dosya, henüz Git tarafından izlenmeyen geçici dosyaların ve bazı gizli bilgi dosyalarının depoya eklenmesini önler. Dosya adının `.gitignore.txt` olmadığını kontrol edin.

> Yayımlayacağınız dosyalarda parola, erişim anahtarı veya özel bilgi bulunmamalıdır. `.gitignore` içerik taraması yapmaz; yalnızca belirtilen dosya ve klasör adlarını dikkate alır.

## 2. Git'i başlatın ve kimliğinizi tanımlayın

Proje klasöründe Git'i başlatın:

```bash
git init
```

Kayıtlarda görünecek adınızı ve e-posta adresinizi tanımlayın. Örnek değerleri kendi bilgilerinizle değiştirin:

```bash
git config user.name "Ad Soyad"
git config user.email "eposta@example.com"
```

Bu ayarlar yalnızca bu proje için geçerlidir. E-posta adresiniz kayıt geçmişinde yer alır; kişisel adresinizi paylaşmak istemiyorsanız GitHub hesabınızın **Settings → Emails** bölümündeki `noreply` adresini kullanabilirsiniz.

## 3. İlk kaydı oluşturun

Önce dosyaların durumunu görün, ardından değişiklikleri seçin:

```bash
git status
git add .
git status
```

`git add .`, bulunduğunuz klasör ve alt klasörlerdeki değişiklikleri hazırlık alanına alır. Son `git status` çıktısındaki **Changes to be committed** bölümü, kayda girecek dosyaları gösterir. Listede yalnızca projenize ait dosyaların bulunduğunu kontrol edin.

Seçtiğiniz değişiklikleri proje geçmişine kaydedin:

```bash
git commit -m "Web sitesinin ilk sürümünü ekle"
git log --oneline
```

`git log --oneline` çıktısında kısa bir kayıt kimliği ve yazdığınız mesaj görünmelidir.

| İşlem | Ne yapar? |
|---|---|
| Editörde kaydetme | Dosyanın bilgisayarınızdaki içeriğini günceller. |
| `git add` | Değişiklikleri bir sonraki kayıt için seçer. |
| `git commit` | Seçilen değişiklikleri yerel proje geçmişine kaydeder. |
| `git push` | Yerel kayıtları uzak depoya gönderir. |

**Kontrol:** Henüz GitHub'a dosya göndermediniz. İlk kayıt yalnızca bilgisayarınızda bulunuyor.

## 4. GitHub'da boş bir depo oluşturun

1. GitHub hesabınızda **New repository** seçeneğini açın.
2. Depo adını `web-sitem` olarak belirleyin.
3. Görünürlüğü **Public** seçin. Bu yönerge, herkese açık bir depo üzerinden ilerler.
4. README, `.gitignore` veya lisans ekleme seçeneklerini kapalı bırakın; depo boş oluşturulmalıdır.
5. **Create repository** düğmesine basın ve deponun HTTPS adresini kopyalayın.

Terminale dönün. Aşağıdaki `KULLANICI_ADINIZ` bölümünü kendi GitHub kullanıcı adınızla değiştirin. Farklı bir depo adı seçtiyseniz adresi ona göre düzenleyin:

```bash
git remote add origin https://github.com/KULLANICI_ADINIZ/web-sitem.git
git branch -M main
git push -u origin main
```

`origin`, uzak depo adresinin kısa adıdır. `main`, ana dalın adıdır. `-u` seçeneği, sonraki gönderimlerde yalnızca `git push` yazabilmeniz için yerel dalı uzak dalla ilişkilendirir.

Giriş istenirse kimlik doğrulama adımlarını tamamlayın. GitHub depo sayfasını yenileyerek dosyalarınızın ve ilk kayıt mesajınızın göründüğünü kontrol edin.

## 5. GitHub Pages ile yayımlayın

GitHub'daki deponuzda **Settings → Pages** bölümünü açın. **Build and deployment** altında şu ayarları seçin:

| Ayar | Değer |
|---|---|
| Source | Deploy from a branch |
| Branch | `main` |
| Klasör | `/(root)` |

**Save** düğmesine basın. Yayının tamamlanması birkaç dakika sürebilir. Pages bölümünde gösterilen site adresini açın. Bu örnekte adres şu biçimdedir:

```text
https://KULLANICI_ADINIZ.github.io/web-sitem/
```

Depo adresi kaynak dosyalarınızı, bu adres ise yayımlanmış web sitenizi gösterir. Pages kurulduktan sonra `main` dalına gönderdiğiniz yeni kayıtlar sitenin yeniden yayımlanmasını başlatır. Ayarların ayrıntıları için [GitHub Pages yayın kaynağı belgesine](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) bakabilirsiniz.

## 6. Yayındaki siteyi kontrol edin

1. Sayfanın başlığını, stillerini, görsellerini ve bağlantılarını kontrol edin.
2. Tarayıcının geliştirici araçlarını **F12** ile açıp **Network** sekmesine geçin.
3. **Disable cache** seçeneğini işaretleyin ve sayfayı yenileyin.
4. Ana HTML dosyasının isteğini seçin. Başarılı yüklemede **Status Code: 200** değerini görmelisiniz. CSS ve görsel isteklerinde `404` hatası bulunmadığını kontrol edin.
5. Siteyi telefonunuzda veya başka bir tarayıcıda da açın.

GitHub Pages bu uygulamadaki HTML, CSS ve görsel dosyalarını sunar. Bir formun görünmesi, gönderilen bilgilerin kaydedildiği anlamına gelmez; bunun için ayrıca bir sunucu veya form hizmeti gerekir.

## 7. Bir değişiklik yapın ve yeniden yayımlayın

`index.html` dosyasındaki ana başlığı değiştirip dosyayı kaydedin. Ardından şu komutları çalıştırın:

```bash
git diff
git add index.html
git commit -m "Ana sayfa başlığını güncelle"
git push
```

`git diff`, henüz hazırlık alanına alınmamış değişiklikleri gösterir. Gönderimden sonra GitHub'daki **Actions** sekmesinden yayın işleminin tamamlanmasını takip edin. Siteyi yenileyip yeni başlığın göründüğünü doğrulayın.

Son durumu ve kayıt geçmişini inceleyin:

```bash
git status
git log --oneline
```

Başka değişiklik yapmadıysanız `git status` çıktısında **working tree clean** ifadesi görünür. Kayıt geçmişinde ilk sürüm ve başlık güncellemesi ayrı kayıtlar olarak yer almalıdır.

## Tamamlama kontrol listesi

- [ ] Proje dosyaları GitHub deposunda görünüyor.
- [ ] GitHub Pages adresi açılıyor.
- [ ] CSS, görseller ve sayfa bağlantıları çalışıyor.
- [ ] Network sekmesinde ana sayfa isteği başarılı; gerekli dosyalarda `404` hatası yok.
- [ ] Son başlık değişikliği yayındaki sitede görünüyor.
- [ ] Kayıt geçmişinde en az iki açıklayıcı mesaj bulunuyor.
- [ ] Depoda parola, erişim anahtarı veya özel bilgi bulunmuyor.

Çalışmanızı paylaşırken **GitHub depo bağlantısını** ve **yayımlanmış site bağlantısını** birlikte belirtin.

## Sık karşılaşılan sorunlar

| Belirti | Kontrol ve çözüm |
|---|---|
| `git` komutu bulunamıyor | Git kurulumunu tamamlayın, terminali yeniden açın ve `git --version` komutunu çalıştırın. |
| `Please tell me who you are` | 2. adımdaki ad ve e-posta ayarlarını yapıp commit komutunu yeniden çalıştırın. |
| `nothing to commit` | Dosyayı editörde kaydettiğinizi ve doğru klasörde olduğunuzu kontrol edin. `git status` ile değişiklikleri inceleyin. |
| `remote origin already exists` | `git remote -v` ile mevcut adresi kontrol edin. Adres yanlışsa `git remote set-url origin YENI_DEPO_ADRESI` komutunda örnek adresi kendi adresinizle değiştirin. |
| `src refspec main does not match any` | İlk commit'in oluştuğunu `git log --oneline` ile kontrol edin; ardından `git branch -M main` komutunu çalıştırın. |
| Gönderim sırasında giriş başarısız | GitHub hesap parolasıyla Git üzerinden gönderim yapılamaz. Git Credential Manager kullanıyorsanız tarayıcıdan giriş yapın; token istenirse uygun depo erişimine sahip kişisel erişim belirteci kullanın. |
| Gönderim `non-fast-forward` veya `fetch first` hatasıyla reddediliyor | Uzak depoda yerel geçmişinizde bulunmayan kayıtlar vardır. Deponun boş oluşturulduğunu kontrol edin. Mevcut uzak kayıtları inceleyip geçmişleri birleştirmeden zorla gönderim yapmayın. |
| Site `404` veriyor | `index.html` dosyasının `main` dalının ana klasöründe bulunduğunu, Pages kaynağının `main` ve `/(root)` olduğunu ve Actions yayın işleminin başarılı tamamlandığını kontrol edin. |
| Sayfa açılıyor ama stiller veya görseller eksik | Dosyaların depoya gönderildiğini ve yolların büyük-küçük harf bakımından eşleştiğini kontrol edin. Örnek klasör yapısında `/stil.css` yerine `stil.css` kullanın. |
| Son değişiklik görünmüyor | Yeni commit'in GitHub'da göründüğünü ve yayın işleminin tamamlandığını kontrol edin. Ardından önbelleği devre dışı bırakarak sayfayı yenileyin. |

Bir parola veya erişim anahtarı yanlışlıkla kaydedildiyse dosyayı silmek ya da `.gitignore` listesine eklemek eski kayıtları temizlemez. İlgili parolayı değiştirin veya anahtarı iptal edip yenisini oluşturun.

## Kendinizi değerlendirin

1. Dosyayı editörde kaydetmek ile `git commit` çalıştırmak arasındaki fark nedir?
2. `git add` komutundan sonra dosyayı yeniden değiştirirseniz commit hangi hâli kaydeder?
3. `git commit` başarılı olduğu hâlde dosyalar GitHub'da neden görünmeyebilir?
4. GitHub depo adresi ile GitHub Pages adresi neyi gösterir?
