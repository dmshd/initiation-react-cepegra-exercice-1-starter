import React from 'react';
import { uid } from 'react-uid';

export default class ClassComponent extends React.Component {
    constructor(){
        super();
        this.state = {
            listing: [
                {
                    nom: 'Darth',
                    mail: 'vader@empire.be'
                },
                {
                    nom: 'Yoda',
                    mail: 'yoda@rebel.be'
                },
            ],
            newNom: '',
            newMail: '',
            errMail: false,
        }
    }

    stringEmailValidation = () => {
        const reg = /\S+@\S+\.\S+/;
        if (reg.test(this.state.newMail)) {
                this.setState(prevState => (
                    {
                        listing: [
                            ...prevState.listing,
                                {
                                    nom: this.state.newNom,
                                    mail: this.state.newMail,
                                    newNom: '',
                                    newMail: '',
                                    errMail: false,
                                }
                        ]
                    }    
                ));
        }else {
            console.log('mail non valide');
            this.setState({errMail: true});
        }
    }

    render = () => (

        <div>
            <p>Mon composant de classe</p>
            <ul className='App-link'>
                {this.state.listing.map((contact)=> (
                    <li key={uid(contact)}>{contact.nom} ({contact.mail})</li>
                ))}
            </ul>
            <form style={{flex: 1, flexDirection: 'column', width: 200}}>
                <label>Nom</label>
                <input type='text' value={this.state.newNom} onChange={(ev) => this.setState({newNom: ev.target.value})} placeholder="Nom" required></input>

                <label>Email</label>
                <input type='email' value={this.state.newMail} onChange={(ev) => this.setState({newMail: ev.target.value.toLocaleLowerCase()})} placeholder="Email"></input>
                    {this.state.errMail === true && <p>Erreur, veuillez entrer une adresse email valide</p>}
                <button onClick={(ev) => {
                    // OLDSCHOOL
                    // ev.preventDefault();
                    // let tempdata = this.state.listing;
                    // tempdata.push({nom: 'test', mail: 'test@test'});
                    // this.setState({listing: tempdata});
                    ev.preventDefault();
                    this.stringEmailValidation();

                }}>Envoyer</button>
            </form>
        </div>
    )
}
