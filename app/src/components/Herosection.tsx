import "./herosectionstyling.css";

function Herosection() {
    return (
        <div className="w-full px-4 md:px-12 py-10 text-center md:text-left">

            {/* Main Heading */}
            <h1 className="montserrat-bold text-white text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
                Fast & Reliable <span className="text-blue-400">Electronics Repair</span> Services
            </h1>

            {/* Services List */}
            <ul className="horizontal_list_flex flex flex-col md:flex-row md:items-center gap-3 md:gap-6 text-white text-lg md:text-xl font-medium">
                <li className="service-item">Fridges</li>
                <li className="service-item">Televisions</li>
                <li className="service-item">Home Appliances</li>
            </ul>
        </div>
    );
}

export default Herosection;