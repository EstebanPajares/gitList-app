import Heart from './heart'
import Branch from './branch'


function Index( { name, ...props }) {
    switch (name){
        case 'heart':{
            return <Heart {...props}/>
        }
        case 'branch':{
            return <Branch {...props}/>
        }
        default:{
            return null
        }
    }
}

export default Index
