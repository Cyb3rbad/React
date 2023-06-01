import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faYoutube, faLinkedinIn, faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import "./App.css"

const App = () => {
    const year = new Date().getFullYear();

    return (
        <div className="App">
            
            <footer>{`Copyright © Step IT ${year}`}
                <FontAwesomeIcon icon={faFacebookF}/>
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faYoutube} />
                <FontAwesomeIcon icon={faLinkedinIn} />
                <FontAwesomeIcon icon={faGithubAlt} />
            </footer>;
        </div>
    );
}

export default App
