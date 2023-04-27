import Heart from './heart'


function Index( { name, ...props }) {
    switch (name){
        case 'heart':{
            return <Heart {...props}/>
        }
        default:{
            return null
        }
    }
}

export default Index
