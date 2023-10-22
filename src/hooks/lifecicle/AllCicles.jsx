import React , {useEffect} from 'react';

const AllCicles = () => {

    useEffect(() => {


        const intervalID = setInterval(() => {
            document.title = `${new Date()}`;
            console.log('Update of component');
        }, 1000)

        return () => {
            console.log('Its go to dissapear');
            document.title = "Tiempo";
            clearInterval(intervalID); 
        };
    }, []);

    return (
        <div>
            
        </div>
    );
}

export default AllCicles;
