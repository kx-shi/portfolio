// Project page
// Dynamically pick page from projectPages

import React from 'react';
import { useParams } from 'react-router-dom';
import {DatatonismPage, SpirPage, SteammindPage, SfbsPage} from './projects/export-projects';

const projectPages = {
    1: DatatonismPage,
    2: SpirPage,
    3: SteammindPage,
    4: SfbsPage,
};

export default function Project(){
    const { id } = useParams();
    const Page = projectPages[id];
    return(
        <Page />
    )
}


/* OLD CLASS
export default class Project extends Component {
    render () {
        const { proj, match } = this.props
        const Page = projectPages[match.params.id]
        //console.log(Page)
        return (
            <Fragment>
                <div class="container-grey no-flex">
                    <h1>{projectPages[match.params.id].title}</h1>
                    <Page />
                </div>
            </Fragment>
        );
    };
};
*/
