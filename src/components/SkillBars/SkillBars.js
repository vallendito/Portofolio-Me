import React, {Component} from 'react';


class Skillbars extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true
        };
    }

    componentDidMount() {
        setTimeout(()=> {
            this.setState({collapsed:false})
        }, 1000);
    }

    render() {
        const { collapsed } = this.state;
        const { color, skills } = this.props;
        
        return(
            <div  className={`programs ${collapsed ? 'collapsed' : ''}`}>
                <ul className="skillBars">
                    {skills.map((skill, index)=> 
                        <li key={skill.type} 
                        style={{ 
                            width: `${skill.level}%`, 
                            backgroundColor: `${color}`  }}>
                            <p>{skill.type}<span>{skill.level}%</span></p>
                        </li> 
                    )}
                </ul>
            </div>
        );
    }
}

export default Skillbars;
