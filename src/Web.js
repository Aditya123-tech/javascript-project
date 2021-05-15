import data from './post.json';
//import { Route, Switch, Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'

var element = data;
function Web(props) {

    return (
        <>
            <div><h1 align='center' >  Information of Post</h1> </div>


            <div>
                {element.map((ele) => {

                    if (Number(ele.id) === Number(props.match.params.id)) {

                        return <div align='justify'><div><div>ID:{ele.id}</div><div>USERID:{ele.userId}</div><div>TITLE:{ele.title}</div></div></div>
                    }
                }
                )}
            </div>
           

        </>

    )

}

export default withRouter(Web);