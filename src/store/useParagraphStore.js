import create from "zustand";

let openPageParagraph = "Bir yazıyı şekil, anlatım ve noktalama özellikleriyle oluşturan kelimelerin  bütününe metin adı verilir. Diğer bir ifadeyle metin, iletişim kurmak için oluşturulan cümleler topluluğudur. Sözlü ya da yazılı iletişim için üretilen anlamlı yapıdır. Yazar, iletmek istediği mesajı metin aracılığıyla ifade eder.Bir metin, aralarında anlam, anlatım bakımından ilişki ve bütünlük bulunan paragraflardan oluşur. İyi kurgulanmış bir metinde, her paragraf bir düşünce birimidir. Metindeki paragraf sayısı, o metnin içerdiği düşünce sayısını verir. Bunun nedeniyse her düşüncenin bir paragrafta tam olarak ortaya konmasıdır. Sözcükler seslerden, cümleler sözcüklerden, paragraflar ise cümlelerden oluşur.Metni oluşturan en büyük yapı paragraftır. Düzyazılarda genellikle satır başlarıyla birbirlerinden ayrılan bölümlerin her birine paragraf adı verilir. Paragrafın oluşumu konuyla doğrudan ilgilidir. Çünkü yazar, duygu ve düşüncelerini bir olay ve olgudan hareketle anlatır. Ele aldığı konuyu, amacına göre sınırlayıp birbiriyle ilintili paragraflar hâlinde verir. Bu, metin oluşturulurken uyulması gereken en önemli kurallardan biridir."

export const useParagraphStore = create((set, get) => ({
    
    wordsInParagraph: (openPageParagraph).split(" "),
    exerciseFormat: [],
    currentParagraph: openPageParagraph,
    currentWordNumber: 1,
    currentWordPerMinute: 300,

    changeParagraphFunc: (newParagraph) => {
        set({ currentParagraph: newParagraph });
    },

    setCurrentWordNumber: (number) => {
        set({ currentWordNumber: number });
    },
    
    setCurrentWordPerMinute: (number) => {
        set({ currentWordPerMinute: number});
    },

    setWordsInParagraph: (paragraph) => {
        set({ wordsInParagraph: paragraph.replace(/\s+/g, ' ').trim().split(" ") });
    },

    changeExerciseFormat: () => {
        const { wordsInParagraph, currentWordNumber } = get();
        let gruplar = Array(Math.ceil(wordsInParagraph.length/currentWordNumber) );
        let grupNo = -1;
        for(let i = 0; i < wordsInParagraph.length; i++){
            if(i%currentWordNumber === 0){
                grupNo++;
                gruplar[grupNo] = Array(currentWordNumber);
            }
            gruplar[grupNo][i%currentWordNumber] = wordsInParagraph[i] + " ";
        }
        set({ exerciseFormat: gruplar });
    },  

    
}))