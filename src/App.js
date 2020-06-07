import React, { Component } from 'react';
import {Cards, Chart, CountrySelector} from "./components"
import {fetchData} from "./api"
import styles from "./App.module.css"
import covImg from "./images/image.png"
class App extends Component{
    state={
        data: {},
        country: ""
    }
    async componentDidMount(){
        const fetchedData = await fetchData()

        this.setState({data: fetchedData})
    }
    handleCountryChange = async(country)=> {
        const fetchedData = await fetchData(country)
        this.setState({data: fetchedData, country: country})
    }
    render(){
        const {data,country} = this.state
        return(
            <div className={styles.container}>
                <img className={styles.image} src={covImg} alt="COVID-19" />
                <Cards data={data}/>
                <CountrySelector handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country} />
            </div>
        )
    }
}
export default App