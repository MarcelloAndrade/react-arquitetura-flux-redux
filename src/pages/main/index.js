import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as FavoriteActions from "../../store/actions/favorites";

class Main extends Component {
  static propTypes = {
    addFavorites: PropTypes.func.isRequired,
    favorites: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        description: PropTypes.string,
        url: PropTypes.string
      })
    ).isRequired
  };

  state = {
    repositoryInput: ""
  };

  handleRepository = e => {
    e.preventDefault();
    this.props.addFavorites();
  };

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleRepository}>
          <input
            placeholder="usuario/repositorio"
            value={this.setState.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">Adicionar</button>
        </form>

        <ul>
          {this.props.favorites.map(f => (
            <li key={f.id}>
              <p>
                <strong>{f.name}</strong> ({f.description})
                <a href={f.url}>Acessar</a>
              </p>
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(FavoriteActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
