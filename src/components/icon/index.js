import Heart from './heart'
import Branch from './branch'
import Check from './check'
import Home from './home'
import Cancel from './cancel'
import Book from './book'
import Link from './link'
import Location from './location'
import Search from './search'
import Star from './star'
import Twitter from './twitter'
import User from './user'


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
        case 'book':{
            return <Book {...props}/>
        }
        case 'link': {
            return <Link {...props} />
        }
        case 'location': {
            return <Location {...props} />
        }
        case 'search': {
            return <Search {...props} />
        }
        case 'star': {
            return <Star {...props} />
        }
        case 'twitter': {
            return <Twitter {...props} />
        }
        case 'user': {
            return <User {...props} />
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
