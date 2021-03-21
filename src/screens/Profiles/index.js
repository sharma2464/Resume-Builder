import React from 'react'
import {useSelector} from "react-redux";
import _ from 'lodash'
import {getProfiles, setProfiles} from "../../config/slices/usersSlice";

export default function Profiles(props) {
    const users = useSelector(state => state.users)

    React.useEffect(() => {
        if (_.isEmpty(users)) {
            getProfiles().then(data => {
                console.log({data})

                setProfiles(data)
            }).catch(error => {
                console.log({error})
            })
        }
    }, [])
    return (
        <>gggggggggggg</>
    )
}
