import React, {Component} from 'react';
import Textbox from './Textbox';
import Selectbox from './Selectbox';
import axios  from 'axios'

export default class Register extends Component {

    constructor(props){
        super(props);

        let textControl ={
            type:"text",
            className:"form-control",
            value:""
        };
        let  select ={
            className:'form-control',
            value:""
        };

        this.state ={
            register:{
                FirstName:{
                    ...textControl,
                id:'textFirstName',
                name:'FirstName',
                label:'FirstName',
                placeholder:'Enter Fisrt Name'},
                LastName:{
                    ...textControl,
                    id:'textLastName',
                    name:'LastName',
                    label:'LastName',
                    placeholder:'Enter Last Name'},
                Age:{
                    ...textControl,
                    name:'Age',
                    label:'Age',
                    placeholder:'Enter Your Age'},
                    Country:{
                        ...select,
                        label:'Country',
                                id:'ddlCountry',
                                name:'Country',
                                placeholder:'Select Country',
                                options:[{text:'India',value:'IN'},
                                {text:'United States',value:'USA'}]
                    }

            }
        };  
        this.textChange = this.textChange.bind(this);
    }
    componentDidMount(){
        axios.get('https://restcountries.eu/rest/v2/all')
        .then(result=>{
            console.log(result);
            let countries = result.data.map(x=>{
                return {value:x.alpha2Code,text:x.name}
            });
            let currentState = this.state;
            currentState.register.Country.options= countries;
            console.log(this.refs);
            this.refs['btnRegister'].className='btn btn-primary';
            this.setState(currentState);
        })
        .catch(err=>{
            console.log(err);
        })
    }
    textChange(e){

        let currentState = this.state;
        currentState.register[e.target.name].value=e.target.value;
        this.setState(currentState);
        console.log(this.state.register);
    }
 render(){

    return(
        <div className="form">
        <Textbox control={this.state.register.FirstName} textChange={this.textChange} />
        <Textbox control={this.state.register.LastName} textChange={this.textChange} />
        <Textbox control={this.state.register.Age}  textChange={this.textChange} />
        <Selectbox control={this.state.register.Country} textChange={this.textChange}/>
        <button id="btnOne" ref="btnRegister">Register</button>
        </div>
    )
 }




}