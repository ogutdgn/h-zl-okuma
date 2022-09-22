import create from "zustand";

let openPageParagraph = "Bir yazıyı şekil, anlatım ve noktalama özellikleriyle oluşturan kelimelerin bütününe metin adı verilir. Diğer bir ifadeyle metin, iletişim kurmak için oluşturulan cümleler topluluğudur. Sözlü ya da yazılı iletişim için üretilen anlamlı yapıdır. Yazar, iletmek istediği mesajı metin aracılığıyla ifade eder.Bir metin, aralarında anlam, anlatım bakımından ilişki ve bütünlük bulunan paragraflardan oluşur. İyi kurgulanmış bir metinde, her paragraf bir düşünce birimidir. Metindeki paragraf sayısı, o metnin içerdiği düşünce sayısını verir. Bunun nedeniyse her düşüncenin bir paragrafta tam olarak ortaya konmasıdır. Sözcükler seslerden, cümleler sözcüklerden, paragraflar ise cümlelerden oluşur.Metni oluşturan en büyük yapı paragraftır. Düzyazılarda genellikle satır başlarıyla birbirlerinden ayrılan bölümlerin her birine paragraf adı verilir. Paragrafın oluşumu konuyla doğrudan ilgilidir. Çünkü yazar, duygu ve düşüncelerini bir olay ve olgudan hareketle anlatır. Ele aldığı konuyu, amacına göre sınırlayıp birbiriyle ilintili paragraflar hâlinde verir. Bu, metin oluşturulurken uyulması gereken en önemli kurallardan biridir."

export const useParagraphStore = create((set, get) => ({
    parsedText: "",
    wordsInParagraph: (openPageParagraph.replace(/\s+/g, ' ').trim()).split(" "),
    currentParagraph: openPageParagraph,

    changeParagraphFunc: (newParagraph) => {
        set({ currentParagraph: newParagraph })
    },
    setWordsInParagraph: (paragraph) => {
        //const { currentParagraph } = get();
        let { parsedText } = get();
        parsedText = paragraph.replace(/\s+/g, ' ').trim();
        //console.log(parsedText);
        set({ wordsInParagraph: parsedText.split(" ") })
    },
}))