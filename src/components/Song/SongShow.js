// import React from 'react';
// import SongCard from './SongCard';
// import SongNoteFormContainer from '../../containers/SongNoteFormContainer';
// import BandCard from '../Band/BandCard';
// import VideoPlayer from '../Video/VideoPlayer';
// import VideoCardContainer from '../Video/VideoCardContainer';
//
// const ShowShow => props => {
//   return (
//     <div className="show">
//       <div className='ui grid container'>
//         <div className="sixteen wide centered column">
//           {this.props.song ? <h1>Song Title:  {this.props.song.title}</h1> : null}
//           <br></br>
//         </div>
//         <div className="five wide column">
//           <BandCard band={this.props.band} />
//         </div>
//         <div className=" five wide column">
//           {this.props.song.id ? <SongCard song={this.props.song} band={this.props.band} /> : null }
//           <br></br>
//           {this.props.song.id? <SongNoteFormContainer song={this.props.song} /> : null}
//         </div>
//         <div className="five wide column">
//           <VideoPlayer  url={this.props.song.you_tube_url} video={this.state.youTubeClick ? this.props.currentVideo : null }/>
//           {this.state.youTubeClick && this.props.currentVideo ? (
//             <div>
//               <div>
//                 <button className="ui button" onClick={() => this.saveVideo()}>Save Video</button>
//               </div>
//               <div>
//                 <p>See Less</p>
//                 <i className="minus circle icon" onClick={() => this.youTubeToggle()}/>
//               </div>
//             </div>
//           ) : (
//             <div>
//               {!this.props.youTubeLoading ? <button className="ui button" onClick={this.searchYouTube}>Search YouTube</button> : <button className="ui loading button" type="submit">Submit</button> }
//
//             </div>
//
//           ) }
//           {this.state.youTubeClick && !this.props.youTubeLoading ? <VideoCardContainer/> : null }
//         </div>
//       </div>
//     </div>
//   )
// }
//
// export default SongShow
