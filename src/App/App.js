import React from 'react';
import './App.css';
import Header from '../Header/Header'
import Header2 from '../Header2/Header2'
import HowTo from '../HowTo/HowTo'
import UrlBox from '../UrlBox/UrlBox'
import Identify from '../Identify/Identify'
import PictureBox from '../PictureBox/PictureBox'
import TryAnother from '../TryAnother/TryAnother'
import SignInPage from '../SignInPage/SignInPage'
import RegisterPage from '../RegisterPage/RegisterPage'
import Count from '../Count/Count'
import Particles from 'react-particles-js'
import Clarifai from 'clarifai'
import tachyons from 'tachyons'

  //----------------------------------------------------------------------------------------------------------------------------

const partcleOptions = {
                particles: {
                  number: {
                    value: 200,
                    density: {
                      enable: true,
                      value_area: 500,
                    }
                  }  
                }
              }

const app = new Clarifai.App({
         apiKey: '2cc74ec7b0bd4d81a71f26638f6645b3'
        });

class App extends React.Component {
      constructor() {
        super()
        this.state = {
          UrlBox: '',
          PhotoUrl: '',
          condition: true,
          box: {},
          route: "signIn",
          user: {
            id: '',
            name: '',
            email: '',
            password: '',
            entries: 0,
            joined: ''
          }
        }
      }

  //--------------------------------------- App Methods ------------------------------------------------------------------------



    faceDetection = (data) => {
        console.log(data)
         const digits = data.outputs[0].data.regions[0].region_info.bounding_box;
         const image = document.getElementById('imagine');
         const width = image.width;
         const height = image.height;
         console.log("width, height")

         return {
          leftCol: digits.left_col * width,
          topRow: digits.top_row * height,
          rightCol: width - (digits.right_col * width),
          bottomRow: height - (digits.bottom_row * height)
         }
    }

    

    peeper = (box) => {
      this.setState({box: box})
    }


    onInputChange = (event) => {
        this.setState({UrlBox: event.target.value})
        
    }

    onSubmit = () => {
      if (this.state.UrlBox.includes('http')) {
          this.setState({PhotoUrl: this.state.UrlBox})
          this.setState({condition: false})
          app.models.predict("a403429f2ddf4b49b307e318f00e528b", this.state.UrlBox)
              .then(response => this.peeper(this.faceDetection(response)));
        fetch('http://localhost:3001/image', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            id: this.state.user.id
          })
        }).then(resp => resp.json())
        .then(data => this.setState(Object.assign(this.state.user, {entries: data})))
      }
      else {console.log('lame')}
    }

    tryAnother = () => {
        this.setState({
          condition: true,
          PhotoUrl: '',
          UrlBox: ''
        })
    }

    onRouteChange = (route) => {
        this.setState({route: route})
    }

    onRouteChange2 = (route) => {
      this.setState({
        PhotoUrl: '',
        UrlBox: ''
      })
        this.setState({route: route})
        this.setState({condition: true})
    }

    loadUser = (user) => {
      console.log(user)
        const { id, name, email, password, entries, joined } = user;
          this.setState({
            user: {
              id: id,
              name: name,
              email: email,
              password: password,
              entries: entries,
              joined: joined
            }
          })
          console.log("USER STATE", this.state.user)
    }


    //---------------------------------------^^ App Methods ^^------------------------------------------------------------------------

  render() {
    return (
      this.state.route === 'signIn'
      ?
        <div>
          <Particles className="particles" params={partcleOptions}/>
          <SignInPage loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
        </div>
      :
      this.state.route === 'home'
      ?
      this.state.condition 
      ? 
        <div className='boxer'>
          <Particles className="particles" params={partcleOptions}/>
          <Header name={this.state.user.name}onRouteChange={this.onRouteChange}/>
          <HowTo />
          <UrlBox UrlBox={this.onInputChange}/>
          <Identify onSubmit={this.onSubmit}/>
        </div>
      :
    
        <div>
          <div className='boxer'>
            <Particles className="particles" params={partcleOptions}/>
            <Header2 onRouteChange={this.onRouteChange2}/>
            <Count name={this.state.user.name} count={this.state.user.entries}/>
            <TryAnother tryAnother={this.tryAnother}/>
            <PictureBox box={this.state.box} photo={this.state.PhotoUrl}/>
          </div>
        </div>
        
      :
      this.state.route === "register"
      ?
        <div>
          <Particles className="particles" params={partcleOptions}/>
          <RegisterPage loadUser={this.loadUser}onRouteChange={this.onRouteChange}/>
        </div>
      :
        <div>
          <p>Error: Internal Error</p>
        </div>
    )
  }
}

export default App;
