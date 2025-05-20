export default function Artikel(){
    return (
        <div>
            <h1>Mengenali Kesehatan Mental Lebih Dalam</h1>
            <Greeting/>
            <p>What Is a Mental Health?</p>
            <Gambar/>

            <UserCard 
	            isi="Kesehatan Mental atau Mental Health adalah kondisi kesejahteraan mental yang memungkinkan orang untuk mengatasi tekanan hidup, yang berkaitan dengan kondisi emosi, kejiwaan, dan psikis seseorang."
                jenis="Jenis - Jenis Kesehatan Mental :" 
	            jenis1="1.Stress"
                jenis2="Stres adalah keadaan ketika seseorang mengalami tekanan yang sangat berat, baik secara emosi maupun mental."
                jenis3="2.Gangguan Kecemasan"
                jenis4="Gangguan kecemasan adalah kondisi psikologis ketika seseorang mengalami rasa cemas berlebihan secara konstan dan sulit dikendalikan, sehingga berdampak buruk terhadap kehidupan sehari-harinya."
                jenis5="3. Depresi"
                jenis6="Depresi merupakan gangguan suasana hati yang menyebabkan penderitanya terus-menerus merasa sedih. Berbeda dengan kesedihan biasa yang umumnya berlangsung selama beberapa hari, perasaan sedih pada depresi bisa berlangsung hingga berminggu-minggu atau berbulan-bulan."
                penyebab="Apa saja penyebab gangguan kesehatan mental?"
	            penyebab1="1. Faktor Biologis Atau Disebut Juga Gangguan Mental Organik."
                penyebab2="2. Gangguan pada fungsi sel saraf di otak."
                penyebab3="3. Peristiwa traumatik, seperti kekerasan"
                penyebab4="4. Kurang mampu bergaul dengan orang lain."
	          />
            <Sumber/>
        </div>
    )
}

function Greeting(){
    return (
        <small>Assalamu'alaikum manteman</small>
    )
}
function Gambar(){
    return (
        <img className="img" src="img/mental.png" alt="logo"/>
    )
}
function Sumber() {
    const text = "Kemenkes.2023.Mengenal Gangguan Mental";
    const text2 = "Kemenkes.2018.Pengertian Kesehatan Mental";
    return (
        <div>
            <hr/>
            <p>{text.toLowerCase()}</p>
            <p>{text2.toLowerCase()}</p>
        </div>
    )
}

function UserCard(props){
    return (
        <div>
           
            <p>{props.isi}</p>
            <hr/>
            <p>{props.jenis}</p>
            <p>{props.jenis1}</p>
            <p>{props.jenis2}</p>
            <p>{props.jenis3}</p>
            <p>{props.jenis4}</p>
            <p>{props.jenis5}</p>
            <p>{props.jenis6}</p>
            <hr/>
            <p>{props.penyebab}</p>
            <p>{props.penyebab1}</p>
            <p>{props.penyebab2}</p>
            <p>{props.penyebab3}</p>
            <p>{props.penyebab4}</p>
        </div>
    )
}