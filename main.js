const token = '5129439956:AAFSdszc_FXbh07mhhrQfVHTGcjR6wmvIz4'
const chat_id = -1001569041413

const api = `https://api.telegram.org/bot${token}/?chat_id=${chat_id}&text=`


errorMessage.textContent = null
form.onsubmit = (event) => {
    try {
        event.preventDefault()
        if (!fname.value || !lname.value || !country.value || !subject.value) throw new Error("Forma toldirsh shart!")
        if (fname.value.length > 20) throw new Error("Ism uzunligi max 20")
        if (lname.value.length > 20)  throw new Error("Familya uzunligi max 20")
        if (subject.value.length > 5000)  throw new Error("Subject uzunligi max 5000")
            let message = `-Ism: ${fname.value} %0A%0A-Familyasi: ${lname.value} %0A%0A-Qo'shimcha malumot : ${subject.value}`
        let sticker = fetch(`https://api.telegram.org/bot${token}/sendSticker?chat_id=${chat_id}&sticker=` +country.value)
        let text = fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=`+ message)
        fname.value = null
        fname.lname = null
        fname.country = null
        fname.subject = null
    } catch (error) {
        errorMessage.textContent = error.message
    }
}

// https://img-13.stickers.cloud/packs/ccabdb29-2070-4d15-90ca-33654c5a02ed/webp/7d6559e4-5f43-4253-8a21-4877000c10e0.webp //germanya
// https://img-13.stickers.cloud/packs/ccabdb29-2070-4d15-90ca-33654c5a02ed/webp/edef8168-5413-4d69-9507-062326a5bdfa.webp // russia
// https://img-13.stickers.cloud/packs/ccabdb29-2070-4d15-90ca-33654c5a02ed/webp/a472105b-3e6a-4de9-b5d9-b71061fe68f4.webp // china
// https://img-13.stickers.cloud/packs/ccabdb29-2070-4d15-90ca-33654c5a02ed/webp/93f726d3-a6ff-4e1f-9b9a-1f8a7252fe51.webp // amerika
// https://img-13.stickers.cloud/packs/ccabdb29-2070-4d15-90ca-33654c5a02ed/webp/e2784adf-90ea-47a6-839a-5c24970517d3.webp // fransya