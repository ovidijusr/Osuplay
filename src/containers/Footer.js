import React, { Component } from 'react'
import { connect } from 'react-redux';
import './Footer.css'
import Player from '../components/Player';
import * as actions from '../actions/index';
class Footer extends Component {

  render() {
    return (
        <div className="footer">
          <h1
            onClick={() => this.props.actions.setPause(false)}
          >
            Play
          </h1>
          <h1
            onClick={() => this.props.actions.togglePause()}
          >
            {this.props.player.pause &&
              'Play'
            }
            {!this.props.player.pause &&
              'Pause'
            }
          </h1>
          <Player
            {...this.props.player}
          />
        </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  player: state.player,
})
const mapDispatchToProps = (dispatch) => (
  {
    actions: {
      setSong: (id) => dispatch(actions.setSong(id)),
      togglePause: (pause) => dispatch(actions.togglePause()),
    }
  }
)
export default connect(mapStateToProps, mapDispatchToProps)(Footer);
