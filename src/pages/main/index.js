import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as FavoriteActions from "../../store/actions/favorites";

class Main extends Component {
  static propTypes = {
    addFavoritesRequest: PropTypes.func.isRequired,
    favorites: PropTypes.shape({
      loading: PropTypes.bool,
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
          description: PropTypes.string,
          url: PropTypes.string
        })
      )
      //error: PropTypes.oneOfType([null, PropTypes.string])
    }).isRequired
  };

  state = {
    repositoryInput: ""
  };

  componentDidMount() {
    this.props.addFavoritesRequest("vuejs/vue");
  }

  handleRepository = e => {
    e.preventDefault();

    this.props.addFavoritesRequest(this.state.repositoryInput);

    this.setState({ repositoryInput: "" });
  };

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleRepository}>
          <input
            placeholder="facebook/react"
            value={this.setState.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">Adicionar</button>

          {this.props.favorites.loading && <span>Carregando...</span>}

          {!!this.props.favorites.error && (
            <span style={{ color: "#F00" }}>{this.props.favorites.error}</span>
          )}
        </form>

        <ul>
          {this.props.favorites.data.map(f => (
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
