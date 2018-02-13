import React from 'react';


class UserPicInput extends React.Component {

handleFileSubmit = event => {
  event.preventDefault()
  console.log('in handleFileSubmit')
}
  render() {
    return (
      <div>
        <form onSubmit={() => this.handleFileSubmit()}>
          <input type="file" name="image" accept="image/*" id="image_upload"></input>
          <button className="ui button" type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default UserPicInput
