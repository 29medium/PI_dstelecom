import * as React from 'react';
import StatsTable from "../components/StatsTable";


import "./Painel.css"
import NavBar from '../components/Navbar';


const Home = () => {
    return (

        <React.Fragment>
            <div className="row">
                <NavBar />
                <div className="right-panel" style={{ paddingTop: 10, paddingRight: 30 }}>
                    <StatsTable />
                </div>
            </div>
        </React.Fragment>


    );
};

export default Home;
