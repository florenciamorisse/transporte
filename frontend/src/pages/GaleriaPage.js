import '../styles/components/pages/Galeria.css'

const GaleriaPage =(props)=>{
    return(
        <main className="holder">
            <h2>Galeria</h2>
            <div className="galeria">
                <div class="foto">
                    <img src="img/galeria/img01.jpg"/>
                </div>
                <div className="foto">
                    <img src="img/galeria/img02.jpg"/>
                </div>
                <div className="foto">
                    <img src="img/galeria/img03.jpg"/>
                </div>
                <div className="foto">
                    <img src="img/galeria/img04.jpg"/>
                </div>
                <div className="foto">
                    <img src="img/galeria/img05.jpg"/>
                </div>
                <div className="foto">
                    <img src="img/galeria/img06.jpg"/>
                </div>
                <div className="foto">
                    <img src="img/galeria/img07.jpg"/>
                </div>
            </div>

        </main>
    );
}

export default GaleriaPage;