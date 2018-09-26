import React from 'react'
import { Grid } from 'semantic-ui-react'
import axios from 'axios'

class App extends React.Component {
  state = { tweets: [] }

  componentDidMount() {
    axios.get('/api/tweets')
      .then( res => this.setState({ tweets: res.data }) )
  }

  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={16} computer={4}>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={16} computer={12}>
            <Tweets tweets={this.state.tweets} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default App
