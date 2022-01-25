import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';
class Pokedex extends Component {
    static defaultProps = {
        pokemon: [
            { id: 1, name: 'Metapod', type: 'bug', base_experience: 72 },
            { id: 20, name: 'Squirtle', type: 'water', base_experience: 63 },
            { id: 30, name: 'Pikachu', type: 'electric', base_experience: 112 },
            { id: 4, name: 'Gengar', type: 'poison', base_experience: 225 },
            { id: 5, name: 'Eevee', type: 'normal', base_experience: 95 },
            { id: 113, name: 'Butterfree', type: 'fly', base_experience: 178 },
            { id: 30, name: 'Pikachu', type: 'electric', base_experience: 112 },
            { id: 4, name: 'Gengar', type: 'poison', base_experience: 225 },
            { id: 5, name: 'Eevee', type: 'normal', base_experience: 95 },
            { id: 113, name: 'Butterfree', type: 'fly', base_experience: 178 },
            { id: 113, name: 'Butterfree', type: 'fly', base_experience: 178 },
        ]
    }
    render() {
        let title;
        if (this.props.isWinner) {
            title = <h1 className="Pokedex-winner">Winner</h1>
        } else {
            title = <h1 className="Pokedex-loser">Loser</h1>
        }
        return (
            <div className="Pokedex">
                <h1>Pokedex!</h1>
                {title}
                <p className="Pokedex-data">Total experience : {this.props.exp}</p>                
                <div className="Pokedex-cards">
                    {this.props.pokemon.map((p) => (
                        <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
                    ))}
                </div>
            </div>

        );
    }
}

export default Pokedex;