import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import AudioPlayer from './AudioPlayer';
import withAuth from '../hocs/withAuth';
import * as actions from '../actions';



// const SongShow = props => {
//   console.log('In SongShow', props)
//   return (
//     <div>
//       <div>
//         {props.song.id? (
//           <div>
//             <h2>{props.song.title}</h2>
//             <AudioPlayer song={props.song}/>
//           </div>
//         ) : (
//           null
//         )}
//       </div>
//     </div>
//   )
// }

const SongShow = props => {
  console.log('In SongShow', props)
  return (
    <div>
      <div>
        {props.song.id? (
          <div>
            <h2>{props.song.title}</h2>
              <div className='delete-band'>
                <i onClick={() => props.deleteSong(props.song.id, props.history)}className="remove circle icon"></i>
                <h3>Delete Song</h3>
              </div>
            <AudioPlayer song={props.song}/>
          </div>
        ) : (
          null
        )}
      </div>
    </div>
  )
}

//Check out this problem of refreshing not working down below
const mapStateToProps = (state, prevProps) => {
  if (state.userData.songs) {
    return {
      band: state.userData.bands.find(band => band.id === parseInt(prevProps.match.params.bandId)),
      song: state.userData.songs.find(song => song.id === parseInt(prevProps.match.params.songId))
    }
  } else {
    return {
      band: {},
      song: {}
    }
  }
}

export default withAuth(withRouter(connect(mapStateToProps, actions)(SongShow)))
