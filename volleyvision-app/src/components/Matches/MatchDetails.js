import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { useParams } from 'react-router';
import { compose } from 'redux'

const ProjectDetails = (props) => {
  const { match } = props;
  if (match) {
    return (
      <div className="container section match-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{match.number}</span>
            <p>{match.opponent}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>{match.winorloss}</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading match...</p>
        <p> jk it broken somewhere</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id
  const matches = state.firestore.data.matches;
  const match = matches ? matches[id] : null;
  return {
    match: match
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'matches'
  }])
)(ProjectDetails)
