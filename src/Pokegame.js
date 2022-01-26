import React, { Component } from 'react'
import Pokedex from './Pokedex'
import './Pokegame.css'
class Pokegame extends React.Component {
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
    };
    render() {
        let hand1 = []
        let hand2 = [...this.props.pokemon]
        while (hand1.length < hand2.length) {
            let randIdx = Math.floor(Math.random() * hand2.length)
            let randPokemon = hand2.splice(randIdx, 1)[0]
            console.log("slpice "+hand2.splice(randIdx, 1)[0],hand2.splice(randIdx, 1)[1] )
            hand1.push(randPokemon)
        }
        let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
        let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
        return (
            <div className="Pokegame">
                <Pokedex className="Pokegame-data" pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
                <Pokedex className="Pokegame-data" pokemon={hand2} exp={exp2} isWinner={exp2 > exp1} />
                <br></br>
            </div>
        );
    }
}

export default Pokegame;