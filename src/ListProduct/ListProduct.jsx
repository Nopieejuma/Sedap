export default function ListProduct() {
    return (
        <div>
            <h1>Katalog Pandora</h1>
            <Oleh />
            <Deskripsi1/>
            <Deskripsi2/>
            <Deskripsi3/>
            <Deskripsi4/>
           
        </div>
    )
}

function Oleh() {
    return (
        <small>By Pandora</small>
    )
}

function Deskripsi1({ quantity, price }) {
    return (
        <div className="order-item">
            <img src="/public/img/charm1.jpg" alt="logo" />
            <div className="teks">
                <h2><p>Happy Birthday Hot Air Balloon Charm</p></h2>
                <p className="desk"> Let their spirit soar with this Happy Birthday Hot Air Balloon Charm. Hand-finished in sterling silver, the heart-shaped balloon is lovingly coated in transparent purple, pink and blue enamel with creases to add a touch of realism. A small 3D gift box dangles from the balloon with ribbon detailing. The perfect gift for adventure seekers. </p>
                <p className="price"> Price 125.000</p>
                <hr>
                </hr>
            </div>
        </div>
    );
}

function Deskripsi2({ quantity, price }) {
    return (
        <div className="order-item">
            <img src="/public/img/charm2.jpg" alt="logo" />
            <div className="teks">
                <h2><p>Hummingbird Double Dangle Charm</p></h2>
                <p className="desk"> This shimmering hummingbird charm is crafted from sterling silver and features the message "Life is Sweet". </p>
                <p className="price"> Price 183.000</p>
                <hr>
                </hr>
            </div>
        </div>
    );
}

function Deskripsi3({ quantity, price }) {
    return (
        <div className="order-item">
            <img src="/public/img/cincin.jpg" alt="logo" />
            <div className="teks">
                <h2><p>Sparkling Ring</p></h2>
                <p className="desk"> This stunning vintage-inspired ring is one you'll treasure forever.  </p>
                <p className="price"> Price 3.0000.000</p>
                <hr>
                </hr>
            </div>
        </div>
    );
}

function Deskripsi4({ quantity, price }) {
    return (
        
        <div className="order-item">
            <img src="/public/img/gelang.jpg" alt="logo" />
            <div className="teks">
                <h2><p>Pandora Moments Snake Chain Slider Bracelet</p></h2>
                <p className="desk"> This stunning snake chain bracelet is a sophisticated spin on the classic friendship bracelet. </p>
                <p className="price"> Price 6.000.000</p>
                <hr>
                </hr>
            </div>
        </div>
    );
}




