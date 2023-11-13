import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Components
import Navbar from "../components/Navbar";
import ServiceCard from "../components/ServiceCard";

//Assets
import heroBackground from "../assets/hero-background.png";
import logo from "../assets/logo-no-bg-2.png";
import baptism from "../assets/baptism.jpg";
import wedding from "../assets/wedding.jpg";
import birthday from "../assets/birthday.jpg";
import party from "../assets/party.jpg";
import corporate from "../assets/corporate.jpg";

//Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import StatementCard from "../components/StatementCard";

const Home = () => {
    const reasons = [
        {
            title: "Vision",
            content:
            "Calinao's Catering Services will be one among the best in providing catering services and event planning in the region. A Catering Services that will keep the good reputation of catering business by providing outstanding quality, service, cleanliness, and value, to make a full satisfaction for every customer. Wil compete actively and fairly in the catering trade and to establish its name in the society."
        },
        {
            title: "Mission",
            content: 
            "Calinao's Catering Services aims to provide a high quality of service for all catering needs, aims in providing a wide range of menu selections, food quality that will surpass the distinct taste of our client, a well planned program and competent work force."
        },
        {
            title: "Core Values",
            content:
            "to ff." 
        },
    ];

    const [roleID, setRoleID] = useState(localStorage.getItem("roleID"));
    const [customerID, setCustomerID] = useState(
        localStorage.getItem("userID")
    );

    const [clientData, setClientData] = useState({});

    useEffect(() => {
        const fetchClientData = async () => {
            try {
                //via post request

                const response = await fetch("http://localhost:7723/client/", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ client_id: customerID }),
                });
                const result = await response.json();
                setClientData(result);
            } catch (err) {
                console.log(err);
            }
        };
        if (roleID === "ROLE001") {
            fetchClientData();
        }
    }, []);

    return (
        <>
            <Navbar clientData={clientData} />
            {/* Hero Section */}
            <section
                className="hero h-screen relative"
                style={{
                    backgroundImage: `url(${heroBackground})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="overlay bg-gray-100 absolute bg-opacity-20 w-full h-full">
                    <div className="container mx-auto px-2 sm:px-6 lg:px-8 h-full">
                        <div className="flex h-full justify-center items-center">
                            <div className="hero-content max-w-xl flex flex-col items-center">
                                <img src={logo} alt={logo} className="w-full" />
                                <p
                                    className="mb-5 text-2xl text-center text-white"
                                    style={{
                                        textShadow: "0 0 5px #000000",
                                    }}
                                >
                                    "Ready to Cater All Your Catering Needs"
                                </p>
                                <p
                                    className="mb-5 text-2xl text-center text-white w-[60rem]"
                                    style={{
                                        textShadow: "0 0 5px #000000",
                                    }}
                                >
                                    "Calinao's Catering Services, Siguradong Quality Service at Excellence "
                                </p>
                                <div className="flex justify-center items-center gap-2">
                                    <Link
                                        to="/reservation"
                                        className="make-reservation-btn py-3 hover:bg-sky-800 px-4 bg-sky-700 w-fit text-lg text-white shadow-sm"
                                    >
                                        Make a reservation{" "}
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Hero Section */}
            {/* Services Section */}
            <section className="services py-10" id="services">
                <div className="container mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center">
                        <h2 className="text-4xl font-bold mb-5 title">
                            What we offer you ?
                            <hr className="border-2 border-sky-700 w-20 mx-auto mt-3" />
                        </h2>
                        <p className="text-center mb-10 text-gray-900 text-lg w-3/5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Maecenas cursus pretium purus eget viverra
                            donec mauris risus.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        <ServiceCard image={baptism} title="Baptism" />
                        <ServiceCard image={wedding} title="Wedding" />
                        <ServiceCard image={birthday} title="Birthday" />
                        <ServiceCard image={corporate} title="Corporate" />
                        <ServiceCard image={party} title="Party" />
                        <ServiceCard image={party} title="More" />
                    </div>
                </div>
            </section>
            {/* End Services Section */}
            {/* About Section */}
            <section className="about py-10 bg-gray-50 w-full">
                <div className="container mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center">
                        <h2 className="text-4xl font-bold mb-5 title">
                            Why choose us ?
                            <hr className="border-2 border-orange-500 w-20 mx-auto mt-3" />
                        </h2>
                    </div>
                    <div className="grid-center grid-cols-2 gap-2 sm:grid-cols-2 lg:grid-cols-4">
                        {reasons.map((reason, index) => (
                            <div
                                className="flex flex-col items-center border border-gray-200 rounded-lg p-5 hover:shadow-sm hover:-translate-y-1 cursor-pointer transition-transform bg-white"
                                key={index}
                            >
                                {/* <div className="flex justify-center items-center bg-white mb-2">
                                    <FontAwesomeIcon
                                        icon={faPaperPlane}
                                        color="#3B82F6"
                                        size="2x"
                                    />
                                </div> */}
                                <h3 className="text-2xl font-bold text-orange-500 mb-1 text-start">
                                    <FontAwesomeIcon
                                        icon={faPaperPlane}
                                        color="#3B82F6"
                                    />
                                    {" " + reason.title}
                                </h3>
                                <p className="text-center text-gray-900 text-sm text-start">
                                    {reason.content}
                                </p>
                            </div>
                        ))}
                    </div>
                    <hr className="border-1 border-gray-300 my-10" />

                    <div className="header flex items-start justify-centerh-fit gap-8">
                        <div className="header-container flex flex-col items-center justify-start w-3/5 h-full">
                            <h2 className="text-5xl font-bold mb-5 title leading-tight">
                                Here is what our clients say about{" "}
                                <span className="text-orange-500 title">
                                    Calinao's Catering Services
                                </span>
                            </h2>
                        </div>
                        <div className="paragraph-container flex flex-col items-center justify-start w-2/5 h-full">
                            <p className="text-center mb-10 text-gray-900 text-lg w-3/5">
                                "If you do build a great experience, customers tell each other about that. Word of mouth is very powerful."
                            </p>
                            <p >- Jeff Bezos</p>
                        </div>
                    </div>

                    <div className="statement py-10 w-full">
                        <div className="statement-container flex items-start justify-start overflow-x-auto">
                            <StatementCard />
                        </div>
                    </div>
                </div>
                <footer class="footer p-10 bg-neutral text-neutral-content">
<aside>
    <svg width="50" height="100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" class="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
    <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
</aside> 
<nav>
    <header class="footer-title">Social</header> 
    <div class="grid grid-flow-col-flex gap-10">
        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
    </div>
</nav>
</footer>
            </section>
        </>
    );
};

export default Home;
