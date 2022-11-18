import React from "react";
import "../style/Home.css";

const Home = () => {

    return (
        <div className="container card p-5 text-center mb-5">
            <div className="row">
                <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="mb-5 section-descover">
                        <h3>Descobrir Cacau de São Tomé E Príncipe</h3>
                        <p>As nossas coberturas caracterizam-se por uma profundidade de sabor especial,
                            cujo cacau provém exclusivamente da plantação “Roça Diogo Vaz”. É certificada
                            como orgânica e produz com a maior atenção aos padrões ecológicos e éticos.</p>
                    </div>

                    <div className="mb-5 section-store">
                        <h3>Loja online de chocolate de São Tomé e Príncipe.</h3>
                        <p>5.000 quilômetros separam a Alemanha e duas ilhas delicadas na costa oeste da
                            África, São Tomé e Príncipe. Mas uma deliciosa combinação une os dois chocolate
                            magistral! Em 2016, o chocolatier francês Olivier Casenave conquistou o prêmio de
                            “Melhor barra de chocolate amargo” no “Salon du chocolat”, maior feira de chocolates
                            que acontece em Paris, ao contar ao júri com sua criação de chocolate“ 75% São Tomé Diogo
                            Vaz Amelonado“ seduzido.</p>
                    </div>

                    <div className="mb-5 section-variety">
                        <h3>Encontre sua variedade favorita</h3>
                    </div>

                    <div id="#carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                                <img src="img1.jpeg" className="w-30 mb-5 img-fluid" alt="Men" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5 className="text-white">Secagem do cafe</h5>
                                    <p className="text-white">A foto representa a forma como os nossos cafes sao secos.</p>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src="img1.jpeg" className="w-30 mb-5 img-fluid" alt="Men" />
                                <div className="carousel-caption d-none d-md-block">
                                <h5 className="text-white">Secagem do cafe</h5>
                                    <p className="text-white">A foto representa a forma como os nossos cafes sao secos.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="img1.jpeg" className="w-10 mb-5 img-fluid" alt="Men" />
                                <div className="carousel-caption d-none d-md-block">
                                <h5 className="text-white">Secagem do cafe</h5>
                                    <p className="text-white">A foto representa a forma como os nossos cafes sao secos.</p>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;