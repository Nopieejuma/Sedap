export default function QnASection(){
    return (
        <div>
            <h1>QnA Product</h1>
            <Oleh />
            <Tanya1/>
            <Tanya2/>
            <Tanya3/>
            <Saran/>
        </div>
    )
}

function Oleh() {
    return (
        <small>By Pandora</small>
    )
}

function Tanya1() {
    return (
        <article>
            <h2>Gimana Product di Pandora?</h2>
            <p><strong>Jawaban:</strong> Bagus bangettt, lucu gemoy</p>
        </article>
    );
}

function Tanya2() {
    return (
        <article>
            <h2>Anti karat ga kak?</h2>
            <p><strong>Jawaban:</strong> Iya dongggg, udah diuji juga dari kami semua</p>
        </article>
    );
}

function Tanya3() {
    return (
        <article>
            <h2>Kok mahal banget sih kak harganya?</h2>
            <p><strong>Jawaban:</strong> Karena kami menggunakan bahan berkualitas yang anti karat dan juga premium diks</p>
        </article>
    );
}

function Saran() {
    return (
        <article>
            <h2>Saran untuk Pandora : </h2>
            <p><strong>1.</strong> Jangan mahal-mahal harganya kak</p>
            <p><strong>2.</strong> Banyakin lagi yang versi disney collection ya kak</p>
            <p><strong>3.</strong> Ethel suka tidur di sofa empuk atau di bawah meja di ruang tamu.</p>
        </article>
    );
}
