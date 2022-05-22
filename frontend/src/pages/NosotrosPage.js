import '../styles/components/pages/NosotrosPage.css'

const NosotrosPage =(props)=>{
    return(
        <main className="holder">
            <div className="historia">
                <h2>Historia</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo officiis quas iusto sit vel labore similique dolore. Quis corrupti, reprehenderit quidem suscipit neque placeat quia? Doloremque voluptas odio vitae accusantium?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi officiis repellendus perspiciatis tenetur in omnis saepe blanditiis assumenda nobis molestiae aliquid harum, ea recusandae voluptates minus laboriosam sequi sint cumque!</p>
            </div>
        <div className="staff">
            <h2>Staff</h2>
            <div className="personas">
                <div className="persona">
                    <img src="img/nosotros/nosotros1.jpg" alt="Juan Gomez"/>   
                    <h5>Juan Gomez</h5>
                    <h6>Gerente General</h6>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum molestiae culpa corporis at, impedit aut eaque accusantium unde officiis itaque officia suscipit blanditiis eos consequatur saepe perspiciatis laborum aliquam laboriosam?</p>
                </div>
                <div className="persona" >
                    <img src="img/nosotros/nosotros2.jpg" alt="Juan Gomez"/>   
                    <h5>Laura Martinez</h5>
                    <h6>Gerente General</h6>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum molestiae culpa corporis at, impedit aut eaque accusantium unde officiis itaque officia suscipit blanditiis eos consequatur saepe perspiciatis laborum aliquam laboriosam?</p>
                </div>
                <div className="persona"  >
                    <img src="img/nosotros/nosotros3.jpg" alt="Juan Gomez"/>   
                    <h5>Martín Gomez</h5>
                    <h6>Gerente General</h6>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum molestiae culpa corporis at, impedit aut eaque accusantium unde officiis itaque officia suscipit blanditiis eos consequatur saepe perspiciatis laborum aliquam laboriosam?</p>
                </div>
                <div className="persona">
                    <img src="img/nosotros/nosotros4.jpg" alt="Juan Gomez"/>   
                    <h5>Florencia Flores</h5>
                    <h6>Gerente General</h6>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum molestiae culpa corporis at, impedit aut eaque accusantium unde officiis itaque officia suscipit blanditiis eos consequatur saepe perspiciatis laborum aliquam laboriosam?</p>
                </div>
                <div id="cinco" className="persona">
                    <img src="img/nosotros/nosotros5.jpg" alt="Juan Gomez"/>   
                    <h5>Pablo López</h5>
                    <h6>Gerente General</h6>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum molestiae culpa corporis at, impedit aut eaque accusantium unde officiis itaque officia suscipit blanditiis eos consequatur saepe perspiciatis laborum aliquam laboriosam?</p>
                </div>
            </div>
            
        </div>

    </main>
    );
}

export default NosotrosPage;