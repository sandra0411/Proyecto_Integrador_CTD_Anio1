import React from 'react'
import Searcher from "./Searcher";
import Recom from "./Recom";
import Categories from './Categories';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      city: "Buenos Aires",
      products: [],
      category: "",
      categories: [],
      startDate: "",
      finalDate: ""
    }
}

  componentDidMount() { // Obtengo las ciudades y países.
    fetch('http://18.190.58.41:8080/cities/list', { method: 'GET' })
      .then(response => {
        if (response.ok) {
          return response.json();
        } 
      })
      .then(data => {
        this.setState({ cities: data })
      })
    fetch('http://18.190.58.41:8080/products/list', { method: 'GET' })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => {
        this.setState({ products: data })
      })
      fetch('http://18.190.58.41:8080/categories/list', { method: 'GET' })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => {
        this.setState({ categories: data })
      })
  }

  handleSelectCity = (option) => { // Aplico filtro por ciudad.

    this.setState({ // Guardo la ciudad en el estado.
      city: option
    })

    fetch(`http://18.190.58.41:8080/products/listcity/${option}`, { method: 'GET' })
      .then(response => {
        if (response.ok) {
          return response.json();
        } 
      })
      .then(dataFiltered => {
        this.setState({ products: dataFiltered })
      })
  }

  handleSelectDates = (dateRange) => { // Aplico filtro por fechas.

    this.setState({ // Guardo las fechas en el estado.
      startDate: dateRange[0],
      finalDate: dateRange[1]
    })

    fetch(`http://18.190.58.41:8080/products/listcitydate/${(dateRange[0].getYear()+1900) + "-" + (dateRange[0].getMonth()+1) + "-" + dateRange[0].getDate()}/${(dateRange[1].getYear()+1900) + "-" + (dateRange[1].getMonth()+1) + "-" + dateRange[1].getDate()}`, { method: 'GET' })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
      throw new Error('Something went wrong ...');
      }
    })
    .then(data => {
        this.setState({ products: data })
    })
    
  }

  handleCityAndDates = (dateRange, city) => { // Aplico filtro por fechas y ciudad.

    this.setState({ // Guardo la ciudad en el estado.
      city: city
    })
    
    this.setState({ // Guardo las fechas en el estado.
      startDate: dateRange[0],
      finalDate: dateRange[1]
    })

    fetch(`http://18.190.58.41:8080/products/listcitydate/${(dateRange[0].getYear()+1900) + "-" + (dateRange[0].getMonth()+1) + "-" + dateRange[0].getDate()}/${(dateRange[1].getYear()+1900) + "-" + (dateRange[1].getMonth()+1) + "-" + dateRange[1].getDate()}/${city}`, { method: 'GET' })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
      throw new Error('Something went wrong ...');
      }
    })
    .then(data => {
        this.setState({ products: data })
    })

  }
  
  handleSelectCategory = (option) => {
    this.setState({
      category: option
    })
    fetch(`http://18.190.58.41:8080/products/listcategory/${option}`, { method: 'GET' })
      .then(response => {
        if (response.ok) {
          return response.json();
        } 
      })
      .then(dataFiltered => {
        this.setState({ products: dataFiltered })
      })
  }

  render() {
    return (
      <main>
        <Searcher handleCityAndDates={this.handleCityAndDates} handleSelectDates={this.handleSelectDates} cities={this.state.cities} handleSelectCity={this.handleSelectCity} handleSelectCategory={this.handleSelectCategory} city={this.state.city} categories={this.state.categories}/>
        <Categories categories={this.state.categories} category={this.state.category} products={this.state.products} handleSelectCategory={this.handleSelectCategory}/>
        <Recom products={this.state.products} />
      </main>
    )
  }
}

export default Main
