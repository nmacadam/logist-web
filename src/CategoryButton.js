import React from 'react';

class CategoryButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { active: true };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            active: !state.active
        }));

        this.props.onCategoryToggle(this.props.title, !this.state.active);
        console.log(this.props.title + " " + this.state.active);
    }

    render() {
        if (this.state.active === true)
        {
            return (
                <a onClick={this.handleClick} id={this.props.title} className='categoryButton'>{this.props.title}</a>
            );
        }

        return (
            <a onClick={this.handleClick} id={this.props.title} className='categoryButton' style={{textDecoration:'line-through', opacity:'60%'}}>{this.props.title}</a>
        );
    }
}

export default CategoryButton;