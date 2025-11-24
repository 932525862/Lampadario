# 🎤 Voice Control Testing Guide

## ✅ Ishlab tekshiring

1. **Brauzerda saytni yangilaylik** (F5 yoki Ctrl+R)

2. **Developer Console'ni oching** (F12 → Console tab)

3. **Ovoz tugmasini bosing** - sarishtali (sariq) Mic tugmachasini toping
   - Desktop: Navigatsiya panelining o'ngida
   - Mobile: Tukkunlik menyu yonida

4. **Mikrofon muvoqqiylaganda:**
   - Tugma **QIZIL** bo'lib o'tadi
   - Tugma **pulsatsiyon** (zil) qiladi
   - Console'da "Voice command: [shunga]" chiqadi

5. **Ovoz buyruq ayting:**
   - **"Portfólio"** - portfolio bo'limiga o'tadi
   - **"Xizmatlar"** - xizmatlar bo'limiga o'tadi
   - **"Bosh"** - bosh sahifaga o'tadi
   - **"Bog'lan"** - aloqa bo'limiga o'tadi

6. **Mic tugmasini yana bosing** - ovozni tinglashni to'xtatish

## 🐛 Agar ishlamasa:

### Xato 1: "Browser does not support..."
- Chrome/Chromium, Firefox, Safari ishlataylik
- Safari → Settings → Privacy → Speech recognition ✓

### Xato 2: "Permission denied"
- Brauzer mirofon ruxsatini so'raydi
- "Allow" deb bosilishi kerak

### Xato 3: "No speech detected"
- Tez va aniq ovoz bilan ayting
- Molchilik 1-2 soniyalar kuting

### Xato 4: "Service unavailable"
- Internetga ulang
- Brauzer cache'ni tozalaylik (Ctrl+Shift+Delete)

## 📊 Console'da ko'riladigan:
```
Voice command: portfolio
Voice command: xizmatlar
Speech recognition error: aborted
```

**Muvaffaqiyat!** 🎉
