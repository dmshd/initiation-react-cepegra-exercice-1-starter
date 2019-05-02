// Modules
import React from 'react';
import { uid } from 'react-uid';
import PropTypes from 'prop-types';

// Ressources
import rebelIcon from '../img/rebel.svg';
import empireIcon from '../img/empire.svg';
import scumIcon from '../img/scum.svg';

const TableLine = (props) => {
    const { perso, imgSize, className } = props;
    return(
    <tr className={className}>
        <td>{perso.nom}</td>
        <td>{perso.role}</td>
        <td>
        { 
        perso.side === 'Rebel' ? <img src={rebelIcon} alt='rebel_icon' style={{height: imgSize, width: imgSize}} /> : perso.side 
        && perso.side === 'Empire' ? <img src={empireIcon} alt='empire_icon' style={{height: imgSize, width: imgSize}} /> : perso.side 
        && perso.side === 'Scum' ? <img src={scumIcon} alt='scum_icon' style={{height: imgSize, width: imgSize}} /> : perso.side
        }
        </td>
    </tr>
    );
}

const SimpleComponent = () => {
    const nom = "Luke Skywalker";
    const nom2 = "Han Solo";
    const episode = 6;
    let characters = [
      {nom: 'Darth Vador', role: 'Sith', side: 'Empire'},
      {nom: 'Luke Skywalker', role: 'Pilot', side: 'Rebel'},
      {nom: 'Boba Fett', role: 'Bounty hunter', side: 'Rebel'},
      {nom: 'Han Solo', role: 'Smuggler', side: 'Empire'},
      {nom: 'Sheev Palpatine', role: 'Emperor', side: 'Empire'},
      {nom: 'Leia Organa', role: 'Princess', side: 'Rebel'},
      {nom: 'Bib Fortna', role: 'Groom', side: 'Scum'},
    ];
    return (
      <div>
        <p>Je suis {nom}, {episode >= 6 && "chevalier Jedi,"} ami du capitaine {nom2}</p> 
        <p>Je suis {nom}, {episode >= 6 ? "chevalier Jedi," : "pilote rebelle"} ami du capitaine {nom2}</p>
        <table border="1">
            <tbody>
                <tr><th>Nom</th><th>Role</th><th>Faction</th></tr>
                {characters.map((perso, i) => (
                    <TableLine  key={uid(perso)} perso={perso} imgSize={50}/>
                ) )}
            </tbody>
        </table> 
      </div>
    );
}

TableLine.defaultProps = {
    imgSize:  33,
    className: "line",
}

TableLine.propTypes = {
    perso: PropTypes.object.isRequired,
    imgSize: PropTypes.number,
    className: PropTypes.string,
}

export default SimpleComponent;
