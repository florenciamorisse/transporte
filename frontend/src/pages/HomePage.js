import '../styles/components/pages/HomePage.css'

const HomePage =(props)=>{
    return(
        <main className="holder">
            <div className="homeimg">
                <img src="img/home/img01.jpg" alt="Avion"/>
            </div>
            <div className="columnas">
                <div className="bienvenidos left">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident quia ipsam sit omnis recusandae cum consectetur odio, expedita explicabo, autem ratione sunt, eum fugit quos velit asperiores consequuntur quae libero!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut harum tempore fuga amet, ratione corrupti eius magni unde fugiat numquam nobis culpa sit dicta, quos illum suscipit? Quia, ab eos!</p>   
                </div>
                <div className="testimonios right">
                    <h2>Testimonios </h2>
                    <div className="testimonio">
                        <span className="cita">Simplemente Excelente</span>
                        <span className="autor">Juan Perez - zapatos.com</span>
                    </div>
                </div>
             </div>
        </main>
    );
}

export default HomePage;