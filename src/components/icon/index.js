import Heart from './heart'
import Branch from './branch'
import Check from './check'
import Home from './home'
import Cancel from './cancel'


function Index( { name, ...props }) {
    switch (name){
        case 'heart':{
            return <Heart {...props}/>
        }
        case 'branch':{
            return <Branch {...props}/>
        }
        case 'check':{
            return <Check {...props}/>
        }
        case 'home':{
            return <Home {...props}/>
        }
        case 'cancel':{
            return <Cancel {...props}/>
        }
        default:{
            return null
        }
    }
}

Index.defaultProps = {
    size : 16,
    color : 'white',
}
export default Index
