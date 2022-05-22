import '../styles/components/pages/ServiciosPage.css'

const ServiciosPage =(props)=>{
    return(
        <main className="holder">
            <h2>Servicios</h2>
            <div className="servicio">
                <img src="img/servicios/ferroviario.jpg" alt="Tren"/>
                <div class="info">
                    <h4>Transporte Ferroviario</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic veniam dignissimos incidunt tempora laborum quibusdam nulla corporis dicta delectus minima perspiciatis, iusto asperiores quaerat culpa illum obcaecati, voluptatum blanditiis rem.</p>
                </div>
            </div>
            <div className="servicio">
                <img src="img/servicios/aereo.jpg" alt="Avion"/>
                <div class="info">
                    <h4>Transporte Aereo</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic veniam dignissimos incidunt tempora laborum quibusdam nulla corporis dicta delectus minima perspiciatis, iusto asperiores quaerat culpa illum obcaecati, voluptatum blanditiis rem.</p>
                </div>
            </div>
            <div className="servicio">
                <img src="img/servicios/maritimo.jpg" alt="barco"/>
                <div class="info">
                    <h4>Transporte Marítimo</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic veniam dignissimos incidunt tempora laborum quibusdam nulla corporis dicta delectus minima perspiciatis, iusto asperiores quaerat culpa illum obcaecati, voluptatum blanditiis rem.</p>
                </div>
            </div>
            <div className="servicio">
                <img src="img/servicios/terrestre.jpg" alt="omnibus"/>
                <div class="info">
                    <h4>Transporte Terrestre</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic veniam dignissimos incidunt tempora laborum quibusdam nulla corporis dicta delectus minima perspiciatis, iusto asperiores quaerat culpa illum obcaecati, voluptatum blanditiis rem.</p>
                </div>
            </div>

        </main>
    );
}

export default ServiciosPage;